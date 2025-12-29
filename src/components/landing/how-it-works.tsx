import { Button } from "@/components/ui/button";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-accent/10 text-accent px-3 py-1 text-sm font-medium">HOW IT WORKS</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">From Test To Launch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Earn credits by testing apps to unlock your own 14-day closed test. Join our community to satisfy Google Play requirements and reach production faster.
            </p>
          </div>
          <Button variant="accent" className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">Join The Community</Button>
        </div>

        {/* Timeline Graphic */}
        <div className="relative mt-20">
          {/* Wavy line */}
          <svg width="100%" height="150" viewBox="0 0 1100 150" preserveAspectRatio="none" className="absolute top-0 left-0">
            <path d="M0 50 Q 275 150, 550 50 T 1100 50" stroke="#FF8A65" strokeWidth="3" fill="none" strokeDasharray="5,5" />
          </svg>
          
          <div className="relative flex justify-between w-full">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-1/3 text-center">
              <div className="bg-white border-2 border-accent rounded-full h-8 w-8 flex items-center justify-center z-10">
                <div className="bg-accent h-4 w-4 rounded-full"></div>
              </div>
              <div className="absolute top-[-50px] left-[calc(16.66%-30px)]">
                <div className="text-8xl font-bold text-gray-200/50 -z-10">1</div>
              </div>
              <h3 className="mt-12 font-semibold">Join & Test</h3>
              <p className="text-sm text-muted-foreground mt-1">Join the platform and help test other developers' apps by completing quick testing steps.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center w-1/3 text-center">
              <div className="bg-white border-2 border-accent rounded-full h-8 w-8 flex items-center justify-center z-10">
                 <div className="bg-accent h-4 w-4 rounded-full"></div>
              </div>
              <div className="absolute top-[30px] left-1/2 -translate-x-1/2">
                 <div className="text-8xl font-bold text-gray-200/50 -z-10">2</div>
              </div>
              <h3 className="mt-4 font-semibold">Earn Credits</h3>
              <p className="text-sm text-muted-foreground mt-1">Every app you test earns you credits, which you can save and use later.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center w-1/3 text-center">
              <div className="bg-white border-2 border-accent rounded-full h-8 w-8 flex items-center justify-center z-10">
                <div className="bg-accent h-4 w-4 rounded-full"></div>
              </div>
               <div className="absolute top-[-50px] right-[calc(16.66%-30px)]">
                <div className="text-8xl font-bold text-gray-200/50 -z-10">3</div>
              </div>
              <h3 className="mt-12 font-semibold">Test Your App</h3>
              <p className="text-sm text-muted-foreground mt-1">Use your credits to get 10+ real testers for your app and move closer to Play Store approval.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
