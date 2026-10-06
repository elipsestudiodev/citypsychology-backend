const LINEN_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/3fb221ca4_generated_7b9764f7.png';
const OFFICE_IMG = 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png';

const ICONS = {
  Brain: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/><path d="M15.7 13.5A3 3 0 0 0 18 10"/><path d="M8.3 13.5A3 3 0 0 1 6 10"/></svg>`,
  Baby: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-baby"><path d="M9 12h.01"/><path d="M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/></svg>`,
  Users: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  Heart: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
  UsersRound: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-5-8a5 5 0 0 0-.45-8.3"/></svg>`,
  Sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`,
  Shield: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  MessageCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>`,
  CheckCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
  ArrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  ChevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`,
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

// Service Card: ONLY card has animation, inner text has NO animation
function serviceCard(s) {
  const tags = s.approaches
    .map(a => `<span class="text-xs font-body text-foreground/70 px-3 py-1 rounded-full bg-muted border border-border/50">${a}</span>`)
    .join('');

  return `<div data-animate="fade-up" class="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
  <div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors text-primary">
    ${s.icon}
  </div>
  <h3 class="font-heading text-2xl font-semibold text-foreground mb-4">
    ${s.title}
  </h3>
  <p class="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6">
    ${s.description}
  </p>
  <div class="pt-4 border-t border-border/50">
    <p class="text-xs font-body text-muted-foreground/60 tracking-wider uppercase mb-3">Approaches</p>
    <div class="flex flex-wrap gap-2">
      ${tags}
    </div>
  </div>
</div>`;
}

// Provider Card: Portrait container matches StaticTeam 100% (NO bg-muted, self-start alignment)
function providerCard(p) {
  const tags = p.specialties
    .map(s => `<span class="text-xs font-body text-foreground/70 px-3 py-1.5 rounded-full bg-muted border border-border/50">${s}</span>`)
    .join('');

  return `<div data-animate="fade-up" class="group">
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-500">
    <div class="lg:col-span-2 relative aspect-[3/4] rounded-xl overflow-hidden self-start">
      <img src="${p.imageUrl}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
    </div>
    <div class="lg:col-span-3 flex flex-col justify-center">
      <p class="text-primary font-body text-xs tracking-[0.2em] uppercase mb-2 font-medium">${p.title}</p>
      <h3 class="font-heading text-3xl font-semibold text-foreground mb-4">${p.name}</h3>
      <p style="white-space: pre-line" class="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6">${p.bio}</p>
      <div>
        <p class="text-xs font-body text-muted-foreground/60 tracking-wider uppercase mb-3">Specialties</p>
        <div class="flex flex-wrap gap-2">
          ${tags}
        </div>
      </div>
    </div>
  </div>
</div>`;
}

export function buildServicesHtml() {
  return `<!-- Hero (Static text, no text animation) -->
<section class="relative pt-40 pb-24 overflow-hidden bg-background">
  <div class="absolute inset-0">
    <img src="${LINEN_IMG}" alt="Natural texture" class="w-full h-full object-cover opacity-30" />
    <div class="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
  </div>
  <div class="relative max-w-4xl mx-auto px-6 text-center">
    <p class="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 font-medium">
      Comprehensive Care
    </p>
    <h1 class="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">
      Our Services
    </h1>
    <p class="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
      A curated suite of evidence-based treatments designed to address the full spectrum of mental health needs from individual therapy to integrated psychiatric care.
    </p>
  </div>
</section>

<!-- Services Grid -->
<section class="pb-32 bg-background">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-grid">
      ${SERVICES_DATA.map(serviceCard).join('\n')}
    </div>

    <!-- CTA -->
    <div class="mt-20 text-center">
      <p class="text-muted-foreground font-body mb-6">Ready to begin? Sessions are $150 with sliding scale options available.</p>
      <a
        href="/contact"
        class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all animate-pulse-glow"
      >
        Book Your Consultation ${ICONS.ArrowRight}
      </a>
    </div>
  </div>
</section>`;
}

export function buildAboutHtml() {
  const valCards = VALUES_DATA.map(v => `<div data-animate="fade-up" class="p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-all bg-card">
  <div class="w-5 h-5 text-primary mb-3">${ICONS.CheckCircle}</div>
  <h3 class="font-heading text-lg font-semibold text-foreground mb-2">${v.title}</h3>
  <p class="text-muted-foreground font-body text-sm leading-relaxed">${v.description}</p>
</div>`).join('\n');

  const insBadges = INSURANCES.map(i => `<span data-animate="fade-scale" class="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-body text-foreground/80">${i}</span>`).join('\n');

  return `<!-- Hero (Static text, no text animation) -->
<section class="pt-40 pb-24 bg-background">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <p class="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 font-medium">
      Our Story
    </p>
    <h1 class="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">
      About City Psychology
    </h1>
  </div>
</section>

<!-- Story -->
<section class="pb-24 bg-background">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="relative group self-start">
        <div class="aspect-[4/3] rounded-2xl overflow-hidden">
          <img src="${OFFICE_IMG}" alt="City Psychology office" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div class="absolute -bottom-4 -left-4 w-full h-full border border-primary/20 rounded-2xl -z-10"></div>
      </div>
      <div>
        <p class="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6">
          City Psychology was founded with a vision: to create a new standard of mental health care in West Palm Beach. Not just another counseling office, but a curated infrastructure for human flourishing where clinical excellence meets coastal serenity.
        </p>
        <p class="text-muted-foreground font-body text-[15px] leading-[1.8] mb-6">
          With over a decade of experience in behavioral health, family dynamics, and addiction counseling, our founder recognized that true healing requires more than talk therapy alone. That's why we're building an integrated model combining licensed therapists with psychiatric physicians to offer comprehensive, coordinated care under one roof.
        </p>
        <p class="text-muted-foreground font-body text-[15px] leading-[1.8]">
          Our goal is to empower individuals, couples, and families to lead lives they love identifying and overcoming obstacles to satisfaction and happiness with practical goals and evidence-based strategies.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- Values -->
<section class="py-24 bg-card">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16">
      <p class="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 font-medium">What Defines Us</p>
      <h2 class="font-heading text-4xl md:text-5xl font-semibold text-foreground">Our Values</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-grid">
      ${valCards}
    </div>
  </div>
</section>

<!-- Insurance -->
<section class="py-24 bg-background">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <p class="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 font-medium">Accessible Care</p>
    <h2 class="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">Insurance & Rates</h2>
    <p class="text-muted-foreground font-body text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
      Sessions are $150 with sliding scale options for eligible clients. We accept most major insurances and work with you to verify coverage.
    </p>
    <div class="flex flex-wrap justify-center gap-3 mb-10 stagger-grid">
      ${insBadges}
    </div>
    <div>
      <a href="/contact" class="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all">
        Verify Your Coverage ${ICONS.ArrowRight}
      </a>
    </div>
  </div>
</section>`;
}

export function buildTeamHtml() {
  return `<!-- Hero (Static text, no text animation) -->
<section class="pt-40 pb-24 bg-background">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <p class="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 font-medium">
      The Roster
    </p>
    <h1 class="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">
      Meet Our Team
    </h1>
    <p class="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
      A curated team of clinical professionals dedicated to integrated, personalized mental health care in West Palm Beach.
    </p>
  </div>
</section>

<!-- Providers List -->
<section class="pb-32 bg-background">
  <div class="max-w-6xl mx-auto px-6 space-y-8 stagger-grid">
    ${TEAM_DATA.map(providerCard).join('\n')}
  </div>

  <!-- CTA -->
  <div class="mt-20 text-center">
    <p class="text-muted-foreground font-body mb-6">Interested in joining our growing team?</p>
    <a href="/contact" class="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all">
      Get In Touch ${ICONS.ArrowRight}
    </a>
  </div>
</section>`;
}

export function buildFaqHtml() {
  const items = FAQS_DATA.map((faq, i) => `<div data-animate="fade-up" class="faq-accordion-item border border-border/50 rounded-xl px-6 bg-card transition-all" data-faq-index="${i}">
  <button type="button" class="faq-trigger w-full flex items-center justify-between text-left font-heading text-lg font-semibold text-foreground hover:no-underline py-5 cursor-pointer">
    <span>${faq.q}</span>
    <span class="faq-chevron ml-4 flex-shrink-0 text-muted-foreground transition-transform duration-300">
      ${ICONS.ChevronDown}
    </span>
  </button>
  <div class="faq-content text-muted-foreground font-body text-[15px] leading-[1.8] pb-5" style="display: none;">
    ${faq.a}
  </div>
</div>`).join('\n');

  return `<!-- Hero (Static text, no text animation) -->
<section class="pt-40 pb-24 bg-background">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <p class="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 font-medium">Common Questions</p>
    <h1 class="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">Frequently Asked Questions</h1>
    <p class="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
      Everything you need to know about starting your therapeutic journey with City Psychology.
    </p>
  </div>
</section>

<!-- FAQ List Accordion -->
<section class="pb-32 bg-background">
  <div class="max-w-3xl mx-auto px-6">
    <div class="space-y-3 stagger-grid">
      ${items}
    </div>

    <!-- CTA -->
    <div class="mt-16 text-center">
      <p class="text-muted-foreground font-body mb-4">Still have questions?</p>
      <a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-body font-medium text-sm hover:bg-primary/90 transition-all animate-pulse-glow">
        Contact Us ${ICONS.ArrowRight}
      </a>
    </div>
  </div>
</section>`;
}

export const BLOG_POSTS_DATA = [
  {
    slug: 'understanding-anxiety-cbt-techniques',
    title: 'Understanding Anxiety: 5 Proven CBT Techniques for Daily Life',
    category: 'Anxiety & Coping',
    date: 'Oct 4, 2026',
    readTime: '5 min read',
    author: 'Dr. Sarah Jenkins, Psy.D.',
    authorTitle: 'Licensed Clinical Psychologist',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop',
    excerpt: 'Practical exercises to identify cognitive distortions, reframe catastrophic thoughts, and restore autonomic calm when anxiety strikes.',
    leadParagraph: 'When anxiety tightens its grip, our thoughts race, our heart rate spikes, and catastrophic scenarios feel like imminent realities. Cognitive Behavioral Therapy (CBT) offers practical, measurable tools to regain clarity and inner calm.',
    takeaways: [
      'Anxiety is a neurobiological signal, not an identity or character failure.',
      'Thoughts are mental hypotheses, not verifiable facts.',
      'The Cognitive Triangle reveals how thought shifts immediately alter emotional and physical states.',
      'Structured exposure and 4-7-8 breathing deactivate the sympathetic nervous system.',
    ],
    sections: [
      {
        title: '1. Understanding the Cognitive Triangle',
        body: 'At the heart of CBT lies the Cognitive Triangle: the dynamic feedback loop connecting our Thoughts, Feelings, and Behaviors. When we intercept unhelpful thought cycles early, the physiological symptoms of anxiety subside naturally.',
        quote: 'We cannot always control the first automatic thought that enters our mind, but we can actively choose how we respond to it.',
      },
      {
        title: '2. Catching and Reframing Cognitive Distortions',
        body: 'Common cognitive distortions include catastrophizing, black-and-white thinking, and emotional reasoning. By testing your thoughts against concrete reality, you break the cycle of automatic fear.',
        quote: 'Ask yourself: What is the most realistic outcome, and what coping resources do I already possess to handle it?',
      },
      {
        title: '3. Physiological Anchoring & Nervous System Reset',
        body: 'Cognitive techniques work best when the body feels safe. Pairing thought reframing with slow, diaphragmatic exhalations signals your vagus nerve to down-regulate heart rate and muscle tension.',
        quote: 'A regulated nervous system allows the prefrontal cortex to make calm, grounded decisions.',
      },
    ],
    authorBio: 'Dr. Sarah Jenkins is a licensed clinical psychologist and founder at City Psychology Palm Beach, specializing in adult anxiety disorders, trauma recovery, and high-performance burnout.',
  },
  {
    slug: 'healing-trauma-through-emdr-therapy',
    title: 'How EMDR Therapy Reprocesses Traumatic Memories',
    category: 'Trauma & EMDR',
    date: 'Sep 28, 2026',
    readTime: '7 min read',
    author: 'Snjezana Mileta',
    authorTitle: 'Psychotherapist & Trauma Specialist',
    authorAvatar: 'https://media.base44.com/images/public/6a04a0888946eab0cca07906/0db9486c8_SnjezanaMileta.png',
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&auto=format&fit=crop',
    excerpt: 'Explore how bilateral stimulation helps the brain unstick distressing memories and integrate them safely into long-term narrative memory.',
    leadParagraph: 'Trauma is not just what happened in the past; it is the lingering physiological footprint that prevents the mind and body from feeling safe in the present moment.',
    takeaways: [
      'Traumatic memories are often stored in raw, unintegrated sensory fragments.',
      'EMDR uses bilateral stimulation (visual, auditory, or tactile) to activate the brain’s natural information processing.',
      'Unlike traditional talk therapy, EMDR does not require recounting every painful detail aloud.',
      'Clients shift from visceral distress to the adaptive realization: "It is over, and I am safe now."',
    ],
    sections: [
      {
        title: '1. What Happens When Memories Get "Stuck"',
        body: 'During overwhelming experiences, high levels of stress hormones freeze normal memory consolidation in the hippocampus. The memory remains frozen in time with its original sights, sounds, and physical terrors.',
        quote: 'The brain has an inherent healing capacity, much like the body healing a cut once the thorn is removed.',
      },
      {
        title: '2. The Role of Bilateral Stimulation',
        body: 'By tracking alternating left-right stimuli while holding aspects of the memory in awareness, the nervous system safely desensitizes the emotional charge and reprocesses the memory into neutral narrative history.',
        quote: 'Desensitization allows you to remember the event as a story from your past without reliving the emergency in your body today.',
      },
    ],
    authorBio: 'Snjezana Mileta is a licensed psychotherapist at City Psychology Palm Beach with extensive clinical specialization in relational trauma, EMDR, and emotional resilience.',
  },
  {
    slug: 'navigating-relationship-communication',
    title: 'Breaking The Conflict Cycle: Healthier Communication for Couples',
    category: 'Couples & Family',
    date: 'Sep 15, 2026',
    readTime: '6 min read',
    author: 'Michael Vance, LMFT',
    authorTitle: 'Licensed Marriage & Family Therapist',
    authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop',
    imageUrl: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=1200&auto=format&fit=crop',
    excerpt: 'Learn how to replace criticism and defensiveness with gentle curiosity, emotional bids, and effective repair attempts.',
    leadParagraph: 'Even the most devoted couples get caught in repetitive cycles of misattunement, where surface arguments over chores mask deeper longings for connection, respect, and safety.',
    takeaways: [
      'Behind every sharp criticism is often a soft, vulnerable longing that feels unsafe to express directly.',
      'Recognizing emotional bids for connection is the strongest predictor of long-term partnership stability.',
      'Repair attempts made early during heated discussions prevent physiological flooding.',
      'Curiosity is the antidote to defensiveness: asking questions rather than building courtroom cases.',
    ],
    sections: [
      {
        title: '1. Deconstructing the Protest Polarity',
        body: 'When one partner pursues through frustration and the other withdraws into silence, both are attempting to cope with emotional distress. Understanding this cycle as a shared pattern shifts blame away from individuals.',
        quote: 'The enemy is never your partner; the enemy is the negative interactive cycle that traps you both.',
      },
      {
        title: '2. The Power of Micro-Repairs',
        body: 'Successful couples do not avoid conflict; they master the art of repair. Simple gestures like humor, apologies, or pausing to breathe defuse escalating tension before emotional shutdown occurs.',
        quote: 'A sincere repair attempt is an invitation back to the team.',
      },
    ],
    authorBio: 'Michael Vance, LMFT, leads relationship counseling and family therapy programs at City Psychology, integrating systemic models to foster secure attachments.',
  },
];

export function buildBlogsHubHtml() {
  const cards = BLOG_POSTS_DATA.map((post) => `
  <article data-animate="fade-up" class="group bg-card rounded-3xl border border-border/60 overflow-hidden shadow-xs hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col">
    <div class="relative h-56 overflow-hidden bg-muted shrink-0">
      <img
        src="${post.imageUrl}"
        alt="${post.title}"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />
      <div class="absolute top-4 left-4">
        <span class="px-3.5 py-1 rounded-full text-xs font-semibold bg-card/95 text-primary shadow-xs backdrop-blur-xs font-body">
          ${post.category}
        </span>
      </div>
    </div>

    <div class="p-7 flex-1 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 text-xs text-muted-foreground font-body mb-3">
          <span>${post.date}</span>
          <span>•</span>
          <span>${post.readTime}</span>
        </div>

        <h3 class="text-xl font-bold text-foreground group-hover:text-primary transition-colors font-heading mb-3 leading-snug">
          <a href="/blog/${post.slug}">
            ${post.title}
          </a>
        </h3>

        <p class="text-muted-foreground text-sm leading-relaxed mb-6 font-body">
          ${post.excerpt}
        </p>
      </div>

      <div class="pt-5 border-t border-border/50 flex items-center justify-between mt-auto">
        <div class="flex items-center gap-2.5">
          <img
            src="${post.authorAvatar}"
            alt="${post.author}"
            class="w-7 h-7 rounded-full object-cover border border-border"
          />
          <span class="text-xs font-semibold text-foreground font-body">${post.author}</span>
        </div>

        <a
          href="/blog/${post.slug}"
          class="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-medium text-xs font-body group/link transition-all"
        >
          Read Article <span class="group-hover/link:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  </article>`).join('\n');

  return `<!-- Hero (Static text, no text animation) -->
<section class="relative pt-40 pb-20 overflow-hidden bg-background">
  <div class="absolute inset-0">
    <img src="${LINEN_IMG}" alt="Natural texture" class="w-full h-full object-cover opacity-30" />
    <div class="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
  </div>
  <div class="relative max-w-4xl mx-auto px-6 text-center">
    <p class="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4 font-medium">
      Clinical Insights & Journal
    </p>
    <h1 class="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">
      Evidence-Based Mental Wellness Perspectives
    </h1>
    <p class="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto">
      Empowering therapeutic articles, self-regulation tools, and clinical guidance written by licensed doctoral psychologists in West Palm Beach.
    </p>
  </div>
</section>

<!-- Trust Badges Bar -->
<section class="py-10 bg-background border-y border-border/50">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50">
        <span class="text-2xl">🧠</span>
        <div>
          <p class="font-bold text-xs text-foreground font-body">Evidence-Based</p>
          <p class="text-[11px] text-muted-foreground font-body">CBT, EMDR & Neurobiology</p>
        </div>
      </div>
      <div class="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50">
        <span class="text-2xl">🔒</span>
        <div>
          <p class="font-bold text-xs text-foreground font-body">100% Confidential</p>
          <p class="text-[11px] text-muted-foreground font-body">HIPAA & Ethical Oversight</p>
        </div>
      </div>
      <div class="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50">
        <span class="text-2xl">🩺</span>
        <div>
          <p class="font-bold text-xs text-foreground font-body">Doctoral Oversight</p>
          <p class="text-[11px] text-muted-foreground font-body">Licensed Florida Clinicians</p>
        </div>
      </div>
      <div class="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50">
        <span class="text-2xl">🏖️</span>
        <div>
          <p class="font-bold text-xs text-foreground font-body">Palm Beach Care</p>
          <p class="text-[11px] text-muted-foreground font-body">In-Office & Telehealth</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Articles Grid Section -->
<section class="py-20 bg-background" id="articles">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center max-w-3xl mx-auto mb-14">
      <p class="text-primary font-body text-xs tracking-[0.25em] uppercase mb-3 font-medium">Featured Publications</p>
      <h2 class="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Latest Psychology Insights & Guides</h2>
      <p class="text-muted-foreground font-body text-base">Practical techniques and empathetic understanding to support your healing journey.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-grid">
      ${cards}
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="pb-28 bg-background">
  <div class="max-w-5xl mx-auto px-6">
    <div class="rounded-3xl p-10 md:p-14 text-center shadow-xl relative overflow-hidden text-white" style="background: linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #1e1b4b 100%) !important;">
      <p class="inline-block px-3.5 py-1 rounded-full bg-white/10 text-sky-300 border border-white/20 text-xs font-semibold tracking-widest uppercase mb-4 font-body">Begin Your Journey</p>
      <h2 class="text-3xl md:text-5xl font-bold mb-4 font-heading leading-tight text-white">Connect With a Specialized Clinician</h2>
      <p class="text-base md:text-lg text-slate-200 max-w-2xl mx-auto mb-8 font-body">Whether you are navigating anxiety, trauma, or relationship hurdles, our experienced team provides warm, confidential guidance.</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="/contact" class="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium text-base rounded-full hover:bg-primary/90 transition-all shadow-lg font-body">
          Request Consultation →
        </a>
        <span class="text-sm text-slate-200 font-body font-medium">Call our office: (561) 537-5586</span>
      </div>
    </div>
  </div>
</section>`;
}

export function buildBlogArticleHtml(articleSlug) {
  const article = BLOG_POSTS_DATA.find((p) => p.slug === articleSlug) || BLOG_POSTS_DATA[0];

  const takeawaysHtml = (article.takeaways || []).map((t) => `
  <li class="flex items-start gap-3">
    <span class="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">✓</span>
    <span class="font-body text-foreground">${t}</span>
  </li>`).join('\n');

  const sectionsHtml = (article.sections || []).map((sec) => `
  <div class="mb-12">
    <h2 class="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading leading-snug">${sec.title}</h2>
    <p class="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 font-body">${sec.body}</p>
    ${sec.quote ? `
    <blockquote class="my-8 p-6 md:p-8 bg-muted/60 rounded-2xl border-l-4 border-primary font-heading italic text-foreground text-lg leading-relaxed shadow-2xs">
      "${sec.quote}"
    </blockquote>` : ''}
  </div>`).join('\n');

  return `<!-- Hero (Static text, no text animation) -->
<section class="relative pt-40 pb-20 overflow-hidden bg-background">
  <div class="max-w-4xl mx-auto px-6 text-center">
    <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6 font-body">
      ${article.category}
    </div>
    <h1 class="font-heading text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
      ${article.title}
    </h1>
    <p class="text-muted-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto mb-8">
      ${article.excerpt}
    </p>

    <!-- Meta Info Bar -->
    <div class="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-border/50 text-sm font-body text-muted-foreground">
      <div class="flex items-center gap-2.5">
        <img src="${article.authorAvatar}" alt="${article.author}" class="w-10 h-10 rounded-full object-cover border border-border" />
        <div class="text-left">
          <p class="font-bold text-foreground">${article.author}</p>
          <p class="text-xs text-muted-foreground">${article.authorTitle}</p>
        </div>
      </div>
      <div class="flex items-center gap-3 text-xs">
        <span>Published: <strong class="text-foreground">${article.date}</strong></span>
        <span>•</span>
        <span class="px-2.5 py-1 rounded-full bg-muted text-foreground font-medium">${article.readTime}</span>
      </div>
    </div>
  </div>
</section>

<!-- Featured Image -->
<section class="pb-12 bg-background">
  <div class="max-w-5xl mx-auto px-6">
    <div class="rounded-3xl overflow-hidden aspect-[16/9] shadow-lg border border-border/50 bg-muted">
      <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-full object-cover" />
    </div>
  </div>
</section>

<!-- Article Editorial Body -->
<section class="pb-24 bg-background" id="article-content">
  <div class="max-w-3xl mx-auto px-6">
    <!-- Lead Quote Paragraph -->
    <div class="p-6 md:p-8 rounded-2xl bg-muted/50 border-l-4 border-primary mb-10">
      <p class="font-heading italic text-lg md:text-xl text-foreground leading-relaxed">
        "${article.leadParagraph}"
      </p>
    </div>

    <!-- Key Takeaways Callout -->
    <div class="mb-12 p-8 rounded-3xl bg-card border border-primary/20 shadow-xs">
      <div class="flex items-center gap-2.5 text-primary font-heading font-bold text-lg mb-4">
        <span>💡</span>
        <span>Key Clinical Takeaways</span>
      </div>
      <ul class="space-y-3 font-body text-sm md:text-base">
        ${takeawaysHtml}
      </ul>
    </div>

    <!-- Sections -->
    ${sectionsHtml}

    <!-- Author Biography Box -->
    <div class="mt-16 p-8 rounded-3xl bg-card border border-border/60 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <img src="${article.authorAvatar}" alt="${article.author}" class="w-20 h-20 rounded-2xl object-cover shrink-0 border border-border" />
      <div class="text-center sm:text-left">
        <span class="text-xs font-semibold text-primary uppercase tracking-widest font-body">About the Author</span>
        <h4 class="text-lg font-bold text-foreground font-heading mt-0.5 mb-2">${article.author}</h4>
        <p class="text-muted-foreground text-sm leading-relaxed font-body mb-4">${article.authorBio}</p>
        <a href="/contact" class="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 font-body">
          Schedule with this clinician →
        </a>
      </div>
    </div>

    <!-- Back to All Articles Link -->
    <div class="mt-12 text-center">
      <a href="/blogs" class="inline-flex items-center gap-2 text-primary font-body font-medium text-sm hover:gap-3 transition-all">
        ← Back to All Articles & Insights
      </a>
    </div>
  </div>
</section>

<!-- CTA Banner -->
<section class="pb-32 bg-background">
  <div class="max-w-4xl mx-auto px-6">
    <div class="rounded-3xl p-10 md:p-12 text-center shadow-lg text-white" style="background: linear-gradient(135deg, #0c4a6e 0%, #075985 50%, #1e1b4b 100%) !important;">
      <p class="inline-block px-3 py-1 rounded-full bg-white/10 text-sky-300 border border-white/20 text-xs font-semibold tracking-widest uppercase mb-4 font-body">Confidential Care</p>
      <h2 class="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">Ready to Discuss Your Therapeutic Goals?</h2>
      <p class="text-base text-slate-200 max-w-xl mx-auto mb-8 font-body">Our admissions team can pair you with the best licensed therapist tailored to your unique clinical needs.</p>
      <a href="/contact" class="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium text-base rounded-full hover:bg-primary/90 transition-all shadow-md font-body">
        Book Confidential Consultation →
      </a>
    </div>
  </div>
</section>`;
}
