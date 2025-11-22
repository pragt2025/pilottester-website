import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, Smartphone, DollarSign, Search, Edit, Award } from "lucide-react";

const companyFeatures = [
  {
    icon: <Edit className="w-10 h-10 text-primary" />,
    title: "Create a test",
    description: "Create a test for your app or website and define the tasks you want the testers to perform.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Select your target audience",
    description: "Select your target audience based on their demographics, interests, and devices.",
  },
  {
    icon: <FileText className="w-10 h-10 text-primary" />,
    title: "Receive detailed feedback",
    description: "Receive detailed feedback, bug reports, and suggestions for improvement from our testers.",
  },
];

const testerFeatures = [
  {
    icon: <Search className="w-10 h-10 text-primary" />,
    title: "Browse projects",
    description: "Browse through a list of available testing projects and choose the ones that interest you.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: "Test apps & websites",
    description: "Test the apps and websites on your own devices and provide your honest feedback.",
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Get paid for your feedback",
    description: "Get paid for your time and effort. The amount you earn depends on the complexity of the test.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-primary-foreground bg-primary">How It Works</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">For Companies</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple and effective way to get feedback from your target audience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12 lg:max-w-none mt-12">
          {companyFeatures.map((feature) => (
            <Card key={feature.title} className="text-center h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-0 bg-transparent shadow-none">
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

        <div className="flex flex-col items-center justify-center space-y-4 text-center mt-24">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">For Testers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get paid to test apps and websites from the comfort of your home.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-3 md:gap-12 lg:max-w-none mt-12">
          {testerFeatures.map((feature) => (
            <Card key={feature.title} className="text-center h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-0 bg-transparent shadow-none">
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
