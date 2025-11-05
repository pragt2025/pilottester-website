import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: "Sarah Doe",
    title: "CEO, Innovate Inc.",
    quote: "Launchpad has been a game-changer for our team. The ability to deploy and manage our applications so easily has boosted our productivity by 50%. Highly recommended!",
  },
  {
    id: 'testimonial-2',
    name: "John Smith",
    title: "Lead Developer, Tech Solutions",
    quote: "I've used many platforms, but Launchpad stands out for its simplicity and power. The developer experience is second to none.",
  },
  {
    id: 'testimonial-3',
    name: "Jane Roe",
    title: "Founder, Creative Co.",
    quote: "As a non-technical founder, Launchpad gave me the confidence to manage my app's backend without a steep learning curve. It's incredibly intuitive!",
  },
];

export function Testimonials() {
  const images = PlaceHolderImages;

  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from satisfied customers who have transformed their workflow with Launchpad.
            </p>
          </div>
        </div>
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
                const image = images.find(img => img.id === testimonial.id);
                return (
                  <CarouselItem key={testimonial.name} className="md:basis-1/2">
                    <div className="p-4 h-full">
                      <Card className="h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col justify-between flex-grow">
                            <blockquote className="text-lg italic text-muted-foreground mb-6">"{testimonial.quote}"</blockquote>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
