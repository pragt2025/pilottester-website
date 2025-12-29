import Link from "next/link";
import Image from "next/image";
import { Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold">Pilot Tester</span>
            </div>
            <p className="text-sm text-muted-foreground">Helping developers reach Google Play production with community-powered testing.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4">About us</Link>
              <Link href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4 text-primary font-medium">Contact us</Link>
              <Link href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4">Careers</Link>
              <Link href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4">Press</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4">Terms & Conditions</Link>
              <Link href="#" className="hover:text-foreground transition-colors hover:underline underline-offset-4">Return Policy</Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Download Our App</h3>
            <Link href="#" className="inline-block">
                <Image src="/google-play-badge.png" alt="Download on Google Play" width={160} height={48} />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pilot Tester. All Right Reserved.
        </div>
      </div>
    </footer>
  );
}
