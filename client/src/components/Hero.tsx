import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/abstract_3d_glass_house_financial_security.png";
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
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[1.05]">
                Low rates, <br />
                <span className="text-primary">5-star service</span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-lg font-medium leading-relaxed text-balance"
            >
              Our team helps find your best option. <br className="hidden md:block"/>
              <span className="text-foreground font-semibold">AI cuts the rate 0.5%+.</span>
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
                Takes less than 2 minutes
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
              <span className="font-semibold text-foreground ml-1">5.0 rating</span>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Elevated 3D Visual instead of flat vector */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border border-slate-100 ring-1 ring-slate-900/5 p-4">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/50 to-transparent z-0"></div>
                
                {/* Image Content */}
                <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-slate-50">
                    <img 
                        src={heroImage} 
                        alt="AI Mortgage Protection" 
                        className="w-full h-full object-cover mix-blend-multiply opacity-90 scale-110 hover:scale-100 transition-transform duration-1000 ease-out"
                    />
                    
                    {/* Floating UI Elements matching the "Success" vibe of the original illustration */}
                    <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 z-20"
                    >
                        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </motion.div>
                </div>
            </div>
            
            {/* Decoration Circles */}
            <div className="absolute top-1/2 right-0 w-4 h-4 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="absolute top-1/3 left-10 w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0.5s]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
