import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: "Sultan Haider",
    title: "CEO, Euroman",
    quote: "Cum salutatus scribentur. Eos quodsi dolores ex, qui iudico placerat, facete possim.",
  },
  {
    id: 'testimonial-2',
    name: "Brian Edison",
    title: "CEO, Universal",
    quote: "Accusannes et justo odio dignissim qui blandit praesentium, te nam utinam iisque.",
  },
  {
    id: 'testimonial-3',
    name: "Brian Edison",
    title: "CEO, Universal",
    quote: "Accusannes et justo odio dignissim qui blandit praesentium, te nam utinam iisque.",
  },
];

export function Testimonials() {
    const images = PlaceHolderImages;

  return (
    <section id="testimonials" className="py-12 md:py-24 lg:py-32 bg-background relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-no-repeat bg-right-top" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"719\" height=\"778\" viewBox=\"0 0 719 778\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M-112.5 778C89.5 700.5 457.5 678.5 613 429.5C768.5 180.5 526 -134.5 -112.5 -134.5V778Z\" fill=\"%23F3F4FF\"/%3E%3C/svg%3E')", zIndex: 0 }}></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-accent/10 text-accent px-3 py-1 text-sm font-medium">TESTIMONIALS</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted By Developers</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Final feedback from the community making app launches easier, one test at a time.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
            {testimonials.map((testimonial, index) => {
                const image = images.find(img => img.id === testimonial.id);
                return (
                    <Card key={index} className="bg-background shadow-lg rounded-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                </div>
                                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white">
                                    <Quote className="w-6 h-6" />
                                </div>
                            </div>
                            <blockquote className="text-foreground/80 mb-6">"{testimonial.quote}"</blockquote>
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
                );
            })}
        </div>
      </div>
    </section>
  );
}
