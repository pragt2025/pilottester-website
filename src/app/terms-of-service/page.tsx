import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
            <div className="container py-12 md:py-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tighter mb-6">Terms of Service</h1>
                    <div className="space-y-6 text-muted-foreground">
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
                            <p>By accessing and using Pilot Testers (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this particular service, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.</p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">2. User Responsibilities</h2>
                            <p>You are responsible for your own communications and for any consequences thereof. You will use the Service in compliance with all applicable local, state, national, and international laws, rules and regulations. You agree not to use the Service to upload, post, email, transmit or otherwise make available any content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable.</p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">3. Intellectual Property</h2>
                            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Pilot Testers and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Pilot Testers.</p>
                        </section>

                         <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">4. Termination</h2>
                            <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">5. Disclaimer of Warranties</h2>
                            <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
                            <p>In no event shall Pilot Testers, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">7. Contact Us</h2>
                            <p>If you have any questions about these Terms, please contact us at: [Contact Email]</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}
