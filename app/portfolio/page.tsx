import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";

export const metadata = {
  title: "Portfolio | Personal Website",
  description: "Check out my portfolio of projects",
};

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg",
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Blog Platform",
    description: "A custom blog platform with a headless CMS and responsive design.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A task management application with drag and drop functionality.",
    image: "/placeholder.svg",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather and forecasts.",
    image: "/placeholder.svg",
    tags: ["JavaScript", "API Integration", "CSS3", "HTML5"],
    demoUrl: "#",
    codeUrl: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary">
          <Sparkles className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">Projects crafted with care</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">My Creative Journey</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Each project represents a unique story and solution. I&apos;ve poured my heart into these creations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item) => (
          <Card key={item.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 shadow-sm">
            <div className="h-48 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground">Project Image</span>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{item.title}</span>
                <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500 transition-colors cursor-pointer" />
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="flex items-center gap-2" asChild>
                <Link href={item.demoUrl}>
                  <Sparkles className="h-4 w-4" />
                  <span>Live Demo</span>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={item.codeUrl}>View Code</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto p-6 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-medium mb-4">Looking for something specific?</h2>
          <p className="text-muted-foreground mb-4">
            These projects represent just a portion of my work. If you&apos;re looking for something specific or have a particular challenge in mind, I&apos;d love to discuss how we can work together.
          </p>
          <Button asChild>
            <Link href="/contact" className="flex items-center gap-2">
              <span>Let&apos;s Discuss Your Project</span>
              <Sparkles className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}


