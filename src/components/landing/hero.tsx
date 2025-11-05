import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover -z-10 brightness-50"
          priority
        />
      )}
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Get Quality Feedback from Real Users
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Pilot Testers connects you with a community of passionate testers to improve your app before launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="#pricing">Find Testers</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
              <Link href="#features">Become a Tester</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
