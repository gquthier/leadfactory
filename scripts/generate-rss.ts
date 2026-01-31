/**
 * RSS Feed Generator for LeadFactory Blog
 * 
 * Run with: npx tsx scripts/generate-rss.ts
 * 
 * This script generates an RSS feed for the blog.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const SITE_URL = 'https://leadfactory.com';
const SITE_TITLE = 'LeadFactory Blog';
const SITE_DESCRIPTION = 'Conseils, stratégies et insights pour générer plus de leads qualifiés et développer votre business B2B.';
const BLOG_DIR = path.resolve(process.cwd(), 'content/blog');
const OUTPUT_FILE = path.resolve(process.cwd(), 'public/rss.xml');

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
}

function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    console.log('Blog directory does not exist, skipping blog posts');
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  const posts: BlogPost[] = [];

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    // Skip drafts
    if (data.draft === true) {
      continue;
    }

    const slug = file.replace('.md', '');

    posts.push({
      slug,
      title: data.title || 'Untitled',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      excerpt: data.excerpt || '',
      author: data.author || 'ASIO',
      tags: Array.isArray(data.tags) ? data.tags : [],
    });
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRss(posts: BlogPost[]): string {
  const buildDate = new Date().toUTCString();

  const items = posts
    .slice(0, 50) // Limit to 50 most recent posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const categories = post.tags
        .map((tag) => `      <category>${escapeXml(tag)}</category>`)
        .join('\n');

      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(post.author)}</author>
${categories}
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>fr-FR</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;
}

// Main execution
const blogPosts = getBlogPosts();
const rss = generateRss(blogPosts);

fs.writeFileSync(OUTPUT_FILE, rss, 'utf-8');
console.log(`✅ RSS feed generated with ${blogPosts.length} posts`);
console.log(`   Output: ${OUTPUT_FILE}`);
