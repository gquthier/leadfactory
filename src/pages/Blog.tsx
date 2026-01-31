import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  BlogHero,
  BlogCard,
  BlogSidebar,
  BlogSearch,
} from '@/components/blog';
import { filterPostsByTag, filterPostsByCategory, sortPostsByDate } from '@/lib/blog';
import type { BlogPostMeta } from '@/types/blog';

// @ts-ignore - Virtual module from vite-plugin-blog
import { blogPosts } from 'virtual:blog-posts';

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const tagFilter = searchParams.get('tag');
  const categoryFilter = searchParams.get('category');

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts: BlogPostMeta[] = blogPosts.filter((p: BlogPostMeta) => !p.draft);

    if (tagFilter) {
      posts = filterPostsByTag(posts, tagFilter);
    }

    if (categoryFilter) {
      posts = filterPostsByCategory(posts, categoryFilter);
    }

    return sortPostsByDate(posts);
  }, [tagFilter, categoryFilter, blogPosts]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const featuredPost = currentPage === 1 && !tagFilter && !categoryFilter
    ? paginatedPosts[0]
    : null;
  const regularPosts = featuredPost ? paginatedPosts.slice(1) : paginatedPosts;

  // SEO
  const pageTitle = tagFilter
    ? `Articles sur ${tagFilter} | Blog LeadFactory`
    : categoryFilter
      ? `${categoryFilter} | Blog LeadFactory`
      : 'Blog | LeadFactory - Conseils et stratégies de génération de leads';

  const pageDescription = tagFilter
    ? `Découvrez nos articles sur ${tagFilter}. Conseils et stratégies pour générer plus de leads qualifiés.`
    : 'Conseils, stratégies et insights pour générer plus de leads qualifiés et développer votre business B2B.';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://leadfactory.com/blog" />
        <link rel="canonical" href="https://leadfactory.com/blog" />
      </Helmet>

      <div className="min-h-screen bg-[#FFFDF5] selection:bg-[#3B82F6] selection:text-white">
        <Navbar />

        <main className="pt-16 lg:pt-20">
          <BlogHero />

          {/* Search Section */}
          <section className="border-y-[3px] border-black py-12 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDE047] opacity-20 blur-3xl -mr-32 -mt-32 rounded-full" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#3B82F6] mb-2">
                    Recherche
                  </h2>
                  <p className="text-3xl font-black uppercase leading-none">
                    Trouvez l'inspiration pour votre croissance
                  </p>
                </div>
                <BlogSearch posts={blogPosts.filter((p: BlogPostMeta) => !p.draft)} />
              </div>
            </div>
          </section>

          {/* Active Filters */}
          {(tagFilter || categoryFilter) && (
            <section className="border-b-[3px] border-black py-6 bg-[#FDE047]">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <span className="font-black uppercase text-xs tracking-widest text-black/60">
                    Filtre actif
                  </span>
                  <div className="flex items-center gap-4 bg-white border-[3px] border-black px-6 py-2 shadow-[4px_4px_0px_0px_#000000]">
                    <span className="font-black uppercase tracking-tighter">
                      {tagFilter || categoryFilter}
                    </span>
                    <a href="/blog" className="text-black hover:text-[#3B82F6] transition-colors">
                      ✕
                    </a>
                  </div>
                  <span className="text-sm font-bold bg-black text-white px-3 py-1">
                    {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* Blog Content */}
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-24">
                  <div className="inline-block bg-white border-[3px] border-black p-16 max-w-2xl mx-auto shadow-[12px_12px_0px_0px_#FFC4EB]">
                    <div className="text-6xl mb-8">🔍</div>
                    <h2 className="text-3xl lg:text-5xl font-black uppercase mb-6 leading-tight">
                      Aucun article<br />ne correspond
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-md mx-auto">
                      {tagFilter || categoryFilter
                        ? "Nous n'avons pas encore d'articles pour ce filtre. Essayez une autre catégorie !"
                        : "Les articles arrivent bientôt ! Nos experts préparent du contenu de haute qualité."}
                    </p>
                    <a
                      href="/blog"
                      className="inline-flex items-center gap-3 bg-[#3B82F6] text-white border-[3px] border-black px-10 py-5 font-black uppercase tracking-tighter text-lg shadow-[8px_8px_0px_0px_#000000] hover:shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
                    >
                      Voir tous les articles
                    </a>
                  </div>
                </div>
              ) : (
                <div className="grid lg:grid-cols-12 gap-16">
                  {/* Main Content */}
                  <div className="lg:col-span-8">
                    {/* Featured Post */}
                    {featuredPost && (
                      <div className="mb-24">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-[3px] flex-1 bg-black" />
                          <span className="font-black uppercase tracking-[0.3em] text-xs">
                            À la une cette semaine
                          </span>
                          <div className="h-[3px] flex-1 bg-black" />
                        </div>
                        <BlogCard post={featuredPost} featured />
                      </div>
                    )}

                    {/* Posts Grid */}
                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
                      {regularPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center gap-4 mt-24">
                        <div className="h-[3px] w-12 bg-black hidden sm:block" />
                        <div className="flex gap-3">
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                            (page) => (
                              <button
                                key={page}
                                onClick={() => {
                                  setCurrentPage(page);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`w-14 h-14 border-[3px] border-black font-black text-xl transition-all flex items-center justify-center ${currentPage === page
                                    ? 'bg-[#3B82F6] text-white shadow-[6px_6px_0px_0px_#000000]'
                                    : 'bg-white hover:bg-[#FDE047] shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#000000]'
                                  }`}
                              >
                                {page}
                              </button>
                            )
                          )}
                        </div>
                        <div className="h-[3px] w-12 bg-black hidden sm:block" />
                      </div>
                    )}
                  </div>

                  {/* Sidebar */}
                  <aside className="lg:col-span-4">
                    <div className="lg:sticky lg:top-32 space-y-12">
                      <div className="bg-white border-[3px] border-black p-8 shadow-[10px_10px_0px_0px_#FFC4EB]">
                        <BlogSidebar posts={blogPosts} />
                      </div>

                      {/* Premium Newsletter Box */}
                      <div className="bg-[#3B82F6] border-[3px] border-black p-8 shadow-[10px_10px_0px_0px_#000000] text-white">
                        <h3 className="text-2xl font-black uppercase mb-4 leading-none">
                          Devenez une machine à leads
                        </h3>
                        <p className="text-white/80 font-bold mb-6">
                          Recevez nos meilleures stratégies de prospection chaque mardi.
                        </p>
                        <div className="space-y-4">
                          <input
                            type="email"
                            placeholder="votre@email.com"
                            className="w-full bg-white border-[3px] border-black p-4 text-black font-bold placeholder:text-gray-400 focus:outline-none"
                          />
                          <button className="w-full bg-[#FDE047] text-black border-[3px] border-black py-4 font-black uppercase shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000] transition-all">
                            Je rejoins la liste
                          </button>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
