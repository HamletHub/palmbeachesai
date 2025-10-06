import { getSortedPostsData } from '@/lib/blog';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  generateBreadcrumbListSchema,
  renderJSONLD
} from '@/lib/schemas';

export default function BlogPage() {
  const posts = getSortedPostsData();

  const breadcrumbSchema = generateBreadcrumbListSchema([
    { name: "Home", url: "https://palmbeachesai.com" },
    { name: "Blog", url: "https://palmbeachesai.com/blog" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderJSONLD(breadcrumbSchema)
        }}
      />
      <Header currentPage="blog" />

      {/* Blog Header */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            AI Insights & Industry Updates
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Expert insights on AI implementation, ROI strategies, and the latest developments in artificial intelligence for Palm Beach businesses.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                No blog posts yet. Check back soon for AI insights and industry updates!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <Card className="h-full border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <time className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                        {post.author && (
                          <Badge variant="secondary" className="text-xs">
                            {post.author}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl group-hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 3} more
                            </Badge>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}