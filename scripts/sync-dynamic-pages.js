import { prisma } from '../lib/prisma.js';
import {
  buildServicesHtml,
  buildAboutHtml,
  buildTeamHtml,
  buildFaqHtml,
  buildBlogsHubHtml,
  buildBlogArticleHtml,
  BLOG_POSTS_DATA,
} from '../lib/pageGenerators.js';

function getBlogHubBlocks() {
  return [
    {
      id: 'blk_blog_hero',
      type: 'hero',
      data: {
        tag: 'Clinical Insights & Journal',
        headline: 'Evidence-Based Psychology & Wellness Perspectives',
        subtitle: 'Empowering therapeutic articles, self-regulation tools, and clinical guidance written by licensed doctoral psychologists.',
        primaryBtnText: 'Explore Articles',
        primaryBtnUrl: '#articles',
        secondaryBtnText: 'Book Initial Intake',
        secondaryBtnUrl: '/contact',
        align: 'center',
        bgImageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80',
        overlayOpacity: 'light',
        bgColor: 'white',
        paddingY: 'normal',
      },
    },
    {
      id: 'blk_blog_badges',
      type: 'badgesBar',
      data: {
        tag: 'Clinical Standards',
        heading: 'Authored & Reviewed by Licensed Doctoral Clinicians',
        badges: [
          { icon: '🧠', title: 'Evidence-Based', subtitle: 'Grounded in CBT, EMDR & Science' },
          { icon: '🔒', title: '100% Confidential', subtitle: 'Strict HIPAA Standards' },
          { icon: '🩺', title: 'Doctoral Oversight', subtitle: 'Licensed Florida Clinicians' },
          { icon: '🏖️', title: 'Palm Beach Care', subtitle: 'In-Person & Telehealth' },
        ],
        bgColor: 'white',
        paddingY: 'compact',
      },
    },
    {
      id: 'blk_blog_grid',
      type: 'blogGrid',
      data: {
        tag: 'Featured Articles',
        heading: 'Latest Psychology Insights & Guides',
        subtitle: 'Practical techniques and empathetic understanding to support your healing journey.',
        columns: 3,
        posts: BLOG_POSTS_DATA.map((p) => ({
          title: p.title,
          excerpt: p.excerpt,
          category: p.category,
          date: p.date,
          readTime: p.readTime,
          author: p.author,
          authorAvatar: p.authorAvatar,
          imageUrl: p.imageUrl,
          linkUrl: `/blog/${p.slug}`,
        })),
        bgColor: 'slate',
        paddingY: 'normal',
      },
    },
    {
      id: 'blk_blog_cta',
      type: 'ctaBanner',
      data: {
        tag: 'Begin Your Journey',
        heading: 'Connect With a Specialized Clinician',
        subtitle: 'Whether you are navigating anxiety, trauma, or relationship hurdles, our experienced team provides warm, confidential guidance.',
        btnText: 'Request Consultation',
        btnUrl: '/contact',
        secondaryText: 'Call our office: (561) 537-5586',
        style: 'ocean',
        bgColor: 'white',
        paddingY: 'normal',
      },
    },
  ];
}

function getBlogArticleBlocks(article) {
  return [
    {
      id: `blk_art_hero_${article.slug}`,
      type: 'hero',
      data: {
        tag: article.category,
        headline: article.title,
        subtitle: article.excerpt,
        primaryBtnText: 'Read Article Below',
        primaryBtnUrl: '#article-content',
        secondaryBtnText: 'Schedule With Author',
        secondaryBtnUrl: '/contact',
        align: 'center',
        bgImageUrl: article.imageUrl,
        overlayOpacity: 'dark',
        bgColor: 'white',
        paddingY: 'normal',
      },
    },
    {
      id: `blk_art_body_${article.slug}`,
      type: 'blogArticle',
      data: {
        category: article.category,
        readTime: article.readTime,
        publishDate: article.date,
        authorName: article.author,
        authorTitle: article.authorTitle,
        authorAvatar: article.authorAvatar,
        leadParagraph: article.leadParagraph,
        takeaways: article.takeaways,
        sections: article.sections,
        authorBio: article.authorBio,
        bgColor: 'white',
        paddingY: 'normal',
      },
    },
    {
      id: `blk_art_badges_${article.slug}`,
      type: 'badgesBar',
      data: {
        tag: 'Quality of Care',
        heading: 'High Clinical Standards for Every Patient',
        badges: [
          { icon: '🔒', title: '100% Confidential', subtitle: 'Strict HIPAA Protection' },
          { icon: '🩺', title: 'Doctoral Specialists', subtitle: 'Evidence-Based Care' },
          { icon: '💻', title: 'Florida Telehealth', subtitle: 'Secure HD Sessions' },
          { icon: '📑', title: 'Superbill Ready', subtitle: 'Insurance Reimbursement' },
        ],
        bgColor: 'white',
        paddingY: 'compact',
      },
    },
    {
      id: `blk_art_cta_${article.slug}`,
      type: 'ctaBanner',
      data: {
        tag: 'Ready to Heal?',
        heading: 'Speak With a Licensed Specialist',
        subtitle: 'Our admissions team is available to coordinate your confidential initial consultation.',
        btnText: 'Book Initial Appointment',
        btnUrl: '/contact',
        secondaryText: 'Call our office: (561) 537-5586',
        style: 'ocean',
        bgColor: 'white',
        paddingY: 'normal',
      },
    },
  ];
}

async function sync() {
  console.log('🔄 Syncing dynamic pages & theme builder blogs in MySQL database...');

  const blogHubBlocks = getBlogHubBlocks();
  const blogHubHtmlWithBlocks = `${buildBlogsHubHtml()}\n<!-- __PAGE_BUILDER_BLOCKS__ ${encodeURIComponent(JSON.stringify(blogHubBlocks))} -->`;

  const pages = [
    {
      slug: 'services',
      title: 'Our Services',
      subtitle: 'Comprehensive Care',
      contentHtml: buildServicesHtml(),
      customCss: '',
      showInNavbar: true,
      navOrder: 1,
      metaTitle: 'Our Services | City Psychology Palm Beach',
      metaDescription: 'Explore our evidence-based psychological services including individual therapy, couples counseling, EMDR, and adolescent care.',
      metaKeywords: 'psychology services palm beach, individual therapy, couples counseling, cbt, emdr',
    },
    {
      slug: 'team',
      title: 'Our Team',
      subtitle: 'The Roster',
      contentHtml: buildTeamHtml(),
      customCss: '',
      showInNavbar: true,
      navOrder: 2,
      metaTitle: 'Our Clinical Team | City Psychology Palm Beach',
      metaDescription: 'Meet our dedicated team of doctoral psychologists and licensed mental health therapists serving West Palm Beach, FL.',
      metaKeywords: 'psychologists palm beach, licensed therapists, snjezana mileta, dr sarah jenkins',
    },
    {
      slug: 'about',
      title: 'About Us',
      subtitle: 'Our Story',
      contentHtml: buildAboutHtml(),
      customCss: '',
      showInNavbar: true,
      navOrder: 3,
      metaTitle: 'About Us | City Psychology Palm Beach',
      metaDescription: 'Discover our compassionate, evidence-based approach to mental health and clinical care in a tranquil coastal environment.',
      metaKeywords: 'about city psychology, mental health practice west palm beach',
    },
    {
      slug: 'faq',
      title: 'Frequently Asked Questions',
      subtitle: 'Common Questions',
      contentHtml: buildFaqHtml(),
      customCss: '',
      showInNavbar: true,
      navOrder: 4,
      metaTitle: 'FAQ | City Psychology Palm Beach',
      metaDescription: 'Answers to frequently asked questions about therapy sessions, rates, out-of-network insurance reimbursement, and scheduling.',
      metaKeywords: 'therapy faq, superbill reimbursement, appointment questions',
    },
    {
      slug: 'blogs',
      title: 'Blog & Insights',
      subtitle: 'Evidence-Based Articles & Clinical Guides',
      contentHtml: blogHubHtmlWithBlocks,
      customCss: '',
      showInNavbar: true,
      navOrder: 5,
      featuredImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop',
      metaTitle: 'Psychology Blog & Mental Wellness Insights | City Psychology',
      metaDescription: 'Explore evidence-based psychology articles, CBT coping strategies, trauma recovery insights, and relationship advice from licensed therapists in Palm Beach, FL.',
      metaKeywords: 'psychology blog, mental health articles, cbt techniques, emdr therapy palm beach, anxiety coping tools',
      canonicalUrl: 'https://citypsychologypb.com/blogs',
      ogTitle: 'Psychology & Mental Wellness Blog | City Psychology',
      ogDescription: 'Evidence-based articles and clinical advice from licensed doctoral psychologists in West Palm Beach.',
      ogImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop',
    },
  ];

  // Add individual blog post pages with 'blog/' prefix
  for (const article of BLOG_POSTS_DATA) {
    const blogSlug = `blog/${article.slug}`;
    const articleBlocks = getBlogArticleBlocks(article);
    const articleHtmlWithBlocks = `${buildBlogArticleHtml(article.slug)}\n<!-- __PAGE_BUILDER_BLOCKS__ ${encodeURIComponent(JSON.stringify(articleBlocks))} -->`;

    // Clean up any old un-prefixed record so database is clean
    try {
      await prisma.page.deleteMany({
        where: { slug: article.slug },
      });
    } catch { }

    pages.push({
      slug: blogSlug,
      title: article.title,
      subtitle: article.excerpt,
      contentHtml: articleHtmlWithBlocks,
      customCss: '',
      showInNavbar: false,
      navOrder: 10,
      featuredImage: article.imageUrl,
      imageAlt: article.title,
      metaTitle: `${article.title} | City Psychology`,
      metaDescription: article.excerpt,
      metaKeywords: `${article.category.toLowerCase()}, mental wellness, psychology article, therapy palm beach`,
      canonicalUrl: `https://citypsychologypb.com/${blogSlug}`,
      ogTitle: article.title,
      ogDescription: article.excerpt,
      ogImage: article.imageUrl,
    });
  }

  for (const p of pages) {
    const existing = await prisma.page.findFirst({
      where: { slug: p.slug },
    });

    const pageData = {
      id: p.id || `page_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      slug: p.slug,
      title: p.title,
      subtitle: p.subtitle,
      contentHtml: p.contentHtml,
      customCss: p.customCss || '',
      status: 'active',
      showInNavbar: p.showInNavbar ?? false,
      navOrder: p.navOrder || 0,
      showFooter: true,
      showContactCTA: true,
      featuredImage: p.featuredImage || null,
      imageAlt: p.imageAlt || '',
      metaTitle: p.metaTitle || '',
      metaDescription: p.metaDescription || '',
      metaKeywords: p.metaKeywords || '',
      canonicalUrl: p.canonicalUrl || '',
      ogTitle: p.ogTitle || p.metaTitle || '',
      ogDescription: p.ogDescription || p.metaDescription || '',
      ogImage: p.ogImage || p.featuredImage || null,
      updatedAt: new Date(),
    };

    if (existing) {
      await prisma.page.update({
        where: { id: existing.id },
        data: pageData,
      });
      console.log(`✅ Updated page "${p.title}" (/${p.slug})`);
    } else {
      await prisma.page.create({
        data: pageData,
      });
      console.log(`✅ Created page "${p.title}" (/${p.slug})`);
    }
  }

  console.log('✨ All dynamic pages, blogs, and theme builder templates synchronized successfully!');
}

sync()
  .catch((err) => {
    console.error('Sync failed:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
