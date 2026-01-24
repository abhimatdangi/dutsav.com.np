import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { getBlogBySlug, blogPosts } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="text-4xl font-semibold text-primary mb-4">Blog Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button variant="default">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Get related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              {/* Category */}
              <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="container mx-auto px-4 -mt-2">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h2: (props) => (
                      <h2 className="text-2xl font-semibold text-primary mt-10 mb-4 pb-2 border-b border-border" {...props} />
                    ),
                    h3: (props) => (
                      <h3 className="text-xl font-semibold text-primary mt-8 mb-3" {...props} />
                    ),
                    p: (props) => (
                      <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
                    ),
                    ul: (props) => (
                      <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
                    ),
                    ol: (props) => (
                      <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground" {...props} />
                    ),
                    li: (props) => (
                      <li className="text-muted-foreground" {...props} />
                    ),
                    strong: (props) => (
                      <strong className="font-semibold text-primary" {...props} />
                    ),
                    table: (props) => (
                      <div className="overflow-x-auto my-6">
                        <table className="min-w-full border border-border rounded-lg overflow-hidden" {...props} />
                      </div>
                    ),
                    thead: (props) => (
                      <thead className="bg-muted" {...props} />
                    ),
                    th: (props) => (
                      <th className="px-4 py-3 text-left text-sm font-semibold text-primary border-b border-border" {...props} />
                    ),
                    td: (props) => (
                      <td className="px-4 py-3 text-sm text-muted-foreground border-b border-border" {...props} />
                    ),
                    blockquote: (props) => (
                      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-4" {...props} />
                    ),
                    code: ({ className, children, ...props }) => {
                      const isInline = !className;
                      if (isInline) {
                        return (
                          <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-accent" {...props}>
                            {children}
                          </code>
                        );
                      }
                      return (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                    hr: (props) => (
                      <hr className="my-8 border-border" {...props} />
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </article>

              {/* CTA */}
              <div className="mt-12 p-8 bg-primary rounded-2xl text-center">
                <h3 className="text-2xl font-semibold text-primary-foreground mb-3">
                  Need Professional Assistance?
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Our team of experts is ready to help you with your financial and compliance needs.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Us Today
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-semibold text-primary mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="apple-card overflow-hidden group hover-lift"
                  >
                    <div className="aspect-video overflow-hidden -m-6 mb-0">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="pt-6">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-semibold text-primary mt-3 mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
