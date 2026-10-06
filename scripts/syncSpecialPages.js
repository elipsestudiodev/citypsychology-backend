import { prisma } from '../lib/prisma.js';

const LINEN_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/3fb221ca4_generated_7b9764f7.png';
const OFFICE_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png';

const ICONS = {
  Brain: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/><path d="M15.7 13.5A3 3 0 0 0 18 10"/><path d="M8.3 13.5A3 3 0 0 1 6 10"/></svg>`,
  Baby: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>`,
  Users: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  Heart: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  UsersRound: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-5-8a5 5 0 0 0-.45-8.3"/></svg>`,
  Sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
  Shield: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  MessageCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  CheckCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  ArrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
};

const SERVICES_DATA = [
  {
    icon: ICONS.Brain,
    title: 'Individual Counseling',
    description: 'Life can be full of anxiety, dead-end situations, or feelings of emptiness. Our evidence-based individual therapy helps you navigate challenges with CBT, EMDR, and psychodynamic approaches tailored to your unique story.',
    approaches: ['Cognitive Behavioral (CBT)', 'EMDR', 'Psychodynamic', 'Solution-Focused Brief Therapy'],
  },
  {
    icon: ICONS.Baby,
    title: 'Adolescent Counseling',
    description: 'Teens face unique challenges family changes, identity struggles, peer pressure. Unlike adults, they cannot yet draw on past solution strategies. We provide age-appropriate therapeutic support including play therapy for younger clients.',
    approaches: ['Play Therapy', 'Family Systems', 'Behavioral Intervention', 'Interpersonal Therapy'],
  },
  {
    icon: ICONS.Users,
    title: 'Couples Counseling',
    description: 'Even without major problems, routine and boredom can erode partnerships. We help couples rediscover connection, rebuild communication, and navigate conflict with proven therapeutic frameworks.',
    approaches: ['Interpersonal Therapy', 'Family/Marital', 'Motivational Interviewing', 'Eclectic'],
  },
  {
    icon: ICONS.Heart,
    title: 'Family Therapy',
    description: 'Family dynamics shape who we are. Our systemic approach addresses the whole family unit, healing patterns that have been passed down and creating healthier ways of relating to one another.',
    approaches: ['Family Systems', 'Interpersonal', 'Solution-Focused', 'Intervention'],
  },
  {
    icon: ICONS.UsersRound,
    title: 'Group Therapy',
    description: 'Healing happens in connection. Our small, customized therapy groups create a supportive space to process shared experiences alongside others who understand, guided by a licensed clinician.',
    approaches: ['Women', 'Men', 'Addiction Recovery', 'Grief', 'Trauma', 'And More'],
  },
  {
    icon: ICONS.Sparkles,
    title: 'Trauma & EMDR',
    description: 'Specialized trauma recovery using Eye Movement Desensitization and Reprocessing (EMDR) alongside traditional therapeutic modalities for deep, lasting healing from PTSD, abuse, and traumatic experiences.',
    approaches: ['EMDR', 'Trauma-Focused CBT', 'Psychodynamic', 'Somatic Approaches'],
  },
  {
    icon: ICONS.Shield,
    title: 'Addiction Counseling',
    description: 'Our comprehensive approach to addiction addresses both the substance use and underlying mental health conditions, providing a path to sustainable recovery and a fulfilling life.',
    approaches: ['Motivational Interviewing', 'CBT', 'Family Systems', 'Relapse Prevention'],
  },
  {
    icon: ICONS.MessageCircle,
    title: 'Christian Counseling',
    description: 'As members of the South Florida Association of Christian Counselors, we integrate faith and psychological well-being, nurturing mind, body, and spirit toward the abundant life God intends.',
    approaches: ['Faith-Integrated Therapy', 'Biblical Principles', 'Professional Clinical Methods'],
  },
];

const VALUES_DATA = [
  { title: 'Evidence-Based Care', description: 'Every approach is grounded in proven clinical methodologies and ongoing research.' },
  { title: 'Integrated Treatment', description: 'Therapy and psychiatry working in concert for comprehensive mental wellness.' },
  { title: 'Client-Centered', description: 'Your unique needs, values, and goals drive every aspect of your treatment plan.' },
  { title: 'Accessible & Flexible', description: 'Sliding scale options, flexible scheduling, and both in-person and telehealth sessions.' },
  { title: 'Faith-Compatible', description: 'Integration of Christian values for those who desire a faith-informed approach.' },
  { title: 'Growth-Oriented', description: 'Building a multi-disciplinary group to serve the Palm Beach community at scale.' },
];

const INSURANCES = [
  'Aetna', 'BlueCross BlueShield', 'Cigna', 'United Healthcare',
  'Humana', 'Medicare', 'Tricare', 'And More...',
];

const TEAM_DATA = [
  {
    name: 'Dillon A. Steinman, LMHC, QS',
    title: 'Founder & Licensed Mental Health Counselor',
    imageUrl: '/assets/1.webp',
    specialties: ['Youth Counseling', 'Family Therapy', 'Inpatient Care', 'Outpatient Care', 'Clinical Supervision'],
    bio: `My experience covers a wide variety of clients and environments. I've been working with youth and students in faith-based settings since the turn of the century, and I continued some of that work throughout my college years.

Working with individuals living with chronic and severe mental illness was a great learning experience. I saw the most extreme cases present themselves while working with treatment teams to guide people toward a higher quality of life. I've also worked with children in foster care and helped their families resolve the trauma of those experiences. Addressing trauma and addiction in adults was my full-time role for multiple years.

All of that experience has served me well over the past couple of decades in my outpatient private practice, where I address a wide range of issues involving children, families, relationships, trauma, addiction, anxiety, depression, and more.

I feel honored to walk alongside people as they resolve the various stresses they're dealing with. I believe my faith contributes to helping others, and I integrate it directly whenever clients request it. As clinical director of our outpatient office, I also help clients indirectly by providing helpful resources and connecting them with quality therapists.`,
  },
  {
    name: 'Peter Copan',
    title: 'Registered Mental Health Counselor Intern',
    imageUrl: '/assets/2.webp',
    specialties: ['Trauma-Informed Therapy', 'Self-Discovery', 'Neuroscience-Based Approaches', 'Relationship Navigation'],
    bio: `Peter believes that most people don't realize how amazing they truly are, or how pain and trauma can block them from embracing that amazingness. Over the years, he has developed a process that empowers clients to better understand themselves and discover the map they've been relying on to navigate their lives, offering hospitality, kindness, and respect in every session. His work blends insights from neuroscience and psychology with time-tested ancient wisdom, guiding clients toward healing and a more meaningful way of living whether that means addressing deep-rooted pain or putting out fires currently springing up in life.`,
  },
  {
    name: 'Michelle Cook, LMHC',
    title: 'Licensed Mental Health Counselor',
    imageUrl: '/assets/3.webp',
    specialties: ['EMDR', 'Trauma Processing', 'Coping Skills Development', 'Christian Faith-Integrated Counseling'],
    bio: `Michelle works with clients who feel weighed down by hardship, stress, and past trauma — helping them move past patterns like insecurity, isolation, fear, and impulsive reactions toward a more genuine, connected, and free version of themselves. She equips clients with practical social and emotional tools for daily living, and uses EMDR, an evidence-based approach known for providing quick relief from distress, to help process past trauma. For those who wish to integrate their Christian faith into the healing process, Michelle offers that support as well.`,
  },
  {
    name: 'Terrini Woods, LMHC',
    title: 'Licensed Mental Health Counselor',
    imageUrl: '/assets/4.webp',
    specialties: ['CBT', 'Solution-Focused Brief Therapy', 'Emotionally Focused Therapy', 'Narrative Therapy', 'Grief & Loss', 'Family Conflict'],
    bio: `Terrini creates a judgement-free space grounded in genuine care, helping clients navigate communication struggles with loved ones, high stress, grief and loss, family and parent conflicts, and past traumas that interrupt their peace. She strongly believes in the power of prayer, psycho-education, and mental health awareness to foster holistic healing. Drawing on Cognitive Behavioral Therapy, Solution-Focused Brief Therapy, Humanistic, Interpersonal, Emotionally Focused, Narrative, and Strength-Based approaches, Terrini listens closely to each client's story and tailors her support accordingly.`,
  },
  {
    name: 'Jess Fuentes, LMHC',
    title: 'Licensed Mental Health Counselor',
    imageUrl: '/assets/5.webp',
    specialties: ['Couples Therapy', 'Relational Trauma', 'Anxiety & Depression', 'Christian-Rooted Psychotherapy'],
    bio: `Jess helps clients break free from personal struggles, build stronger relationships, and live more fulfilling lives. Whether working with couples looking to deepen their connection or overcome relational trauma, young adults navigating life's direction, or individuals struggling with anxiety and depression, Jess is dedicated to providing a warm, accepting environment for growth. Her approach draws on evidence-based psychotherapy rooted in a Christian understanding, helping clients become stronger and experience real healing.`,
  },
  {
    name: 'Snjezana Mileta',
    title: 'Psychotherapist',
    imageUrl: '/assets/6.webp',
    specialties: ['Psychodynamic Therapy', 'CBT', 'DBT', 'Mindfulness', 'EMDR', 'Attachment-Focused Work'],
    bio: `When deep sadness, confusion, or fear take over, it can feel incredibly lonely. Whether you're struggling with heavy internal experiences or facing painful life circumstances, please know that you don't have to carry this weight by yourself. Reaching out to a warm, genuine, and skilled professional is a courageous step toward healing.

Together, we can gently explore your pain and confusing thoughts to find clarity and understanding. My desire is to help you rediscover your inner resilience and resources, and to build on your strengths, so you can stop hiding away from the world and gently step back into a full, meaningful life.

I work primarily with adults and young adults navigating complex relational trauma, childhood adversity, dysfunctional family dynamics, and the patterns of emotional dysregulation that often follow. I specialize in working with individuals who grew up in invalidating environments or dysfunctional families, which often shows up later in life as chronic anxiety, unstable moods, depression, high stress, or traits of personality disorders. Many of these individuals turn to maladaptive coping mechanisms to soothe their inner pain, which often leads to addictive behaviors or addiction. I'm well equipped to treat co-occurring addictive behaviors.

I love working with this population because they thrive when given a strong, warm, and secure therapeutic alliance. My approach helps clients understand the root of their relational patterns, heal from residual wounds, and develop healthy coping strategies so they can build stable lives and relationships, and function well in the personal, social, academic, and occupational areas of life.

My approach is insight-oriented and client-centered, grounded in agape love. I integrate evidence-based therapeutic modalities and interventions tailored to each client's needs and personality, including Psychodynamic Therapy, Cognitive Behavioral Therapy, Dialectical Behavior Therapy, Experiential Dynamic Psychotherapy, mindfulness practices, and experiential mind-body techniques. When appropriate, I also bring in EMDR, playful Gestalt techniques and humor, and elements of existential therapy.`,
  },
];

const FAQS_DATA = [
  {
    q: 'What should I expect during my first visit?',
    a: "Your first session begins with a comprehensive assessment where we discuss your history, current challenges, and goals. This helps us create a personalized treatment plan. We encourage you to start with a free, no-obligation phone consultation to ensure we're the right fit.",
  },
  {
    q: 'Do you accept insurance?',
    a: "Yes, we accept most major insurance plans including Aetna, BlueCross BlueShield, Cigna, United Healthcare, Humana, Medicare, and Tricare. We'll help you verify your coverage and understand any out-of-pocket costs before your first session.",
  },
  {
    q: 'How much do sessions cost?',
    a: 'Our standard session rate is $150. We offer a sliding scale for eligible clients and accept various payment methods. We also offer reduced fees in certain circumstances to ensure our services remain accessible.',
  },
  {
    q: 'Do you offer telehealth / online sessions?',
    a: 'Absolutely. We provide both in-person sessions at our West Palm Beach office and secure telehealth sessions. Many clients appreciate the flexibility of choosing the format that best suits their schedule and comfort level.',
  },
  {
    q: 'What types of therapy do you offer?',
    a: 'We offer a diverse range of evidence-based approaches including CBT, EMDR, Family Systems therapy, Psychodynamic therapy, Play Therapy, Motivational Interviewing, and Solution-Focused Brief Therapy. Your therapist will recommend the approaches best suited to your needs.',
  },
  {
    q: 'What is integrated care with medication management?',
    a: 'Our integrated model combines traditional talk therapy with psychiatric services from a physician (MD). This means your therapist and psychiatrist work together to create a coordinated treatment plan that addresses both the psychological and biological aspects of mental health.',
  },
  {
    q: 'Do you offer Christian counseling?',
    a: 'Yes. As members of the South Florida Association of Christian Counselors, we offer faith-integrated therapeutic approaches for clients who desire them. This combines professional clinical methods with Christian values and principles.',
  },
  {
    q: 'What ages do you work with?',
    a: 'We work with children, adolescents, adults, and seniors. Our team has specialized training in age-appropriate therapeutic approaches, including play therapy for younger children and family systems work for adolescents.',
  },
  {
    q: 'How do I schedule an appointment?',
    a: 'You can reach us by phone at 561-537-5586, email at dillon@citypsychologypb.com, or by using the booking form on our Contact page. We offer flexible scheduling Monday through Saturday.',
  },
  {
    q: 'Is everything confidential?',
    a: '100% confidential. Your privacy is our highest priority. All sessions and records are protected under HIPAA regulations and professional ethical standards.',
  },
];

function serviceCard(s) {
  const tags = s.approaches
    .map(a => `<span style="font-size:0.75rem;color:rgba(11,19,43,0.7);padding:0.25rem 0.75rem;border-radius:9999px;background:#f1f5f9;border:1px solid #e2e8f0;display:inline-block">${a}</span>`)
    .join('');

  return `<div style="padding:2rem;border-radius:1rem;background:#ffffff;border:1px solid #e2e8f0;box-shadow:0 1px 3px rgba(0,0,0,0.04)">
  <div style="width:3.5rem;height:3.5rem;border-radius:0.75rem;background:rgba(14,165,233,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:1.5rem;color:#0ea5e9">
    ${s.icon}
  </div>
  <h3 style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:600;color:#0b132b;margin-bottom:1rem;line-height:1.3">${s.title}</h3>
  <p style="color:#64748b;font-size:0.9375rem;line-height:1.8;margin-bottom:1.5rem">${s.description}</p>
  <div style="padding-top:1rem;border-top:1px solid #e2e8f0">
    <p style="font-size:0.75rem;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem">Approaches</p>
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem">${tags}</div>
  </div>
</div>`;
}

function providerCard(p) {
  const tags = p.specialties
    .map(s => `<span style="font-size:0.75rem;color:rgba(11,19,43,0.7);padding:0.375rem 0.75rem;border-radius:9999px;background:#f1f5f9;border:1px solid #e2e8f0;display:inline-block">${s}</span>`)
    .join('');

  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2rem;padding:2rem;border-radius:1rem;background:#ffffff;border:1px solid #e2e8f0;margin-bottom:1.5rem;box-shadow:0 1px 3px rgba(0,0,0,0.04)">
  <div style="border-radius:0.75rem;overflow:hidden;aspect-ratio:3/4;max-width:320px;width:100%">
    <img src="${p.imageUrl}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover"/>
  </div>
  <div>
    <p style="color:#0ea5e9;font-size:0.75rem;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:0.5rem;font-weight:500">${p.title}</p>
    <h3 style="font-family:'Playfair Display',serif;font-size:1.75rem;font-weight:600;color:#0b132b;margin-bottom:1rem">${p.name}</h3>
    <p style="color:#64748b;font-size:0.9375rem;line-height:1.8;margin-bottom:1.5rem;white-space:pre-line">${p.bio}</p>
    <div>
      <p style="font-size:0.75rem;color:#94a3b8;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.75rem">Specialties</p>
      <div style="display:flex;flex-wrap:wrap;gap:0.5rem">${tags}</div>
    </div>
  </div>
</div>`;
}

function buildServicesHtml() {
  return `<section style="position:relative;padding:10rem 1.5rem 6rem;overflow:hidden;background:#f8fafc">
  <div style="position:absolute;inset:0">
    <img src="${LINEN_IMG}" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.3"/>
    <div style="position:absolute;inset:0;background:linear-gradient(to bottom,#f8fafc,rgba(248,250,252,0.95),#f8fafc)"></div>
  </div>
  <div style="position:relative;max-width:56rem;margin:0 auto;text-align:center">
    <p style="color:#0ea5e9;font-size:0.75rem;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:1rem;font-weight:500">Comprehensive Care</p>
    <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.5rem,6vw,3.75rem);font-weight:600;color:#0b132b;margin-bottom:1.5rem">Our Services</h1>
    <p style="color:#64748b;font-size:1.125rem;line-height:1.75;max-width:40rem;margin:0 auto">A curated suite of evidence-based treatments designed to address the full spectrum of mental health needs from individual therapy to integrated psychiatric care.</p>
  </div>
</section>
<section style="padding-bottom:8rem;background:#f8fafc">
  <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,480px),1fr));gap:1.5rem">
      ${SERVICES_DATA.map(serviceCard).join('')}
    </div>
    <div style="margin-top:5rem;text-align:center">
      <p style="color:#64748b;margin-bottom:1.5rem;font-size:1rem">Ready to begin? Sessions are $150 with sliding scale options available.</p>
      <a href="/contact" style="display:inline-flex;align-items:center;gap:0.5rem;padding:1rem 2rem;background:#0ea5e9;color:#ffffff;border-radius:9999px;font-weight:500;font-size:0.875rem;text-decoration:none">
        Book Your Consultation ${ICONS.ArrowRight}
      </a>
    </div>
  </div>
</section>`;
}

function buildAboutHtml() {
  const valCards = VALUES_DATA.map(v => `<div style="padding:1.5rem;border-radius:0.75rem;border:1px solid #e2e8f0;background:#ffffff">
  <div style="color:#0ea5e9;margin-bottom:0.75rem">${ICONS.CheckCircle}</div>
  <h3 style="font-family:'Playfair Display',serif;font-size:1.125rem;font-weight:600;color:#0b132b;margin-bottom:0.5rem">${v.title}</h3>
  <p style="color:#64748b;font-size:0.875rem;line-height:1.6">${v.description}</p>
</div>`).join('');

  const insBadges = INSURANCES.map(i => `<span style="padding:0.625rem 1.25rem;border-radius:9999px;background:#ffffff;border:1px solid #e2e8f0;font-size:0.875rem;color:#334155">${i}</span>`).join('');

  return `<section style="padding:10rem 1.5rem 6rem;background:#f8fafc;text-align:center">
  <div style="max-width:56rem;margin:0 auto">
    <p style="color:#0ea5e9;font-size:0.75rem;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:1rem;font-weight:500">Our Story</p>
    <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.5rem,6vw,3.75rem);font-weight:600;color:#0b132b">About City Psychology</h1>
  </div>
</section>
<section style="padding-bottom:6rem;background:#f8fafc">
  <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:4rem;align-items:center">
      <div style="border-radius:1rem;overflow:hidden;aspect-ratio:4/3">
        <img src="${OFFICE_IMG}" alt="City Psychology office" style="width:100%;height:100%;object-fit:cover"/>
      </div>
      <div>
        <p style="color:#64748b;font-size:0.9375rem;line-height:1.8;margin-bottom:1.5rem">City Psychology was founded with a vision: to create a new standard of mental health care in West Palm Beach. Not just another counseling office, but a curated infrastructure for human flourishing where clinical excellence meets coastal serenity.</p>
        <p style="color:#64748b;font-size:0.9375rem;line-height:1.8;margin-bottom:1.5rem">With over a decade of experience in behavioral health, family dynamics, and addiction counseling, our founder recognized that true healing requires more than talk therapy alone. That's why we're building an integrated model combining licensed therapists with psychiatric physicians to offer comprehensive, coordinated care under one roof.</p>
        <p style="color:#64748b;font-size:0.9375rem;line-height:1.8">Our goal is to empower individuals, couples, and families to lead lives they love identifying and overcoming obstacles to satisfaction and happiness with practical goals and evidence-based strategies.</p>
      </div>
    </div>
  </div>
</section>
<section style="padding:6rem 1.5rem;background:#ffffff">
  <div style="max-width:80rem;margin:0 auto">
    <div style="text-align:center;margin-bottom:4rem">
      <p style="color:#0ea5e9;font-size:0.75rem;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:1rem;font-weight:500">What Defines Us</p>
      <h2 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,5vw,3rem);font-weight:600;color:#0b132b">Our Values</h2>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:1.5rem">
      ${valCards}
    </div>
  </div>
</section>
<section style="padding:6rem 1.5rem;background:#f8fafc;text-align:center">
  <div style="max-width:56rem;margin:0 auto">
    <p style="color:#0ea5e9;font-size:0.75rem;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:1rem;font-weight:500">Accessible Care</p>
    <h2 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,5vw,3rem);font-weight:600;color:#0b132b;margin-bottom:1.5rem">Insurance &amp; Rates</h2>
    <p style="color:#64748b;font-size:1.125rem;line-height:1.75;margin-bottom:2.5rem">Sessions are $150 with sliding scale options for eligible clients. We accept most major insurances and work with you to verify coverage.</p>
    <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.75rem;margin-bottom:2.5rem">
      ${insBadges}
    </div>
    <a href="/contact" style="display:inline-flex;align-items:center;gap:0.5rem;color:#0ea5e9;font-size:0.875rem;font-weight:500;text-decoration:none">
      Verify Your Coverage ${ICONS.ArrowRight}
    </a>
  </div>
</section>`;
}

function buildTeamHtml() {
  return `<section style="padding:10rem 1.5rem 6rem;background:#f8fafc;text-align:center">
  <div style="max-width:56rem;margin:0 auto">
    <p style="color:#0ea5e9;font-size:0.75rem;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:1rem;font-weight:500">The Roster</p>
    <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.5rem,6vw,3.75rem);font-weight:600;color:#0b132b;margin-bottom:1.5rem">Meet Our Team</h1>
    <p style="color:#64748b;font-size:1.125rem;line-height:1.75;max-width:40rem;margin:0 auto">A curated team of clinical professionals dedicated to integrated, personalized mental health care in West Palm Beach.</p>
  </div>
</section>
<section style="padding-bottom:8rem;background:#f8fafc">
  <div style="max-width:72rem;margin:0 auto;padding:0 1.5rem">
    ${TEAM_DATA.map(providerCard).join('')}
    <div style="margin-top:5rem;text-align:center">
      <p style="color:#64748b;margin-bottom:1.5rem">Interested in joining our growing team?</p>
      <a href="/contact" style="display:inline-flex;align-items:center;gap:0.5rem;color:#0ea5e9;font-size:0.875rem;font-weight:500;text-decoration:none">
        Get In Touch ${ICONS.ArrowRight}
      </a>
    </div>
  </div>
</section>`;
}

function buildFaqHtml() {
  const items = FAQS_DATA.map(faq => `<details style="margin-bottom:0.75rem;border:1px solid #e2e8f0;border-radius:0.75rem;padding:0 1.5rem;background:#ffffff">
  <summary style="font-family:'Playfair Display',serif;font-size:1.125rem;font-weight:600;color:#0b132b;padding:1.25rem 0;cursor:pointer;list-style:none">${faq.q}</summary>
  <p style="color:#64748b;font-size:0.9375rem;line-height:1.8;padding-bottom:1.25rem">${faq.a}</p>
</details>`).join('');

  return `<section style="padding:10rem 1.5rem 6rem;background:#f8fafc;text-align:center">
  <div style="max-width:56rem;margin:0 auto">
    <p style="color:#0ea5e9;font-size:0.75rem;letter-spacing:0.3em;text-transform:uppercase;margin-bottom:1rem;font-weight:500">Common Questions</p>
    <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.5rem,6vw,3.75rem);font-weight:600;color:#0b132b;margin-bottom:1.5rem">Frequently Asked Questions</h1>
    <p style="color:#64748b;font-size:1.125rem;line-height:1.75;max-width:40rem;margin:0 auto">Everything you need to know about starting your therapeutic journey with City Psychology.</p>
  </div>
</section>
<section style="padding-bottom:8rem;background:#f8fafc">
  <div style="max-width:48rem;margin:0 auto;padding:0 1.5rem">
    ${items}
    <div style="margin-top:4rem;text-align:center">
      <p style="color:#64748b;margin-bottom:1rem">Still have questions?</p>
      <a href="/contact" style="display:inline-flex;align-items:center;gap:0.5rem;padding:1rem 2rem;background:#0ea5e9;color:#ffffff;border-radius:9999px;font-weight:500;font-size:0.875rem;text-decoration:none">
        Contact Us ${ICONS.ArrowRight}
      </a>
    </div>
  </div>
</section>`;
}

async function syncAll() {
  console.log('🔄 Syncing special pages in database with exact frontend data & Lucide SVG icons...');

  const pagesToSync = [
    { slug: 'services', title: 'Our Services', html: buildServicesHtml() },
    { slug: 'about', title: 'About City Psychology', html: buildAboutHtml() },
    { slug: 'team', title: 'Our Team', html: buildTeamHtml() },
    { slug: 'faq', title: 'Frequently Asked Questions', html: buildFaqHtml() },
  ];

  for (const p of pagesToSync) {
    const updated = await prisma.page.updateMany({
      where: { slug: p.slug },
      data: {
        contentHtml: p.html,
        status: 'active',
      },
    });
    console.log(`✅ Updated ${p.slug}: ${updated.count} row(s) updated.`);
  }

  console.log('🎉 All special pages synchronized with frontend design!');
  await prisma.$disconnect();
}

syncAll().catch(e => {
  console.error('Error syncing:', e);
  process.exit(1);
});
