import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Twitter, Sparkles, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-4">
        
        {/* Newsletter Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-2xl shadow-primary/20">
          <div className="max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay ahead of the market</h3>
            <p className="text-primary-foreground/80">
              Get weekly mortgage rate updates and home buying tips straight to your inbox.
            </p>
          </div>
          <div className="w-full max-w-md flex gap-2">
            <Input 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-full px-6 focus-visible:ring-white focus-visible:ring-offset-0"
            />
            <Button size="icon" className="h-12 w-12 rounded-full bg-white text-primary hover:bg-white/90 shrink-0">
              <Send className="w-5 h-5 ml-0.5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 text-white p-1.5 rounded-lg">
                <Sparkles className="w-5 h-5 fill-current" />
              </div>
              <span className="font-sans text-xl font-bold tracking-tight">
                Chestnut
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The AI-powered mortgage lender that works for you, not the banks. Automating the future of home ownership.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Savings Calculator</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Live Rates</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refinance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Licensing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2024 Chestnut Financial Technologies, Inc. NMLS #123456. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
