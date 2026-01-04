import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
             <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:rotate-12 transition-transform shadow-md shadow-primary/20">
               <Sparkles className="w-5 h-5 fill-current" />
             </div>
            <span className="font-sans text-xl font-bold text-foreground tracking-tight">
              Chestnut
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#rates" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md">Compare our Rates</a>
          <a href="#resources" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md">Resources</a>
          <a href="#careers" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:bg-primary/5 px-3 py-2 rounded-md">Careers</a>
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all">
            Get your instant quote
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/5">
                <Menu className="h-6 w-6 text-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2 mb-8">
                  <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                    <Sparkles className="w-5 h-5 fill-current" />
                  </div>
                  <span className="font-sans text-xl font-bold text-foreground tracking-tight">
                    Chestnut
                  </span>
                </div>
                
                <div className="flex flex-col gap-2">
                  <a href="#rates" onClick={() => setIsOpen(false)} className="text-lg font-medium p-3 hover:bg-muted rounded-lg transition-colors flex justify-between items-center group">
                    Compare our Rates
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </a>
                  <a href="#resources" onClick={() => setIsOpen(false)} className="text-lg font-medium p-3 hover:bg-muted rounded-lg transition-colors flex justify-between items-center group">
                    Resources
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </a>
                  <a href="#careers" onClick={() => setIsOpen(false)} className="text-lg font-medium p-3 hover:bg-muted rounded-lg transition-colors flex justify-between items-center group">
                    Careers
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </a>
                </div>
                
                <div className="mt-auto pb-8">
                  <Button className="w-full rounded-full h-12 text-lg shadow-lg" onClick={() => setIsOpen(false)}>
                    Get your instant quote
                  </Button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Takes less than 2 minutes
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
