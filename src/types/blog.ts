export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  categories: string[];
  author: string;
  excerpt: string;
  image?: string;
  draft: boolean;
  content: string;
  readingTime: number;
  wordCount: number;
}

export interface BlogPostMeta {
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

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogSearchResult {
  item: BlogPostMeta;
  score?: number;
}
