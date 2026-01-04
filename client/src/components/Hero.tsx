import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/abstract_3d_glass_house_financial_security.png";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32 bg-background grain">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-wider uppercase mb-6 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                The Future of Lending
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] text-primary">
                Your Mortgage, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Automated.</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Chestnut's AI agents handle the paperwork, negotiations, and processing. You save time and over <span className="text-primary font-bold">0.5% in interest</span>.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all rounded-full group">
                Start My Application
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-primary/20 text-primary hover:bg-primary/5 rounded-full">
                View Rates
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 flex items-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Close in 14 days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Bank-grade security</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-0"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass p-2 shadow-2xl shadow-primary/10 rotate-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
              <img 
                src={heroImage} 
                alt="AI Mortgage Protection" 
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/40 max-w-[200px] z-20"
              >
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Interest Saved</div>
                <div className="text-2xl font-bold text-primary">$45,200</div>
                <div className="w-full bg-gray-100 h-1 mt-2 rounded-full overflow-hidden">
                  <div className="bg-secondary w-[80%] h-full rounded-full"></div>
                </div>
              </motion.div>
            </div>
            
            {/* Background Decor */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
