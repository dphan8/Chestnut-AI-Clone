export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">Chestnut</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              The AI-powered mortgage lender that works for you, not the banks. Automating the future of home ownership.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Savings Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refinance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licensing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60">
            © 2024 Chestnut Financial Technologies, Inc. NMLS #123456. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholders */}
            <div className="w-5 h-5 bg-primary-foreground/20 rounded-full"></div>
            <div className="w-5 h-5 bg-primary-foreground/20 rounded-full"></div>
            <div className="w-5 h-5 bg-primary-foreground/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
