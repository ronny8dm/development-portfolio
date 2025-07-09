import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ExternalLink, Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import client from '../../client.js';


interface SanityAsset {
  _id: string;
  url: string;
}

interface SanityImage {
  asset: SanityAsset;
}

interface SanityAuthor {
  name: string;
  image?: SanityImage;
}

interface SanityBlock {
  _type: string;
  children?: Array<{
    text: string;
    _type: string;
  }>;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  author: SanityAuthor;
  mainImage?: SanityImage;
  body: SanityBlock[];
  publishedAt: string;
  excerpt?: string;
}


export function Blog() {
  const [postData, setPostData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(
      `*[_type == "post"]{
        title,
        slug,
        _id,
        author->{
          name,
          image{
            asset->{
              _id,
              url
            }
          }
        },
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        publishedAt,
        excerpt
      }`
    )
    .then((data) => {
      setPostData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error('Error fetching posts:', error);
      setLoading(false);
    });
  }, []);

  // Helper function to extract text from Sanity's portable text
  const getExcerpt = (body: SanityBlock[]): string => {
    if (!body || !body.length) return '';
    const firstBlock = body.find(block => block._type === 'block' && block.children);
    if (firstBlock && firstBlock.children && firstBlock.children.length > 0) {
      const text = firstBlock.children[0].text || '';
      return text.length > 150 ? text.substring(0, 150) + '...' : text;
    }
    return '';
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'No date';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="blog" className="w-full max-w-2xl mx-auto  pb-8">
        <div className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Blog</h2>
          <div className="text-center py-8">Loading posts...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="w-full max-w-2xl mx-auto ">
      <div className="flex min-h-0 flex-col gap-y-3"> 
        <h2 className="text-xl font-bold">Blog</h2>
        {postData.length > 0 ? (
          <Carousel className="w-full">
            <CarouselContent className="-ml-2">
              {postData.map((post) => (
                <CarouselItem key={post._id} className="pl-2 basis-1/1 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer overflow-hidden p-0">
                    <Link 
                      to={`/blog/${post.slug.current}`}
                      className="block h-full"
                    >
                      <div className="relative">
                        <div className="aspect-video w-full overflow-hidden bg-muted">
                          {post.mainImage?.asset?.url ? (
                            <img
                              src={post.mainImage.asset.url}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                              <span className="text-2xl font-bold text-primary">
                                {post.title[0]}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="p-2 bg-background/80 backdrop-blur-sm rounded-full">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="pb-2">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                            {post.excerpt || getExcerpt(post.body)}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {formatDate(post.publishedAt)}
                            </span>
                          </div>
                          {post.author && (
                            <span className="text-xs text-muted-foreground">
                              by {post.author.name}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            No blog posts found.
          </div>
        )}
      </div>
    </section>
  )
}