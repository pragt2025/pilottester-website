import Link from "next/link";
import Image from "next/image";
import { Rocket, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold">Pilot Testers</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
              <Link href="/how-it-works" className="hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                About Us
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </nav>
            <div className="flex items-center gap-4">
                <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                </Link>
                <Link href="#" className="inline-flex items-center">
                  <Image src="https://res.cloudinary.com/doqakk4b7/image/upload/v1766983070/Play_Store_vobsl0.png" alt="Download on Google Play" width={130} height={40} />
                </Link>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pilot Testers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
