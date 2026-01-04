import { motion } from "framer-motion";
import { Trophy, Scissors, Siren, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Headline */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Why Choose Chestnut
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Why overpay when you can automate?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
             Most lenders charge you for their inefficiencies. We used technology to remove the bloat, so you keep your money.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-14 h-14 mb-6 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 border border-yellow-100">
              <Trophy className="w-7 h-7 fill-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Stop Guessing, Start Saving</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              Don't wonder if you got a good deal. Our AI scans 100+ lenders instantly to find the absolute lowest rate for your profile.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Real-time market scanning</span>
              </li>
              <li className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Instant pre-approval letters</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-14 h-14 mb-6 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 border border-pink-100">
              <Scissors className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Keep Your Cash</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              Banks charge junk fees to pay for their branches. We don't have branches. We slash origination fees so you bring less cash to closing.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>No origination fees</span>
              </li>
              <li className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Zero hidden markups</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-14 h-14 mb-6 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 border border-red-100">
              <Siren className="w-7 h-7 fill-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">Never Miss a Drop</h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
              Rates change daily. Our monitoring engine watches the market 24/7 and alerts you exactly when to lock to maximize savings.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>24/7 rate monitoring</span>
              </li>
              <li className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Smart lock alerts</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-semibold border-2 border-slate-200 hover:border-primary hover:text-primary hover:bg-white transition-all group shadow-sm hover:shadow-md">
            Compare our live rates vs. Banks
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
}
