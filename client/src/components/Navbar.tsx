import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-serif text-2xl font-bold text-primary tracking-tight">
            Chestnut
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">How it Works</a>
          <a href="#calculator" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Savings</a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</a>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="font-medium">Sign In</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-medium px-6 shadow-md hover:shadow-lg transition-all">
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <a href="#how-it-works" className="text-lg font-medium">How it Works</a>
                <a href="#calculator" className="text-lg font-medium">Savings</a>
                <a href="#features" className="text-lg font-medium">Features</a>
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" className="w-full">Sign In</Button>
                  <Button className="w-full">Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
