import { getPostData, getAllPostSlugs } from '@/lib/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import {
  generateArticleSchema,
  generateBreadcrumbListSchema,
  renderJSONLD
} from '@/lib/schemas';


export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths.map((path) => ({
    slug: path.params.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);

  const articleSchema = generateArticleSchema(
    post.title,
    post.excerpt,
    post.author || 'Palm Beaches AI Team',
    post.date,
    post.date, // Using published date as modified date if no separate modified date
    slug,
    post.tags
  );

  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: "Home", url: "https://palmbeachesai.com" },
    { name: "Blog", url: "https://palmbeachesai.com/blog" },
    { name: post.title, url: `https://palmbeachesai.com/blog/${slug}` }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(articleSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(breadcrumbSchema)
        }}
      />
      <Header currentPage="blog" />

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Post Header */}
          <header className="mb-12 pb-8 border-b border-border">
            <div className="mb-4">
              <time className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              {post.author && (
                <span className="text-sm text-muted-foreground ml-4">
                  by {post.author}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
            )}
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <div className="prose prose-lg prose-slate max-w-none 
                         prose-headings:text-primary prose-headings:font-bold
                         prose-p:text-foreground prose-p:leading-relaxed
                         prose-strong:text-primary prose-strong:font-semibold
                         prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                         prose-code:text-accent prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                         prose-pre:bg-muted prose-pre:border prose-pre:border-border
                         prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground
                         prose-ul:text-foreground prose-ol:text-foreground
                         prose-li:text-foreground">
            <MDXRemote 
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>

          {/* Post Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-muted-foreground mb-2">
                  Ready to implement AI in your business?
                </p>
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Get Your Free ROI Assessment
                  </Button>
                </Link>
              </div>
              
              <div className="text-center sm:text-right">
                <Link href="/blog">
                  <Button variant="outline">
                    Read More Articles
                  </Button>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>

      <Footer />
    </div>
  );
}