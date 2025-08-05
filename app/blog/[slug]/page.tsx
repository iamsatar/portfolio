import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// In a real app, you would fetch this data from an API or CMS
const blogPosts = {
  "getting-started-with-nextjs": {
    title: "Getting Started with Next.js",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Web Development",
    content: `
      <p>Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.</p>
      
      <h2>Why Next.js?</h2>
      <p>You need to consider several things when building a modern application:</p>
      <ul>
        <li>Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.</li>
        <li>You need to do production optimizations such as code splitting.</li>
        <li>You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.</li>
        <li>You might have to write some server-side code to connect your React app to your data store.</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To start using Next.js, you need to have Node.js installed on your machine. Then, you can create a new Next.js app using the following command:</p>
      <pre><code>npx create-next-app@latest</code></pre>
      
      <p>This command will create a new Next.js app with the latest version of Next.js. You can also pass options to customize your setup:</p>
      <pre><code>npx create-next-app@latest --typescript --eslint --tailwind</code></pre>
      
      <h2>Project Structure</h2>
      <p>After creating a new Next.js app, you'll have a project structure that looks like this:</p>
      <pre><code>
my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   └── ...
├── components/
│   └── ...
├── node_modules/
│   └── ...
├── package.json
└── next.config.js
      </code></pre>
      
      <p>Next.js 13 introduced the new App Router built on React Server Components, which provides a new way to build applications with shared layouts, nested routing, loading states, error handling, and more.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js is a powerful framework that simplifies React development by providing a structured approach to building web applications. Its features like server-side rendering, static site generation, and API routes make it an excellent choice for modern web development.</p>
    `,
  },
  "responsive-design-best-practices": {
    title: "Responsive Design Best Practices",
    date: "April 22, 2023",
    readTime: "8 min read",
    category: "Design",
    content: `
      <p>Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. In this post, we'll explore some best practices for creating responsive designs.</p>
      
      <h2>Mobile-First Approach</h2>
      <p>Start by designing for the smallest screen first, then progressively enhance the design for larger screens. This approach forces you to prioritize content and ensures a better experience on mobile devices.</p>
      
      <h2>Fluid Layouts</h2>
      <p>Use relative units like percentages, ems, or rems instead of fixed pixels for layout elements. This allows your layout to adapt to different screen sizes naturally.</p>
      
      <h2>Flexible Images</h2>
      <p>Make your images responsive by using the max-width property:</p>
      <pre><code>img {
  max-width: 100%;
  height: auto;
}</code></pre>
      
      <h2>Media Queries</h2>
      <p>Use media queries to apply different styles for different screen sizes:</p>
      <pre><code>/* Mobile styles */
@media (min-width: 768px) {
  /* Tablet styles */
}
@media (min-width: 1024px) {
  /* Desktop styles */
}</code></pre>
      
      <h2>Testing on Real Devices</h2>
      <p>While browser dev tools are useful, nothing beats testing on actual devices. Test your design on as many real devices as possible to ensure a good experience for all users.</p>
      
      <h2>Conclusion</h2>
      <p>Responsive design is essential in today's multi-device world. By following these best practices, you can create web experiences that work well across all devices and screen sizes.</p>
    `,
  },
  "introduction-to-typescript": {
    title: "Introduction to TypeScript",
    date: "March 10, 2023",
    readTime: "6 min read",
    category: "Programming",
    content: `<p>This is a placeholder for the TypeScript article content.</p>`,
  },
  "using-tailwind-css-for-rapid-development": {
    title: "Using Tailwind CSS for Rapid Development",
    date: "February 5, 2023",
    readTime: "4 min read",
    category: "CSS",
    content: `<p>This is a placeholder for the Tailwind CSS article content.</p>`,
  },
  "the-future-of-web-development": {
    title: "The Future of Web Development",
    date: "January 20, 2023",
    readTime: "7 min read",
    category: "Trends",
    content: `<p>This is a placeholder for the Future of Web Development article content.</p>`,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found",
    };
  }
  
  return {
    title: `${post.title} | Blog`,
    description: post.title,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Badge>{post.category}</Badge>
            <div className="text-sm text-muted-foreground">
              {post.date} · {post.readTime}
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            {post.title}
          </h1>
        </div>
        
        <div 
          className="prose prose-gray max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-12 pt-6 border-t">
          <Button variant="outline" asChild>
            <Link href="/blog">← Back to Blog</Link>
          </Button>
        </div>
      </article>
    </div>
  );
}
