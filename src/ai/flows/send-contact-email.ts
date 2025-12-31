'use server';
/**
 * @fileOverview A flow for sending a contact form email using SendGrid.
 */
import { config } from 'dotenv';
config();

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import sgMail from '@sendgrid/mail';

const ContactFormSchema = z.object({
  name: z.string().describe('The name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  message: z.string().describe('The content of the message.'),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export async function sendContactEmail(
  input: ContactFormData
): Promise<{ success: boolean; message: string }> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormSchema,
    outputSchema: z.object({
      success: z.boolean(),
      message: z.string(),
    }),
  },
  async (input) => {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not set.');
      return {
        success: false,
        message: 'Server configuration error: Missing SendGrid API Key.',
      };
    }
    if (!process.env.SENDGRID_TO_EMAIL) {
        console.error('SENDGRID_TO_EMAIL is not set.');
        return {
          success: false,
          message: 'Server configuration error: Missing destination email.',
        };
      }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.SENDGRID_TO_EMAIL,
      from: {
        name: 'Pilot Testers Contact Form',
        email: 'noreply@sparkbrainai.com', // Use a verified sender email in your SendGrid account
      },
      replyTo: input.email,
      subject: `New Contact Form Submission: ${input.subject}`,
      html: `
        <p>You have a new message from the Pilot Testers contact form:</p>
        <ul>
          <li><strong>Name:</strong> ${input.name}</li>
          <li><strong>Email:</strong> ${input.email}</li>
          <li><strong>Subject:</strong> ${input.subject}</li>
        </ul>
        <p><strong>Message:</strong></p>
        <p>${input.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    try {
      await sgMail.send(msg);
      return { success: true, message: 'Email sent successfully.' };
    } catch (error: any) {
      console.error('SendGrid Error:', error.response?.body || error.message);
      return {
        success: false,
        message: 'There was an error sending your message. Please try again later.',
      };
    }
  }
);
