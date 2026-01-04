import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
             <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
               <Sparkles className="w-5 h-5 fill-current" />
             </div>
            <span className="font-sans text-xl font-bold text-foreground tracking-tight">
              Chestnut
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#rates" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Compare our Rates</a>
          <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Resources</a>
          <a href="#careers" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Careers</a>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
            Get your instant quote
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <a href="#rates" className="text-lg font-medium">Compare our Rates</a>
                <a href="#resources" className="text-lg font-medium">Resources</a>
                <a href="#careers" className="text-lg font-medium">Careers</a>
                <Button className="w-full rounded-full">Get your instant quote</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
