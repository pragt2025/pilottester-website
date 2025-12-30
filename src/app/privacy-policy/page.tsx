import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
            <div className="container py-12 md:py-20">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tighter mb-6">Privacy Policy</h1>
                    <div className="space-y-6 text-muted-foreground">
                        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                            <p>Welcome to Pilot Testers. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.</p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                            <p>We may collect information about you in a variety of ways. The information we may collect on the App includes:</p>
                            <ul className="list-disc list-inside pl-4 space-y-1">
                                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the App.</li>
                                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the App, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the App.</li>
                            </ul>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
                            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the App to:</p>
                             <ul className="list-disc list-inside pl-4 space-y-1">
                                <li>Create and manage your account.</li>
                                <li>Email you regarding your account or order.</li>
                                <li>Enable user-to-user communications.</li>
                                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the App.</li>
                            </ul>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">4. Disclosure of Your Information</h2>
                            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, business transfers, and with third-party service providers.</p>
                        </section>

                        <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">5. Security of Your Information</h2>
                            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                        </section>

                         <section className="space-y-2">
                            <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
                            <p>If you have questions or comments about this Privacy Policy, please contact us at: [Contact Email]</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}
