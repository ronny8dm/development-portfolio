import client from '../client.js';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { PortableText } from '@portabletext/react';
import Nav from '@/components/Nav/index.js';
import { ExternalLink, Facebook, Instagram, Github } from 'lucide-react';
import imageUrlBuilder from '@sanity/image-url'
import { SiX, SiInstagram, SiGithub } from '@icons-pack/react-simple-icons';


interface SanityAsset {
  _id: string;
  url: string;
}

interface SanityImage {
  asset: SanityAsset;
}

interface Category {
  title: string;
}

interface SanityBlock {
  _type: string;
  children?: Array<{
    text: string;
    _type: string;
  }>;
}

interface BlogPostDetails {
  title: string;
  slug: {
    current: string;
  };
  mainImage?: SanityImage;
  body: SanityBlock[];
  publishedAt: string;
  categories?: Category[];
  name: string;
  authorImage?: SanityAsset;
  instagram?: string;
  x?: string;
  facebook?: string;
  bio?: string;
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source)
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      
      if (!value?.asset) {
        console.warn('No image asset found:', value);
        return null;
      }
      
      try {
        const imageUrl = urlFor(value).width(800).quality(80).url();
        
        return (
          <img
            src={imageUrl}
            alt={value.alt || 'Blog image'}
            className="rounded-lg my-6 w-full"
            onError={(e) => {
              console.error('Image failed to load:', imageUrl);
              e.currentTarget.style.display = 'none';
            }}
          />
        );
      } catch (error) {
        console.error('Error building image URL:', error);
        return null;
      }
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-primary hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-xl font-semibold mt-6 mb-3">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-lg font-medium mt-4 mb-2">{children}</h3>,
    normal: ({ children }: any) => <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-primary pl-4 italic my-4 text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-1 text-sm text-muted-foreground">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-1 text-sm text-muted-foreground">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
};

function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      if (!slug) {
        setError('No slug provided');
        setLoading(false);
        return;
      }

      console.log("Fetching data for slug:", slug);
      try {
        const data = await client.fetch<BlogPostDetails[]>(
          `*[slug.current == $slug]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            },
            body,
            publishedAt,
            categories[]->{
              title
            },
            "name": author->name,
            "authorImage": author->image.asset->{
              _id,
              url
            },
            "instagram": author->instagram,
            "x": author->x,
            "facebook": author->facebook,
            "bio": author->bio,
          }`,
          { slug }
        );

        if (isMounted) {
          console.log(data);
          if (data && data.length > 0) {
            setPost(data[0]);
          } else {
            setError('Post not found');
          }
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        if (isMounted) {
          setError('Failed to fetch post');
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <>
        <Nav/>
        <main className='flex flex-col min-h-[100dvh] py-12 px-4'>
          <div className="w-full max-w-2xl mx-auto px-6">
            <div className="text-center py-8">Loading...</div>
          </div>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Nav/>
        <main className='flex flex-col min-h-[100dvh] py-12 px-4'>
          <div className="w-full max-w-2xl mx-auto px-6">
            <div className="text-center py-8 text-destructive">{error}</div>
          </div>
        </main>
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Nav/>
        <main className='flex flex-col min-h-[100dvh] py-12 px-4'>
          <div className="w-full max-w-2xl mx-auto px-6">
            <div className="text-center py-8">Post not found</div>
          </div>
        </main>
      </>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Nav/>
      <main className='flex flex-col min-h-[100dvh] py-12 px-4 space-y-16 '>
        
        <div className="w-full max-w-2xl mx-auto px-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            ← Back to Portfolio
          </Link>
        </div>

     
        <section className="w-full max-w-2xl mx-auto px-6 ">
          <div className="space-y-4">
      
            {post.mainImage?.asset?.url && (
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-6">
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

           
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{formattedDate}</span>
                {post.name && <span>by {post.name}</span>}
                {post.categories && post.categories.length > 0 && (
                  <span>in {post.categories.map(cat => cat.title).join(', ')}</span>
                )}
              </div>
              <div className='flex items-center gap-3 mt-2 text-xs text-muted-foreground'>
                <a
                href={post.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                          title="X"
                >
                    <SiX className='w-5' />
                </a>

                <a href={post.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                          title="Github">

                    <SiGithub className='w-5'/>
                </a>
                <a href={post.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 flex items-center justify-center border rounded-md text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
                          title="Instagram">

                    <SiInstagram className='w-5'/>
                </a>
                
                
                
              </div>
            </div>
          </div>
        </section>

      
        <section className="w-full max-w-2xl mx-auto px-6 pb-12">
          <article className="prose prose-neutral dark:prose-invert max-w-none">
            <PortableText 
              value={post.body} 
              components={portableTextComponents}
            />
          </article>
        </section>

        
      </main>
    </>
  );
}

export default BlogDetails;