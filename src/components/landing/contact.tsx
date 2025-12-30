import { ContactForm } from "@/components/landing/contact-form";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Have a question or want to work with us? Drop us a line.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">Get in Touch</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team is here to help. Reach out and we'll get back to you as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:support@pilottesters.com" className="text-muted-foreground hover:text-primary transition-colors">
                      support@pilottesters.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">(123) 456-7890</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
