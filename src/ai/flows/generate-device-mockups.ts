'use server';
/**
 * @fileOverview Generates device mockups using AI to visualize a landing page on different devices.
 *
 * - generateDeviceMockups - A function that generates device mockups.
 * - GenerateDeviceMockupsInput - The input type for the generateDeviceMockups function.
 * - GenerateDeviceMockupsOutput - The return type for the generateDeviceMockups function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDeviceMockupsInputSchema = z.object({
  landingPageDescription: z
    .string()
    .describe('A description of the landing page to generate mockups for.'),
  deviceTypes: z
    .array(z.string())
    .describe('The types of devices to generate mockups for (e.g., phone, tablet, desktop).'),
});
export type GenerateDeviceMockupsInput = z.infer<typeof GenerateDeviceMockupsInputSchema>;

const GenerateDeviceMockupsOutputSchema = z.object({
  mockups: z.array(z.string()).describe('The generated device mockups as data URIs.'),
});
export type GenerateDeviceMockupsOutput = z.infer<typeof GenerateDeviceMockupsOutputSchema>;

export async function generateDeviceMockups(
  input: GenerateDeviceMockupsInput
): Promise<GenerateDeviceMockupsOutput> {
  return generateDeviceMockupsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDeviceMockupsPrompt',
  input: {schema: GenerateDeviceMockupsInputSchema},
  output: {schema: GenerateDeviceMockupsOutputSchema},
  prompt: `You are a marketing expert generating device mockups for a landing page.

  Based on the landing page description and device types, generate realistic mockups.

  Landing Page Description: {{{landingPageDescription}}}
  Device Types: {{#each deviceTypes}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Return the mockups as data URIs.
  `,
});

const generateDeviceMockupsFlow = ai.defineFlow(
  {
    name: 'generateDeviceMockupsFlow',
    inputSchema: GenerateDeviceMockupsInputSchema,
    outputSchema: GenerateDeviceMockupsOutputSchema,
  },
  async input => {
    const mockups: string[] = [];
    for (const deviceType of input.deviceTypes) {
      const {media} = await ai.generate({
        model: 'googleai/imagen-4.0-fast-generate-001',
        prompt: `Generate a realistic mockup of the landing page described as "${input.landingPageDescription}" on a ${deviceType}.`,
      });
      if (media) {
        mockups.push(media.url);
      }
    }

    return {mockups};
  }
);
