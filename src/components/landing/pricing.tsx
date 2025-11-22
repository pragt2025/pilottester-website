import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Tester",
    price: "Free",
    period: "",
    description: "For individuals who want to test apps and earn rewards.",
    features: ["Access to exclusive betas", "Earn rewards for feedback", "Shape new products", "Community access"],
    cta: "Become a Tester",
    isPrimary: false,
  },
  {
    name: "Developer",
    price: "$49",
    period: "/project",
    description: "For indie developers and startups.",
    features: ["Up to 25 testers", "Detailed feedback reports", "Real device testing", "Email Support"],
    cta: "Start a Project",
    isPrimary: true,
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description: "For large teams and enterprises.",
    features: ["Unlimited testers", "Managed testing cycles", "Dedicated Account Manager", "API Access & Integrations"],
    cta: "Contact Us",
    isPrimary: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Pricing Plans</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find the Perfect Plan</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple, transparent pricing for every need. Get started today.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-md items-stretch gap-8 mt-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col transition-all duration-300 hover:scale-105 ${plan.isPrimary ? "border-primary ring-2 ring-primary shadow-lg bg-card" : "hover:shadow-lg bg-card"}`}>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <CardDescription className="pt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isPrimary ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
