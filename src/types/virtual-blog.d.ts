declare module 'virtual:blog-posts' {
  import type { BlogPostMeta } from '@/types/blog';
  export const blogPosts: BlogPostMeta[];
}

declare module 'virtual:blog-post:*' {
  import type { BlogPostMeta } from '@/types/blog';
  export const blogPost: {
    meta: BlogPostMeta;
    content: string;
  } | null;
}
