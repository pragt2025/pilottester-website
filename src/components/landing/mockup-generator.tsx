'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { generateDeviceMockups, type GenerateDeviceMockupsOutput } from '@/ai/flows/generate-device-mockups';
import { Loader2 } from 'lucide-react';
import { Separator } from '../ui/separator';

const deviceTypes = [
  { id: 'phone', label: 'Phone' },
  { id: 'tablet', label: 'Tablet' },
  { id: 'desktop', label: 'Desktop' },
] as const;

const formSchema = z.object({
  landingPageDescription: z.string().min(20, 'Please provide a more detailed description (at least 20 characters).'),
  deviceTypes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one device type.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function MockupGenerator() {
  const [mockups, setMockups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      landingPageDescription: '',
      deviceTypes: ['phone', 'desktop'],
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setMockups([]);
    try {
      const result: GenerateDeviceMockupsOutput = await generateDeviceMockups(data);
      setMockups(result.mockups);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to generate mockups. The AI model may be unavailable. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-mockups" className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-2 mb-12">
            <div className="inline-block rounded-lg bg-primary/10 text-primary px-3 py-1 text-sm font-medium">AI Mockup Generator</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Visualize Your Vision</h2>
            <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Use our generative AI to create stunning device mockups for your landing page concept. See your ideas come to life on various screen sizes instantly.
            </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg border-border/50">
          <CardHeader>
            <CardTitle>Generate Device Mockups</CardTitle>
            <CardDescription>Describe your app or website and let AI create mockups for you.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="landingPageDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Landing Page Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., A clean and modern landing page for a new productivity app with a dark theme and a prominent sign-up button."
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deviceTypes"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel>Device Types</FormLabel>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        {deviceTypes.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="deviceTypes"
                            render={({ field }) => (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(field.value?.filter((value) => value !== item.id));
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{item.label}</FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Generate Mockups
                </Button>
              </form>
            </Form>

            {(isLoading || mockups.length > 0) && (
                <Separator className="my-8" />
            )}

            {isLoading && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {form.getValues('deviceTypes').map((type) => (
                  <div key={type} className="flex flex-col items-center gap-4">
                    <div className="w-full aspect-[3/4] bg-muted rounded-lg flex items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground"/>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground capitalize">{type}</p>
                  </div>
                ))}
              </div>
            )}
            
            {mockups.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6 text-center">Generated Mockups</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {mockups.map((mockup, index) => (
                    <div key={index} className="relative aspect-[3/4] w-full bg-muted rounded-lg overflow-hidden ring-1 ring-border">
                       <Image
                        src={mockup}
                        alt={`Generated mockup ${index + 1}`}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                       />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
