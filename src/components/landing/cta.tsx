import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-primary text-primary-foreground py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
          <p className="text-primary-foreground/80 md:text-xl/relaxed">
            Join our community of developers and testers today.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:text-primary">
              I'm a Company
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground border-primary-foreground/50">
              I'm a Tester
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
