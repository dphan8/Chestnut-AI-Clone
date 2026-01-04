import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/fintech_mortgage_dashboard_ui_mockup.png";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-32 bg-background">
      {/* Subtle Background Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.05]">
                Secure a Mortgage <br />
                <span className="text-primary">0.5% Cheaper</span> with AI Automation.
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-lg font-medium leading-relaxed text-balance"
            >
              Chestnut's AI scans 100+ lenders to cut your rate by 0.5%—saving you thousands automatically.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <Button size="lg" className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all rounded-full">
                Get your instant quote
              </Button>
              <p className="text-sm text-muted-foreground pl-6">
                Takes less than 2 minutes • No hard credit check
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 flex items-center gap-3"
            >
               {/* Google Logo Mock */}
              <div className="w-6 h-6 rounded-full bg-white border flex items-center justify-center font-bold text-[10px] text-blue-500 shadow-sm">G</div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="font-semibold text-foreground ml-1">5.0 rating based on 2,400+ reviews</span>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* SaaS Dashboard Mockup */}
            <div className="relative w-full max-w-[600px] aspect-[4/3] rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-100 ring-1 ring-slate-900/5 transition-all hover:scale-[1.02] duration-500">
                <img 
                    src={heroImage} 
                    alt="Chestnut AI Dashboard" 
                    className="w-full h-full object-cover object-top"
                />
                
                {/* Floating "Success" notification */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-green-100 max-w-[240px] z-20 flex gap-3 items-center"
                >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Star className="w-5 h-5 fill-green-600" />
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Rate Secured</div>
                        <div className="text-lg font-bold text-green-700">6.125% APR</div>
                    </div>
                </motion.div>
            </div>
            
            {/* Decoration Circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
