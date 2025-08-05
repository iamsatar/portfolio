"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, Coffee, Send, User, Clock, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    mood: "neutral"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleMoodChange = (value: string) => {
    setFormState(prev => ({ ...prev, mood: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        mood: "neutral"
      });
    }, 1500);
  };
  
  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-primary/10 text-primary">
          <Send className="h-5 w-5 mr-2" />
          <span className="text-sm font-medium">{getGreeting()}, let's connect</span>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Get In Touch</h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          I'd love to hear from you. Whether you have a question, a project idea, or just want to say hello.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" /> 
              <span>Let's Start a Conversation</span>
            </CardTitle>
            <CardDescription>I appreciate you taking the time to reach out.</CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">Thank you for reaching out!</h3>
                <p className="text-muted-foreground mb-4">
                  I've received your message and I'll get back to you as soon as possible. I look forward to our conversation!
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base">What's your name?</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    className="h-11"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">Where can I reach you?</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formState.email}
                    onChange={handleChange}
                    className="h-11"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-base">What's this about?</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    value={formState.subject}
                    onChange={handleChange}
                    className="h-11"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-base">How are you feeling today?</Label>
                  <RadioGroup 
                    value={formState.mood} 
                    onValueChange={handleMoodChange}
                    className="flex space-x-2 my-2"
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <RadioGroupItem value="excited" id="excited" className="peer sr-only" />
                      <Label 
                        htmlFor="excited" 
                        className="p-2 cursor-pointer rounded-full peer-data-[state=checked]:bg-primary/10 hover:bg-muted"
                      >
                        😃
                      </Label>
                      <span className="text-xs">Excited</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <RadioGroupItem value="happy" id="happy" className="peer sr-only" />
                      <Label 
                        htmlFor="happy" 
                        className="p-2 cursor-pointer rounded-full peer-data-[state=checked]:bg-primary/10 hover:bg-muted"
                      >
                        😊
                      </Label>
                      <span className="text-xs">Happy</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <RadioGroupItem value="neutral" id="neutral" className="peer sr-only" />
                      <Label 
                        htmlFor="neutral" 
                        className="p-2 cursor-pointer rounded-full peer-data-[state=checked]:bg-primary/10 hover:bg-muted"
                      >
                        😐
                      </Label>
                      <span className="text-xs">Neutral</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <RadioGroupItem value="concerned" id="concerned" className="peer sr-only" />
                      <Label 
                        htmlFor="concerned" 
                        className="p-2 cursor-pointer rounded-full peer-data-[state=checked]:bg-primary/10 hover:bg-muted"
                      >
                        😕
                      </Label>
                      <span className="text-xs">Concerned</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <RadioGroupItem value="stressed" id="stressed" className="peer sr-only" />
                      <Label 
                        htmlFor="stressed" 
                        className="p-2 cursor-pointer rounded-full peer-data-[state=checked]:bg-primary/10 hover:bg-muted"
                      >
                        😫
                      </Label>
                      <span className="text-xs">Stressed</span>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">What would you like to share?</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={formState.mood === "stressed" ? 
                      "I understand you might be feeling stressed. Take your time, I'm here to listen." : 
                      "Your message here..."}
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className="resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-11 mt-4 flex items-center justify-center gap-2" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  I typically respond within 24-48 hours. Thank you for your patience.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-md bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-primary" />
              <span>Let's Connect</span>
            </CardTitle>
            <CardDescription>Here are different ways to reach me.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-background rounded-full p-3 shadow-sm">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground mb-1">contact@example.com</p>
                  <p className="text-sm text-muted-foreground">I check my email regularly and look forward to hearing from you.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-background rounded-full p-3 shadow-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground mb-1">New York, NY</p>
                  <p className="text-sm text-muted-foreground">Available for in-person meetings in the NYC area and remote collaboration worldwide.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-background rounded-full p-3 shadow-sm">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Availability</h3>
                  <p className="text-muted-foreground mb-1">Monday - Friday, 9am - 5pm EST</p>
                  <p className="text-sm text-muted-foreground">I'll do my best to accommodate your schedule for urgent matters.</p>
                </div>
              </div>
              
              <div className="pt-4 mt-4 border-t">
                <h3 className="font-medium mb-3">Connect with me</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0" asChild>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full h-10 w-10 p-0" asChild>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


