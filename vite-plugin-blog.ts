import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  categories: string[];
  author: string;
  excerpt: string;
  image?: string;
  draft: boolean;
  readingTime: number;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

function getBlogPosts(blogDir: string): BlogPostMeta[] {
  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
  const posts: BlogPostMeta[] = [];

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const slug = file.replace('.md', '');
    const readingTime = calculateReadingTime(content);

    posts.push({
      slug,
      title: data.title || 'Untitled',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      tags: Array.isArray(data.tags) ? data.tags : [],
      categories: Array.isArray(data.categories) ? data.categories : [],
      author: data.author || 'ASIO',
      excerpt: data.excerpt || '',
      image: data.image || undefined,
      draft: data.draft === true,
      readingTime,
    });
  }

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

function getBlogPost(blogDir: string, slug: string): { meta: BlogPostMeta; content: string } | null {
  const filePath = path.join(blogDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const readingTime = calculateReadingTime(content);

  return {
    meta: {
      slug,
      title: data.title || 'Untitled',
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      tags: Array.isArray(data.tags) ? data.tags : [],
      categories: Array.isArray(data.categories) ? data.categories : [],
      author: data.author || 'ASIO',
      excerpt: data.excerpt || '',
      image: data.image || undefined,
      draft: data.draft === true,
      readingTime,
    },
    content,
  };
}

export function blogPlugin(): Plugin {
  const virtualModuleId = 'virtual:blog-posts';
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  const blogDir = path.resolve(process.cwd(), 'content/blog');

  return {
    name: 'vite-plugin-blog',
    
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
      if (id.startsWith('virtual:blog-post:')) {
        return '\0' + id;
      }
    },

    load(id) {
      if (id === resolvedVirtualModuleId) {
        const posts = getBlogPosts(blogDir);
        return `export const blogPosts = ${JSON.stringify(posts)};`;
      }
      
      if (id.startsWith('\0virtual:blog-post:')) {
        const slug = id.replace('\0virtual:blog-post:', '');
        const post = getBlogPost(blogDir, slug);
        if (post) {
          return `export const blogPost = ${JSON.stringify(post)};`;
        }
        return `export const blogPost = null;`;
      }
    },

    configureServer(server) {
      // Watch for changes in blog directory
      server.watcher.add(blogDir);
      
      server.watcher.on('change', (filePath) => {
        if (filePath.startsWith(blogDir) && filePath.endsWith('.md')) {
          // Invalidate virtual modules
          const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
          }
          
          // Trigger HMR
          server.ws.send({
            type: 'full-reload',
          });
        }
      });

      server.watcher.on('add', (filePath) => {
        if (filePath.startsWith(blogDir) && filePath.endsWith('.md')) {
          server.ws.send({
            type: 'full-reload',
          });
        }
      });

      server.watcher.on('unlink', (filePath) => {
        if (filePath.startsWith(blogDir) && filePath.endsWith('.md')) {
          server.ws.send({
            type: 'full-reload',
          });
        }
      });
    },
  };
}

export default blogPlugin;
