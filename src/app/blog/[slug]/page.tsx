import { getPostData, getAllPostSlugs } from '@/lib/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
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
            {post.image && (
              <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {post.author && (
              <div className="mb-4">
                <span className="text-sm text-muted-foreground">
                  by {post.author}
                </span>
              </div>
            )}

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
                         prose-headings:text-primary prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                         prose-p:text-foreground prose-p:leading-relaxed prose-p:my-4
                         prose-strong:text-primary prose-strong:font-semibold
                         prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                         prose-code:text-accent prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                         prose-pre:bg-muted prose-pre:border prose-pre:border-border
                         prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground
                         prose-ul:text-foreground prose-ul:my-4 prose-ol:text-foreground prose-ol:my-4
                         prose-li:text-foreground prose-li:my-1
                         [&_p]:my-4 [&_ul]:my-4 [&_ol]:my-4 [&_h1]:mt-12 [&_h1]:mb-6 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:text-primary [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-center [&_h3]:mt-6 [&_h3]:mb-3">
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