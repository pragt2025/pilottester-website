import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Plane } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "For Companies" },
  { href: "#testimonials", label: "For Testers" },
  { href: "#pricing", label: "About Us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">
            Testers' Community
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost">Log In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>

        <div className="flex md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col h-full">
                    <nav className="grid gap-6 text-lg font-medium mt-6">
                        <Link
                        href="/"
                        className="flex items-center gap-2 text-lg font-semibold mb-4"
                        >
                        <Plane className="h-6 w-6 text-primary" />
                        <span>Testers' Community</span>
                        </Link>
                        {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </Link>
                        ))}
                    </nav>
                    <div className="mt-auto flex flex-col space-y-2">
                        <Button variant="ghost">Log In</Button>
                        <Button>Sign Up</Button>
                    </div>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
