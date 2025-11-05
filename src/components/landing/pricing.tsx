import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "For individuals and small projects.",
    features: ["1 Project", "Basic Analytics", "Community Support"],
    cta: "Start for Free",
    isPrimary: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For growing teams and businesses.",
    features: ["10 Projects", "Advanced Analytics", "Priority Email Support", "Team Collaboration"],
    cta: "Choose Pro",
    isPrimary: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs.",
    features: ["Unlimited Projects", "Custom Integrations", "Dedicated Account Manager", "24/7 Support"],
    cta: "Contact Us",
    isPrimary: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing Plans</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find the Perfect Plan</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that's right for you. All plans come with a 14-day free trial.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-md items-stretch gap-8 mt-12 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col transition-all duration-300 hover:scale-105 ${plan.isPrimary ? "border-primary ring-2 ring-primary shadow-lg" : "hover:shadow-lg"}`}>
              <CardHeader className="pb-4">
                <CardTitle>{plan.name}</CardTitle>
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
