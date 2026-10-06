import { prisma } from '../lib/prisma.js';
import { transporter } from '../config/transporter.js';

const SERVICE_LABELS = {
  therapy: 'Therapy',
  group: 'Group Therapy',
  couples: 'Couples Counseling',
  family: 'Family Therapy',
  other: 'Other Services',
};

const CLIENT_LABELS = {
  myself: 'Myself',
  child: 'My Child',
  us: 'My Partner & I',
  family: 'My Family',
  women: 'Women',
  men: 'Men',
  addiction: 'Addiction Recovery',
  grief: 'Grief',
  trauma: 'Trauma',
  other: 'And More',
};

const FORMAT_LABELS = {
  'in-person': 'In-Person',
  telehealth: 'Telehealth',
  either: 'Either',
};

export const sendEmail = async (req, res, next) => {
  const {
    name,
    email,
    phone,
    serviceType,
    clientType,
    sessionFormat,
    message,
  } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, error: 'Name, email, and phone are required.' });
  }

  // Always persist inquiry in MySQL Inbox table
  let inquiryId = null;
  try {
    const inquiry = await prisma.inbox.create({
      data: {
        name,
        email,
        phone,
        serviceType: SERVICE_LABELS[serviceType] || serviceType || 'Not specified',
        clientType: CLIENT_LABELS[clientType] || clientType || 'Not specified',
        sessionFormat: FORMAT_LABELS[sessionFormat] || sessionFormat || 'Not specified',
        message: message || '',
        status: 'new',
      },
    });
    inquiryId = inquiry.id;
  } catch (dbErr) {
    console.error('Database lead save error:', dbErr.message);
  }

  const mailOptions = {
    from: `"City Psychology Website" <${process.env.EMAIL_FROM || 'info@citypsychologypb.com'}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_FROM,
    replyTo: email,
    subject: `New Consultation Request from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Consultation Request — City Psychology
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr style="background: #f3f4f6;">
            <td style="padding: 10px 14px; font-weight: bold; width: 35%;">Full Name</td>
            <td style="padding: 10px 14px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold;">Email</td>
            <td style="padding: 10px 14px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background: #f3f4f6;">
            <td style="padding: 10px 14px; font-weight: bold;">Phone</td>
            <td style="padding: 10px 14px;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold;">Service Type</td>
            <td style="padding: 10px 14px;">${SERVICE_LABELS[serviceType] || serviceType || 'Not specified'}</td>
          </tr>
          <tr style="background: #f3f4f6;">
            <td style="padding: 10px 14px; font-weight: bold;">Client Type</td>
            <td style="padding: 10px 14px;">${CLIENT_LABELS[clientType] || clientType || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; font-weight: bold;">Session Format</td>
            <td style="padding: 10px 14px;">${FORMAT_LABELS[sessionFormat] || sessionFormat || 'Not specified'}</td>
          </tr>
        </table>

        ${message ? `
        <div style="margin-top: 16px; padding: 14px; background: #f9fafb; border-left: 4px solid #2563eb; border-radius: 4px;">
          <strong>Additional Details:</strong>
          <p style="margin: 8px 0 0; color: #374151;">${message}</p>
        </div>` : ''}

        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
          This email was sent from the City Psychology website contact form.<br>
          Lead is also recorded in your MySQL database & Admin Dashboard Inbox.
        </p>
      </div>
    `,
  };

  try {
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const info = await transporter.sendMail(mailOptions);
      console.log(`📧 Email sent to ${process.env.EMAIL_TO} — MessageID: ${info.messageId}`);
      return res.json({ success: true, messageId: info.messageId, inquiryId });
    } else {
      return res.json({ success: true, inquiryId, notice: 'Lead recorded in MySQL database inbox' });
    }
  } catch (err) {
    console.error('⚠️ Email delivery warning (lead saved in MySQL inbox):', err.message);
    return res.json({ success: true, inquiryId, warning: 'Lead saved in MySQL database, email delivery error: ' + err.message });
  }
};
