import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Smartphone, DollarSign } from "lucide-react";

const features = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Diverse Tester Pool",
    description: "Access a global community of testers from various backgrounds and demographics to get diverse feedback.",
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Detailed Feedback",
    description: "Receive structured bug reports, usability feedback, and detailed suggestions to improve your product.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Real-Device Testing",
    description: "Get your app tested on a wide range of real devices to ensure compatibility and performance.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-primary" />,
    title: "Earn Rewards",
    description: "As a tester, get rewarded for your time and effort by helping shape the future of new apps.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">A Platform for Developers and Testers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you're looking to improve your app or want to test new products, Pilot Testers has you covered.
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
