import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Coffee, MessageSquare, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-6 w-6 mr-2" />
                <span className="text-sm font-medium">Hello there, I&apos;m glad you&apos;re here</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to My Personal Space
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                I&apos;m a web developer who believes in creating experiences that connect with people. I design with empathy and build with purpose.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/portfolio">
                <Button className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center mt-8 text-sm text-muted-foreground">
              <Heart className="h-4 w-4 mr-2 text-red-500" />
              <span>Designed with empathy and built with care</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-muted/50 rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-secondary/50 text-secondary-foreground">
              <Coffee className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">A bit about me</span>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Human Behind the Screen
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                I specialize in building experiences that understand and anticipate human needs. With a background in both design and development, I create digital solutions that feel intuitive and thoughtful.
              </p>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                I believe technology should adapt to humans, not the other way around. Every project I undertake begins with understanding the emotional journey of the users.
              </p>
            </div>
            <div className="grid gap-6 mt-10 md:grid-cols-3">
              <div className="bg-background rounded-lg p-6 text-left shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Empathetic Design</h3>
                <p className="text-muted-foreground">I design with human emotions in mind, creating interfaces that feel welcoming and understood.</p>
              </div>
              <div className="bg-background rounded-lg p-6 text-left shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Thoughtful Interactions</h3>
                <p className="text-muted-foreground">Every button, animation, and transition is crafted to create moments of delight.</p>
              </div>
              <div className="bg-background rounded-lg p-6 text-left shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
                <p className="text-muted-foreground">I believe in honest, straightforward language that makes complex ideas simple.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



