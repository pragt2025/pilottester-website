import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Minus, Plus, User, Gem, Shield, Crown, BadgeInfo } from "lucide-react";

const pricingPlans = [
  {
    name: "Guest",
    icon: <User className="w-8 h-8" />,
    price: "Free",
    period: "",
    description: "With Ads",
    features: [
      "12 verified testers", 
      "Comprehensive report", 
      "14-day test window", 
      "24/7 customer supports (email or online)"
    ],
    cta: "Get Started",
    isPrimary: false,
    badge: "With Ads",
    badgeVariant: "destructive" as "destructive" | "default",
  },
  {
    name: "Gold",
    icon: <Shield className="w-8 h-8 text-orange-400" />,
    price: "$20",
    period: "/1 submission",
    description: "Ads Free",
    features: [
      "12 verified testers",
      "Comprehensive report",
      "14-day test window",
      "24/7 customer supports (email or online)",
    ],
    cta: "Upgrade Gold",
    isPrimary: false,
    badge: "Ads Free",
    badgeVariant: "default" as "destructive" | "default",
    borderColor: "border-orange-400"
  },
  {
    name: "Diamond",
    icon: <Gem className="w-8 h-8 text-purple-500" />,
    price: "$45",
    period: "/3 submission",
    description: "Ads Free",
    features: [
      "12 verified testers",
      "Comprehensive report",
      "14-day test window",
      "24/7 customer supports (email or online)",
    ],
    cta: "Upgrade Diamond",
    isPrimary: true,
    badge: "Ads Free",
    badgeVariant: "default" as "destructive" | "default",
    borderColor: "border-purple-500"
  },
  {
    name: "Platinum",
    icon: <Crown className="w-8 h-8 text-blue-500" />,
    price: "$90",
    period: "/5 submission",
    description: "Ads Free",
    features: [
      "12 verified testers",
      "Comprehensive report",
      "14-day test window",
      "24/7 customer supports (email or online)",
    ],
    cta: "Upgrade Platinium",
    isPrimary: false,
    badge: "Ads Free",
    badgeVariant: "default" as "destructive" | "default",
    borderColor: "border-blue-500"
  },
];

const CustomPackageBuilder = () => {
    return (
        <Card className="w-full max-w-4xl mx-auto border-2 border-primary/50 shadow-lg">
            <CardHeader>
                <div className="flex items-center gap-4">
                     <BadgeInfo className="w-8 h-8 text-primary"/>
                    <div>
                        <CardTitle className="text-xl">Build Your Custom Package</CardTitle>
                        <p className="text-muted-foreground text-sm">Adjust the number of applications to fit your needs</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <p className="font-medium">Number of Applications:</p>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="w-8 h-8">
                                <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-lg font-bold w-10 text-center">1</span>
                            <Button variant="outline" size="icon" className="w-8 h-8">
                                <Plus className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                         <div className="text-right">
                            <p className="text-2xl font-bold">Total Price: $20</p>
                            <p className="text-sm text-muted-foreground">$20 per application</p>
                        </div>
                        <Button size="lg">Purchase Package</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};


export function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Find the Perfect Plan</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Select the package that best fits your application testing needs
            </p>
          </div>
        </div>
        
        <div className="mt-12 mb-10">
            <CustomPackageBuilder />
        </div>

        <div className="text-center mb-12">
            <p className="text-muted-foreground font-semibold">OR CHOOSE A PRESET PACKAGE</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col h-full transition-all duration-300 hover:shadow-xl ${plan.isPrimary ? `border-2 ${plan.borderColor || 'border-primary'}` : plan.borderColor ? `border ${plan.borderColor}` : 'border'}`}>
              <CardHeader className="items-center pb-4">
                 <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-muted`}>
                   {plan.icon}
                </div>
                <p className="text-sm font-semibold text-muted-foreground">{plan.name}</p>
                <div className="mt-2 text-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                </div>
                {plan.badge && (
                    <div className={`mt-4 px-3 py-1 rounded-full text-xs font-semibold ${plan.badgeVariant === 'destructive' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                        {plan.description}
                    </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow pt-4">
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.isPrimary ? '' : plan.borderColor ? 'bg-transparent border ' + plan.borderColor : ''}`} variant={plan.isPrimary ? "default" : "outline"}>
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
