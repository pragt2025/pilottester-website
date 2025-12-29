import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CircleDollarSign, Send } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Join & Test",
    description: "Sign up and become part of a vibrant community. Start by testing apps from other developers to understand the process and provide valuable feedback.",
  },
  {
    icon: <CircleDollarSign className="w-8 h-8 text-primary" />,
    title: "Earn Credits",
    description: "For every app you test, you'll earn credits. Accumulate these credits in your account to spend on your own projects. It's a simple, reciprocal system.",
  },
  {
    icon: <Send className="w-8 h-8 text-primary" />,
    title: "Launch Your Test",
    description: "Use your earned credits to submit your app. Get matched with 10+ real testers to fulfill Google Play's 14-day requirement and launch with confidence.",
  },
];


export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">HOW IT WORKS</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Test To Launch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our platform is built on a simple, community-driven exchange. Test apps to earn credits, then use those credits to get your own app tested.
            </p>
          </div>
        </div>

        <div className="relative mt-16 max-w-5xl mx-auto">
            {/* The connecting line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-border hidden md:block" />

            <div className="space-y-16">
            {steps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col md:flex-row items-center gap-8">
                    {/* Circle on the line */}
                    <div className="absolute left-1/2 -translate-x-1/2 bg-background border-2 border-primary rounded-full h-8 w-8 hidden md:flex items-center justify-center">
                        <div className="bg-primary h-3 w-3 rounded-full"></div>
                    </div>
                    
                    <Card className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                        <CardHeader className="flex flex-row items-center gap-4">
                             <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center">
                                {step.icon}
                            </div>
                            <CardTitle>{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{step.description}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
            </div>
        </div>
        
        <div className="text-center mt-16">
          <Button asChild variant="accent" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
