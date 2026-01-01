'use client';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

const navLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">
            Pilot Testers
          </span>
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-end gap-6">
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
            <ThemeToggle />
            <Button asChild variant="ghost">
              <a href="https://dev-app.pilottesters.com/#/login" target="_blank" rel="noopener noreferrer">Login</a>
            </Button>
            <Button asChild>
              <a href="https://dev-app.pilottesters.com/#/signup" target="_blank" rel="noopener noreferrer">Sign Up</a>
            </Button>
          </div>
        </div>

        <div className="flex flex-1 justify-end md:hidden">
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
                        <Rocket className="h-6 w-6 text-primary" />
                        <span>Pilot Testers</span>
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
                        <div className="flex justify-center mb-4">
                          <ThemeToggle />
                        </div>
                        <Button asChild variant="ghost">
                            <a href="https://dev-app.pilottesters.com/#/login" target="_blank" rel="noopener noreferrer">Login</a>
                        </Button>
                        <Button asChild>
                            <a href="https://dev-app.pilottesters.com/#/signup" target="_blank" rel="noopener noreferrer">Sign Up</a>
                        </Button>
                    </div>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
