import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ContactForm } from "@/components/landing/contact-form";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Have a question or want to work with us? Drop us a line.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold">Get in Touch</h2>
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
                      <h3 className="font-semibold">Email</h3>
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
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
