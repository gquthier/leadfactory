/**
 * Sitemap Generator for LeadFactory Blog
 * 
 * Run with: npx tsx scripts/generate-sitemap.ts
 * 
 * This script generates a sitemap.xml including all blog posts
 * and static pages for SEO optimization.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SITE_URL = 'https://leadfactory.com';
const BLOG_DIR = path.resolve(process.cwd(), 'content/blog');
const OUTPUT_FILE = path.resolve(process.cwd(), 'public/sitemap.xml');

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Static pages configuration
const staticPages: SitemapEntry[] = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/esn', changefreq: 'monthly', priority: 0.8 },
  { url: '/saas', changefreq: 'monthly', priority: 0.8 },
  { url: '/services-b2b', changefreq: 'monthly', priority: 0.8 },
  { url: '/agences-marketing', changefreq: 'monthly', priority: 0.8 },
  { url: '/consultants', changefreq: 'monthly', priority: 0.8 },
  { url: '/immobilier', changefreq: 'monthly', priority: 0.8 },
  { url: '/formation', changefreq: 'monthly', priority: 0.8 },
  { url: '/travaux', changefreq: 'monthly', priority: 0.8 },
  { url: '/services-personne', changefreq: 'monthly', priority: 0.8 },
  { url: '/healthcare', changefreq: 'monthly', priority: 0.8 },
  { url: '/tourisme', changefreq: 'monthly', priority: 0.8 },
];

function getBlogPosts(): SitemapEntry[] {
  if (!fs.existsSync(BLOG_DIR)) {
    console.log('Blog directory does not exist, skipping blog posts');
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  const posts: SitemapEntry[] = [];

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    // Skip drafts
    if (data.draft === true) {
      continue;
    }

    const slug = file.replace('.md', '');
    const date = data.date ? new Date(data.date).toISOString().split('T')[0] : undefined;

    posts.push({
      url: `/blog/${slug}`,
      lastmod: date,
      changefreq: 'weekly',
      priority: 0.7,
    });
  }

  return posts;
}

function generateSitemap(entries: SitemapEntry[]): string {
  const urlEntries = entries
    .map((entry) => {
      const lastmod = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : '';
      return `  <url>
    <loc>${SITE_URL}${entry.url}</loc>${lastmod}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Main execution
const blogPosts = getBlogPosts();
const allEntries = [...staticPages, ...blogPosts];
const sitemap = generateSitemap(allEntries);

fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf-8');
console.log(`✅ Sitemap generated with ${allEntries.length} URLs`);
console.log(`   - ${staticPages.length} static pages`);
console.log(`   - ${blogPosts.length} blog posts`);
console.log(`   Output: ${OUTPUT_FILE}`);
