import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Server, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: "Rapid Deployment",
    description: "Deploy your applications in seconds, not hours. Our streamlined process gets you to market faster.",
  },
  {
    icon: <Server className="w-10 h-10 text-primary" />,
    title: "Scalable Infrastructure",
    description: "From a small project to a large-scale enterprise, our infrastructure scales with your needs.",
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-primary" />,
    title: "Analytics & Insights",
    description: "Gain valuable insights into your application's performance with our built-in analytics dashboard.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Team Collaboration",
    description: "Work together with your team seamlessly. Manage permissions and collaborate on projects with ease.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Core Features</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need to Succeed</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Launchpad provides a comprehensive suite of tools to help you launch and grow your digital products.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4 mt-12">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="mt-4">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
