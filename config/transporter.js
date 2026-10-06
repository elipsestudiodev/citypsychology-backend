import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  family: 4,
});

transporter.verify((error) => {
  if (error) {
    console.warn('⚠️ SMTP not fully connected (check .env credentials):', error.message);
  } else {
    console.log('✅ SMTP connected — ready to send emails!');
  }
});
