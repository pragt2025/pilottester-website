import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TestTube, Shuffle, Star, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <TestTube className="w-8 h-8 text-primary" />,
    title: "Test to Earn",
    description: "Earn virtual credits by participating in tests for fellow developers. Use your accumulated balance to launch and list your own app for testing.",
  },
  {
    icon: <Shuffle className="w-8 h-8 text-primary" />,
    title: "Automatic Matching",
    description: "Get matched with a community of 12-20 genuine testers instantly. Effortlessly satisfy the 12-tester requirement for personal developer accounts.",
  },
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Actionable Feedback",
    description: "Receive structured bug reports and usability notes from real users. Improve your app's quality before it reaches the production stage.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: "Live Progress Tracking",
    description: "Monitor your 14-day continuous testing progress via a real-time dashboard. Stay informed on tester activity and test days elapsed at a glance.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-accent/10 text-accent px-3 py-1 text-sm font-medium">FOR DEVELOPERS</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Testing And Feedback, Made Simple</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {features.map((feature) => (
            <Card key={feature.title} className="text-left h-full flex flex-col border-0 bg-transparent shadow-none p-4">
              <CardHeader className="p-0">
                <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                </div>
                <CardTitle className="mt-2 text-lg font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
