import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const metadata = {
  title: "Blog | Personal Website",
  description: "Read my latest blog posts about web development and design",
};

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Web Development",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "Responsive Design Best Practices",
    excerpt: "Discover the best practices for creating responsive designs that work across all devices.",
    date: "April 22, 2023",
    readTime: "8 min read",
    category: "Design",
    slug: "responsive-design-best-practices",
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    excerpt: "Learn the basics of TypeScript and how it improves your JavaScript development experience.",
    date: "March 10, 2023",
    readTime: "6 min read",
    category: "Programming",
    slug: "introduction-to-typescript",
  },
  {
    id: 4,
    title: "Using Tailwind CSS for Rapid Development",
    excerpt: "How to use Tailwind CSS to speed up your development workflow while maintaining design consistency.",
    date: "February 5, 2023",
    readTime: "4 min read",
    category: "CSS",
    slug: "using-tailwind-css-for-rapid-development",
  },
  {
    id: 5,
    title: "The Future of Web Development",
    excerpt: "A look at upcoming technologies and trends that will shape the future of web development.",
    date: "January 20, 2023",
    readTime: "7 min read",
    category: "Trends",
    slug: "the-future-of-web-development",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Blog</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Thoughts, tutorials, and insights about web development and design.
        </p>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge>{post.category}</Badge>
                <div className="text-sm text-muted-foreground">
                  {post.date} · {post.readTime}
                </div>
              </div>
              <CardTitle className="mt-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{post.excerpt}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-sm font-medium text-primary hover:underline"
              >
                Read more →
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}