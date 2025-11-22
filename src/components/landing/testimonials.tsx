import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: "Sarah Doe",
    title: "Indie Developer",
    quote: "Pilot Testers was invaluable for my app launch. I received high-quality, actionable feedback from real users within days. It helped me catch critical bugs I would have otherwise missed.",
  },
  {
    id: 'testimonial-2',
    name: "John Smith",
    title: "Passionate Tester",
    quote: "I love being able to test new apps before they're released. It's exciting to help developers and see my feedback make a real impact on the final product. Plus, the rewards are great!",
  },
  {
    id: 'testimonial-3',
    name: "Jane Roe",
    title: "Product Manager, Tech Startup",
    quote: "The diversity of the tester community on Pilot Testers is amazing. We got insights from users on different devices and with different tech skills, which was crucial for our product's success.",
  },
];

export function Testimonials() {
  const images = PlaceHolderImages;

  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Community Says</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from developers and testers who are part of the Pilot Testers community.
            </p>
          </div>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
                const image = images.find(img => img.id === testimonial.id);
                return (
                  <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                      <Card className="h-full flex flex-col bg-secondary">
                        <CardContent className="p-6 flex flex-col justify-between flex-grow">
                            <blockquote className="text-lg italic text-foreground/80 mb-6">"{testimonial.quote}"</blockquote>
                            <div className="flex items-center gap-4">
                                <Avatar className="w-12 h-12">
                                    {image && (
                                        <AvatarImage src={image.imageUrl} alt={image.description} data-ai-hint={image.imageHint} />
                                    )}
                                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                </div>
                            </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
