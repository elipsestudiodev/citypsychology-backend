import { prisma } from '../lib/prisma.js';

export const getPages = async (req, res, next) => {
  try {
    const { status, navbar } = req.query;
    const where = {};
    if (status) where.status = status;
    if (navbar === 'true') {
      where.showInNavbar = true;
      where.status = 'active';
    }

    const pages = await prisma.page.findMany({
      where,
      orderBy: { navOrder: 'asc' },
    });
    res.json(pages);
  } catch (err) {
    next(err);
  }
};

export const getPageByIdOrSlug = async (req, res, next) => {
  try {
    const { slugOrId } = req.params;
    const lower = slugOrId.toLowerCase();

    // Support both 'blog/xyz' and 'xyz', as well as 'blogs'/'blog'
    const stripped = lower.replace(/^(blogs?\/)/, '');
    const slugsToCheck = [
      lower,
      stripped,
      `blog/${stripped}`,
      `blogs/${stripped}`,
    ];
    if (lower === 'blog') slugsToCheck.push('blogs');
    if (lower === 'blogs') slugsToCheck.push('blog');

    const page = await prisma.page.findFirst({
      where: {
        OR: [
          { id: slugOrId },
          { slug: { in: Array.from(new Set(slugsToCheck)) } },
        ],
      },
    });

    if (!page) {
      return res.status(404).json({ success: false, error: 'Page not found' });
    }
    res.json(page);
  } catch (err) {
    next(err);
  }
};

export const createPage = async (req, res, next) => {
  try {
    const {
      title,
      slug: customSlug,
      subtitle,
      status,
      showInNavbar,
      navOrder,
      showFooter,
      showContactCTA,
      featuredImage,
      imageAlt,
      imageTitle,
      contentHtml,
      customCss,
      metaTitle,
      metaDescription,
      metaKeywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      ogImage,
    } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, error: 'Page title is required' });
    }

    let slug = (customSlug || title)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    // Ensure slug uniqueness
    const existing = await prisma.page.findUnique({ where: { slug } });
    if (existing) {
      slug = `${slug}-${Date.now().toString().slice(-4)}`;
    }

    const newPage = await prisma.page.create({
      data: {
        title,
        slug,
        subtitle: subtitle || '',
        status: status || 'active',
        showInNavbar: showInNavbar ?? false,
        navOrder: Number(navOrder) || 0,
        showFooter: showFooter ?? true,
        showContactCTA: showContactCTA ?? true,
        featuredImage: featuredImage || '',
        imageAlt: imageAlt || '',
        imageTitle: imageTitle || '',
        contentHtml: contentHtml || '<p>Welcome to your new page.</p>',
        customCss: customCss || '',
        metaTitle: metaTitle || title,
        metaDescription: metaDescription || '',
        metaKeywords: metaKeywords || '',
        canonicalUrl: canonicalUrl || '',
        ogTitle: ogTitle || title,
        ogDescription: ogDescription || '',
        ogImage: ogImage || featuredImage || '',
      },
    });

    res.status(201).json({ success: true, page: newPage });
  } catch (err) {
    next(err);
  }
};

export const updatePage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      slug,
      subtitle,
      status,
      showInNavbar,
      navOrder,
      showFooter,
      showContactCTA,
      featuredImage,
      imageAlt,
      imageTitle,
      contentHtml,
      customCss,
      metaTitle,
      metaDescription,
      metaKeywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      ogImage,
    } = req.body;

    const updated = await prisma.page.update({
      where: { id },
      data: {
        title: title !== undefined ? title : undefined,
        slug: slug !== undefined ? slug.toLowerCase().trim() : undefined,
        subtitle: subtitle !== undefined ? subtitle : undefined,
        status: status !== undefined ? status : undefined,
        showInNavbar: showInNavbar !== undefined ? showInNavbar : undefined,
        navOrder: navOrder !== undefined ? Number(navOrder) : undefined,
        showFooter: showFooter !== undefined ? showFooter : undefined,
        showContactCTA: showContactCTA !== undefined ? showContactCTA : undefined,
        featuredImage: featuredImage !== undefined ? featuredImage : undefined,
        imageAlt: imageAlt !== undefined ? imageAlt : undefined,
        imageTitle: imageTitle !== undefined ? imageTitle : undefined,
        contentHtml: contentHtml !== undefined ? contentHtml : undefined,
        customCss: customCss !== undefined ? customCss : undefined,
        metaTitle: metaTitle !== undefined ? metaTitle : undefined,
        metaDescription: metaDescription !== undefined ? metaDescription : undefined,
        metaKeywords: metaKeywords !== undefined ? metaKeywords : undefined,
        canonicalUrl: canonicalUrl !== undefined ? canonicalUrl : undefined,
        ogTitle: ogTitle !== undefined ? ogTitle : undefined,
        ogDescription: ogDescription !== undefined ? ogDescription : undefined,
        ogImage: ogImage !== undefined ? ogImage : undefined,
      },
    });

    res.json({ success: true, page: updated });
  } catch (err) {
    next(err);
  }
};

export const deletePage = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.page.delete({ where: { id } });
    res.json({ success: true, message: 'Page deleted successfully' });
  } catch (err) {
    next(err);
  }
};

export const togglePage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { field, value } = req.body;
    if (!field) {
      return res.status(400).json({ success: false, error: 'Field is required' });
    }

    const updated = await prisma.page.update({
      where: { id },
      data: { [field]: value },
    });

    res.json({ success: true, page: updated });
  } catch (err) {
    next(err);
  }
};
