import { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { marked } from 'marked';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  TableOfContents,
  SocialShare,
  RelatedArticles,
  AuthorBadge,
} from '@/components/blog';
import {
  formatDate,
  extractTableOfContents,
  addIdsToHeadings,
  getRelatedPosts,
} from '@/lib/blog';
import type { BlogPostMeta, TableOfContentsItem } from '@/types/blog';

// @ts-ignore - Virtual module from vite-plugin-blog
import { blogPosts } from 'virtual:blog-posts';

// Configure marked for safe HTML rendering
marked.setOptions({
  gfm: true,
  breaks: true,
});

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>('');
  const [toc, setToc] = useState<TableOfContentsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  // Find the post metadata
  const post: BlogPostMeta | undefined = useMemo(
    () => blogPosts.find((p: BlogPostMeta) => p.slug === slug),
    [slug]
  );

  // Get related posts
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return getRelatedPosts(post, blogPosts, 3);
  }, [post, blogPosts]);

  // Reading progress logic
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrollCurrent = window.scrollY;
      if (scrollTotal > 0) {
        setReadingProgress((scrollCurrent / scrollTotal) * 100);
      }
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  // Load and parse the markdown content
  useEffect(() => {
    const loadContent = async () => {
      if (!slug) return;

      setIsLoading(true);
      try {
        const modules = import.meta.glob('/content/blog/*.md', { as: 'raw' });
        const modulePath = `/content/blog/${slug}.md`;

        if (modules[modulePath]) {
          const rawContent = await modules[modulePath]();
          const contentWithoutFrontmatter = rawContent.replace(
            /^---[\s\S]*?---\n*/,
            ''
          );
          const html = marked.parse(contentWithoutFrontmatter) as string;
          const htmlWithIds = addIdsToHeadings(html);
          setContent(htmlWithIds);
          setToc(extractTableOfContents(htmlWithIds));
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadContent();
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle 404
  if (!post && !isLoading) {
    return (
      <div className="min-h-screen bg-[#FFFDF5]">
        <Navbar />
        <main className="pt-32 pb-64">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white border-[4px] border-black p-16 shadow-[20px_20px_0px_0px_#FFC4EB]">
                <div className="text-9xl mb-8">👻</div>
                <h1 className="text-5xl lg:text-7xl font-black uppercase mb-8 leading-none">404</h1>
                <p className="text-2xl font-bold text-gray-600 mb-12">Cet article semble s'être envolé.</p>
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-4 bg-[#3B82F6] text-white border-[4px] border-black px-10 py-5 font-black uppercase text-xl shadow-[8px_8px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_#000000] transition-all"
                >
                  <ArrowLeft className="w-8 h-8" />
                  Retour au blog
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const articleUrl = `https://leadfactory.com/blog/${slug}`;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-100 z-50">
        <div
          className="h-full bg-[#3B82F6] transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {post && (
        <Helmet>
          <title>{post.title} | Blog LeadFactory</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={post.tags.join(', ')} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={articleUrl} />
          {post.image && <meta property="og:image" content={post.image} />}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="article:published_time" content={post.date} />
          <meta property="article:author" content={post.author} />
          <link rel="canonical" href={articleUrl} />
        </Helmet>
      )}

      <div className="min-h-screen bg-[#FFFDF5] selection:bg-[#3B82F6] selection:text-white">
        <Navbar />

        <main className="pt-24 lg:pt-32">
          {post && (
            <>
              {/* Breadcrumb-like back button */}
              <div className="container mx-auto px-6 lg:px-12 mb-12">
                <button
                  onClick={() => navigate('/blog')}
                  className="group inline-flex items-center gap-3 font-black text-sm uppercase tracking-widest bg-white border-[3px] border-black px-6 py-3 shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000000] transition-all"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
                  Tous les articles
                </button>
              </div>

              {/* Article Header */}
              <header className="mb-20">
                <div className="container mx-auto px-6 lg:px-12">
                  <div className="max-w-5xl">
                    <div className="flex flex-wrap gap-3 mb-10">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/blog?tag=${encodeURIComponent(tag)}`}
                          className="bg-[#FFC4EB] border-2 border-black px-4 py-1.5 text-xs font-black uppercase tracking-widest hover:bg-[#3B82F6] hover:text-white transition-colors"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                      {post.title}
                    </h1>

                    <p className="text-2xl lg:text-3xl font-bold text-gray-700 mb-12 max-w-3xl leading-snug">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap items-center gap-10 py-10 border-y-[3px] border-black">
                      <AuthorBadge author={post.author} />
                      <div className="flex items-center gap-3 text-sm font-black uppercase tracking-wider text-black/60">
                        <Calendar className="w-5 h-5 text-black" />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-black uppercase tracking-wider text-black/60">
                        <Clock className="w-5 h-5 text-black" />
                        <span>{post.readingTime} min de lecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              {post.image && (
                <div className="container mx-auto px-6 lg:px-12 mb-20 lg:mb-32">
                  <div className="relative border-[4px] border-black shadow-[24px_24px_0px_0px_rgba(0,0,0,0.1)] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-[400px] lg:h-[700px] object-cover"
                    />
                  </div>
                </div>
              )}

              {/* Article Content Layout */}
              <div className="container mx-auto px-6 lg:px-12 pb-32">
                <div className="grid lg:grid-cols-12 gap-20">
                  {/* Sticky TOC */}
                  <aside className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-32 space-y-12">
                      {toc.length > 0 && (
                        <div className="bg-white border-[3px] border-black p-8 shadow-[10px_10px_0px_0px_#FDE047]">
                          <h4 className="text-lg font-black uppercase mb-6 border-b-2 border-black pb-4">
                            Découvrir
                          </h4>
                          <TableOfContents items={toc} />
                        </div>
                      )}

                      <div className="bg-black text-white p-8 border-[3px] border-black shadow-[10px_10px_0px_0px_#3B82F6]">
                        <h4 className="text-lg font-black uppercase mb-6 tracking-widest">Partager</h4>
                        <SocialShare
                          url={articleUrl}
                          title={post.title}
                          excerpt={post.excerpt}
                        />
                      </div>
                    </div>
                  </aside>

                  {/* Main Content */}
                  <article className="lg:col-span-8 lg:col-start-5">
                    {/* Mobile Extras */}
                    <div className="lg:hidden space-y-8 mb-16">
                      {toc.length > 0 && (
                        <div className="bg-white border-[3px] border-black p-6">
                          <TableOfContents items={toc} />
                        </div>
                      )}
                      <div className="flex justify-center bg-white border-[3px] border-black p-6">
                        <SocialShare
                          url={articleUrl}
                          title={post.title}
                          excerpt={post.excerpt}
                        />
                      </div>
                    </div>

                    {/* Article Body */}
                    {isLoading ? (
                      <div className="space-y-8">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="h-6 bg-gray-200 animate-pulse border-r-[4px] border-black"
                            style={{ width: `${70 + Math.random() * 30}%` }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div
                        className="prose prose-2xl prose-brutalist max-w-none prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tighter prose-a:text-[#3B82F6] prose-a:no-underline hover:prose-a:underline prose-img:border-[4px] prose-img:border-black prose-img:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] prose-blockquote:border-l-[8px] prose-blockquote:border-black prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:font-black prose-blockquote:uppercase prose-blockquote:tracking-tight"
                        dangerouslySetInnerHTML={{ __html: content }}
                      />
                    )}

                    {/* Footer Tags */}
                    <footer className="mt-20 pt-12 border-t-[4px] border-black">
                      <div className="flex flex-wrap items-center justify-between gap-8">
                        <div className="flex flex-wrap gap-3">
                          {post.tags.map((tag) => (
                            <Link
                              key={tag}
                              to={`/blog?tag=${encodeURIComponent(tag)}`}
                              className="bg-white border-2 border-black px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
                            >
                              #{tag}
                            </Link>
                          ))}
                        </div>
                        <Link
                          to="/blog"
                          className="font-black uppercase tracking-widest text-[#3B82F6] hover:translate-x-2 transition-transform inline-flex items-center gap-2"
                        >
                          Retour au flux
                          <span className="text-2xl">→</span>
                        </Link>
                      </div>
                    </footer>
                  </article>
                </div>
              </div>
            </>
          )}
        </main>

        {relatedPosts.length > 0 && (
          <div className="bg-white border-t-[4px] border-black">
            <RelatedArticles posts={relatedPosts} />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
