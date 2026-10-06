import { PrismaClient } from '@prisma/client';
import { buildServicesHtml, buildAboutHtml, buildTeamHtml, buildFaqHtml } from '../lib/pageGenerators.js';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seed...');

  // 1. Seed Settings
  await prisma.setting.upsert({
    where: { id: 'default' },
    update: {},
    create: {
      id: 'default',
      general: {
        siteName: "City Psychology",
        siteTitle: "City Psychology | Integrated Therapy & Psychiatric Care in West Palm Beach",
        tagline: "Where clinical excellence meets coastal serenity.",
        logoText: "CP",
        logoUrl: "",
        faviconUrl: "",
        contactEmail: "dillon@citypsychologypb.com",
        phone: "561-537-5586",
        phoneRaw: "5615375586",
        addressLine1: "1818 S Australian Ave, Suite 404",
        addressLine2: "West Palm Beach, FL 33409",
        city: "West Palm Beach",
        state: "FL",
        zip: "33409",
        hours: "Monday – Saturday: By Appointment",
        hoursNote: "Office & Telehealth sessions available. Flexible scheduling to accommodate your needs.",
        emergencyNote: "If you are experiencing a mental health emergency, please call 988 or go to your nearest emergency room.",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.8871638209214!2d-80.076329!3d26.684074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5dfd978a57d%3A0xe5ec9ee6e06b9dc3!2s1818%20S%20Australian%20Ave%20%23404%2C%20West%20Palm%20Beach%2C%20FL%2033409!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
      },
      socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com"
      },
      footer: {
        aboutSummary: "Elevating mental health care in West Palm Beach with an integrated approach combining therapy and psychiatric services.",
        copyright: "© {year} City Psychology PB. All rights reserved.",
        license: "Licensed Mental Health Counselor · West Palm Beach, FL",
        watermarkText: "PSYCHOLOGY",
        navColumnTitle: "NAVIGATE",
        contactColumnTitle: "CONTACT",
        hoursColumnTitle: "HOURS",
        addressLine1: "1818 South Australian Avenue Suite 404,",
        addressLine2: "West Palm Beach, FL 33409",
        phone: "561-537-5586",
        phoneRaw: "5615375586",
        email: "dillon@citypsychologypb.com",
        hours: "Monday – Saturday: By Appointment",
        hoursNote: "Office & Telehealth sessions available. Flexible scheduling to accommodate your needs.",
        navLinks: [
          { id: 'fnav_1', label: 'Home', path: '/', enabled: true },
          { id: 'fnav_2', label: 'Our Services', path: '/services', enabled: true },
          { id: 'fnav_3', label: 'Our Team', path: '/team', enabled: true },
          { id: 'fnav_4', label: 'About Us', path: '/about', enabled: true },
          { id: 'fnav_5', label: 'Frequently Asked Questions', path: '/faq', enabled: true },
          { id: 'fnav_6', label: 'Contact', path: '/contact', enabled: true }
        ],
        socialLinks: [
          { id: 'soc_1', platform: 'Facebook', url: 'https://facebook.com', enabled: true },
          { id: 'soc_2', platform: 'Instagram', url: 'https://instagram.com', enabled: true },
          { id: 'soc_3', platform: 'LinkedIn', url: 'https://linkedin.com', enabled: true },
          { id: 'soc_4', platform: 'Twitter / X', url: 'https://twitter.com', enabled: true }
        ]
      },
      seo: {
        metaTitle: "City Psychology | Premier Mental Health Care in West Palm Beach",
        metaDescription: "Integrated therapy and psychiatric care in West Palm Beach, FL. Personalized evidence-based mental health services for individuals, adolescents, couples, and families.",
        metaKeywords: "psychology, therapy, mental health, west palm beach, counseling, psychiatry, EMDR, CBT",
        ogTitle: "City Psychology - Mental Health Care",
        ogDescription: "Where clinical excellence meets coastal serenity. Integrated therapy and psychiatric care in West Palm Beach.",
        ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
        canonicalUrl: "https://citypsychologypb.com"
      }
    }
  });

  // 2. Seed Admin
  await prisma.admin.upsert({
    where: { id: 'admin' },
    update: {
      email: 'admin@citypsychology.com',
      username: 'Admin',
      password: 'admin123',
      pin: '1234',
    },
    create: {
      id: 'admin',
      email: 'admin@citypsychology.com',
      username: 'Admin',
      password: 'admin123',
      pin: '1234',
    },
  });

  // 3. Seed Homepage Sections
  const homeSections = [
    {
      id: 'hero',
      enabled: true,
      data: {
        tag: "West Palm Beach, Florida",
        title: "The New Standard\nof Mental\nArchitecture",
        description: "Where clinical excellence meets coastal serenity. Integrated therapy and psychiatric care designed for your flourishing.",
        ctaButtonText: "Begin Your Journey",
        ctaButtonLink: "/contact",
        secondaryButtonText: "Explore Services",
        secondaryButtonLink: "/services",
        bgImageUrl: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
        imageAlt: "Modern therapy office with natural light"
      }
    },
    {
      id: 'intro',
      enabled: true,
      data: {
        tag: "Our Philosophy",
        heading: "Guiding Families",
        highlightText: "to Brighter Futures",
        body1: "For over a decade, City Psychology has dedicated itself to working with children, individuals, and families addressing everything from severe mental illness and trauma to addiction and relationship challenges.",
        body2: "Our comprehensive approach to behavioral and family dynamics has consistently delivered impactful results, fostering lasting growth and well-being across every area of our clients' lives.",
        imageUrl: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/6ad9ecccc_generated_87ea5579.png",
        imageAlt: "Zen stones representing balance and healing"
      }
    },
    {
      id: 'servicesPreview',
      enabled: true,
      data: {
        tag: "Comprehensive Care",
        heading: "Our Services",
        description: "",
        buttonText: "View All Services",
        buttonLink: "/services",
        items: [
          {
            icon: "Brain",
            title: "Individual Therapy",
            description: "Navigate anxiety, depression, and life transitions with evidence-based therapeutic approaches tailored to your unique needs."
          },
          {
            icon: "Users",
            title: "Couples Counseling",
            description: "Strengthen your relationship through effective communication strategies and renewed emotional connection."
          },
          {
            icon: "Baby",
            title: "Adolescent Counseling",
            description: "Specialized support for teens facing behavioral challenges, identity struggles, and family transitions."
          },
          {
            icon: "UsersRound",
            title: "Group Therapy",
            description: "Small, customized groups for women, men, addiction recovery, grief, trauma, and more healing together in a supportive space."
          },
          {
            icon: "Heart",
            title: "Family Therapy",
            description: "Heal family dynamics and create healthier patterns through systemic therapeutic intervention."
          },
          {
            icon: "Brain",
            title: "Trauma & EMDR",
            description: "Specialized trauma recovery using EMDR and other proven modalities for deep, lasting healing."
          }
        ]
      }
    },
    {
      id: 'integratedCare',
      enabled: true,
      data: {
        tag: "The Synergy of Science",
        heading: "Integrated Healing",
        description: "",
        leftTitle: "Your Challenges",
        leftItems: [
          "Anxiety & Depression",
          "Relationship Conflict",
          "Behavioral Challenges",
          "Trauma & PTSD",
          "Addiction Recovery",
          "Life Transitions"
        ],
        centerTitle: "Experience\nIntegrated Healing",
        centerSubtitle: "Where therapy and psychiatry converge for complete mental wellness.",
        buttonText: "Get Started",
        buttonLink: "/contact",
        rightTitle: "Our Solutions",
        rightItems: [
          "CBT & EMDR Therapy",
          "Couples & Family Systems",
          "Adolescent Behavioral Plans",
          "Integrated Psychiatric Care",
          "Evidence-Based Interventions",
          "Group Therapy"
        ]
      }
    },
    {
      id: 'teamPreview',
      enabled: true,
      data: {
        tag: "Our Clinicians",
        heading: "Expertise rooted in compassion",
        description: "Meet our licensed therapists and providers committed to guiding you through life's most meaningful transitions.",
        buttonText: "Meet the Team",
        buttonLink: "/team"
      }
    },
    {
      id: 'testimonials',
      enabled: true,
      data: {
        tag: "Client Experiences",
        heading: "Stories of",
        highlightText: "Transformation",
        items: [
          {
            quote: "City Psychology has been a game-changer for our family. The integrated approach between therapy and understanding our needs made all the difference. We finally feel like we're moving forward together.",
            author: "Sarah M.",
            context: "Family Therapy Client",
            text: "City Psychology has been a game-changer for our family. The integrated approach between therapy and understanding our needs made all the difference. We finally feel like we're moving forward together.",
            tag: "Family Therapy Client"
          },
          {
            quote: "I was hesitant about starting counseling, but the team at City Psychology made me feel safe from day one. The combination of talk therapy and a structured plan gave me tools I use every single day.",
            author: "James R.",
            context: "Individual Counseling Client",
            text: "I was hesitant about starting counseling, but the team at City Psychology made me feel safe from day one. The combination of talk therapy and a structured plan gave me tools I use every single day.",
            tag: "Individual Counseling Client"
          },
          {
            quote: "After trying several therapists, we found City Psychology and finally felt heard. Their approach to couples counseling is thoughtful, structured, and genuinely transformative.",
            author: "Michelle & David K.",
            context: "Couples Counseling Clients",
            text: "After trying several therapists, we found City Psychology and finally felt heard. Their approach to couples counseling is thoughtful, structured, and genuinely transformative.",
            tag: "Couples Counseling Clients"
          }
        ]
      }
    },
    {
      id: 'cta',
      enabled: true,
      data: {
        tag: "Your Journey Starts Here",
        heading: "Ready to Build a",
        highlightText: "Life You Love?",
        description: "Begin with a complimentary consultation. No obligation, just a conversation to see if City Psychology is the right fit for you.",
        buttonText: "Book Free Consultation",
        buttonLink: "/contact"
      }
    },
    {
      id: 'contact',
      enabled: true,
      data: {}
    }
  ];

  for (const sec of homeSections) {
    await prisma.homePageSection.upsert({
      where: { id: sec.id },
      update: { enabled: sec.enabled, data: sec.data },
      create: { id: sec.id, enabled: sec.enabled, data: sec.data }
    });
  }

  // 4. Seed Dynamic Pages (Services, Team, About, FAQ matching static pages 100%)
  const dynamicPages = [
    {
      id: "page_services",
      title: "Our Services",
      slug: "services",
      subtitle: "Comprehensive Care",
      status: "active",
      showInNavbar: true,
      navOrder: 1,
      showFooter: true,
      showContactCTA: true,
      featuredImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3fb221ca4_generated_7b9764f7.png",
      imageAlt: "City Psychology Services Overview",
      imageTitle: "Comprehensive Mental Health Services",
      metaTitle: "Our Services | City Psychology West Palm Beach",
      metaDescription: "Explore our evidence-based counseling services: Individual, Adolescent, Couples, Family, Group, Trauma & EMDR, Addiction, and Christian Counseling.",
      metaKeywords: "counseling services, therapy, EMDR, CBT, couples counseling, trauma therapy west palm beach",
      canonicalUrl: "https://citypsychologypb.com/services",
      ogTitle: "Our Services - City Psychology",
      ogDescription: "A curated suite of evidence-based treatments designed to address the full spectrum of mental health needs.",
      ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3fb221ca4_generated_7b9764f7.png",
      contentHtml: buildServicesHtml(),
      customCss: ""
    },
    {
      id: "page_team",
      title: "Our Team",
      slug: "team",
      subtitle: "The Roster",
      status: "active",
      showInNavbar: true,
      navOrder: 2,
      showFooter: true,
      showContactCTA: true,
      featuredImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
      imageAlt: "City Psychology Clinical Team",
      imageTitle: "Meet Our Clinicians",
      metaTitle: "Meet Our Team | City Psychology West Palm Beach",
      metaDescription: "Meet our licensed mental health counselors, psychotherapists, and clinical team dedicated to compassionate, evidence-based care in Palm Beach.",
      metaKeywords: "psychologists, therapists, counselors, Dillon Steinman, Palm Beach mental health team",
      canonicalUrl: "https://citypsychologypb.com/team",
      ogTitle: "Meet Our Team - City Psychology",
      ogDescription: "A curated team of clinical professionals dedicated to integrated, personalized mental health care in West Palm Beach.",
      ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
      contentHtml: buildTeamHtml(),
      customCss: ""
    },
    {
      id: "page_about",
      title: "About Us",
      slug: "about",
      subtitle: "Our Story",
      status: "active",
      showInNavbar: true,
      navOrder: 3,
      showFooter: true,
      showContactCTA: true,
      featuredImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png",
      imageAlt: "City Psychology Office Interior",
      imageTitle: "About City Psychology",
      metaTitle: "About Us | City Psychology West Palm Beach",
      metaDescription: "Learn about City Psychology, our founder Dillon Steinman, our core values, clinical mission, and accepted insurance plans.",
      metaKeywords: "about city psychology, mental health practice west palm beach, therapy values, insurance rates",
      canonicalUrl: "https://citypsychologypb.com/about",
      ogTitle: "About Us - City Psychology",
      ogDescription: "A new standard of mental health care in West Palm Beach where clinical excellence meets coastal serenity.",
      ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/f7aed5b5b_generated_84790256.png",
      contentHtml: buildAboutHtml(),
      customCss: ""
    },
    {
      id: "page_faq",
      title: "Frequently Asked Questions",
      slug: "faq",
      subtitle: "Common Questions",
      status: "active",
      showInNavbar: true,
      navOrder: 4,
      showFooter: true,
      showContactCTA: true,
      featuredImage: "",
      imageAlt: "City Psychology FAQ",
      imageTitle: "Frequently Asked Questions",
      metaTitle: "FAQ | City Psychology West Palm Beach",
      metaDescription: "Find answers to frequently asked questions about therapy sessions, rates, insurance coverage, telehealth options, and confidentiality.",
      metaKeywords: "therapy FAQ, counseling questions, insurance accepted, telehealth therapy, West Palm Beach",
      canonicalUrl: "https://citypsychologypb.com/faq",
      ogTitle: "Frequently Asked Questions - City Psychology",
      ogDescription: "Everything you need to know about starting your therapeutic journey with City Psychology.",
      ogImage: "https://media.base44.com/images/public/6a04a0888946eab0cca07906/3837dd055_generated_c46509ac.png",
      contentHtml: buildFaqHtml(),
      customCss: ""
    }
  ];

  for (const p of dynamicPages) {
    await prisma.page.upsert({
      where: { slug: p.slug },
      update: p,
      create: p
    });
  }

  console.log('✅ Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
