import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Get your app tested by the right people
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground">
              Receive detailed feedback from real people and improve your product before launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#pricing">Get Started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#features">Become a Tester</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {heroImage && (
                <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-2xl"
                priority
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
