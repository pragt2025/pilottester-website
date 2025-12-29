import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-dashboard');

  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 bg-[#6E3AFF] text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              14 Days. Real Testers. Ready To Publish
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl text-primary-foreground/80">
              Connect with real developers to variable Google Play's 14-day testing requirement and move to production with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg" variant="accent" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="#pricing">Get Started</Link>
              </Button>
              <Link href="#" className="inline-block">
                <Image src="/google-play-badge.png" alt="Download on Google Play" width={160} height={48} />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            {heroImage && (
                <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={400}
                height={700}
                className="rounded-t-xl object-contain object-top shadow-2xl"
                priority
                />
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full leading-[0]">
        <svg viewBox="0 0 1440 112" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 64.2857C360 142.857 720 0 1440 64.2857V112H0V64.2857Z" fill="hsl(var(--background))"></path>
        </svg>
      </div>
    </section>
  );
}
