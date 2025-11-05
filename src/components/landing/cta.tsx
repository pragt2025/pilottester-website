import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Cta() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Launch?</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Sign up for our newsletter to get the latest updates, or create an account to start building today.
          </p>
          <div className="flex w-full max-w-sm mx-auto items-center space-x-2">
            <Input type="email" placeholder="Enter your email" />
            <Button type="submit" variant="default">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
