import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Cta() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 md:text-xl/relaxed">
            Join the community today. Sign up as a developer to get feedback, or as a tester to discover new apps.
          </p>
          <div className="flex w-full max-w-sm mx-auto items-center space-x-2">
            <Input type="email" placeholder="Enter your email" className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20 focus-visible:ring-primary-foreground" />
            <Button type="submit" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary">Sign Up</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
