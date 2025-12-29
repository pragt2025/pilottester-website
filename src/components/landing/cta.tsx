import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-background text-foreground py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Looking to complete Google Play testing with ease?</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Easily find 12 real testers and complete the full 14-day Google Play testing period quickly, without any delays or hassle.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="accent" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Testing Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
