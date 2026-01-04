import { motion } from "framer-motion";
import { Trophy, Scissors, Siren, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Headline */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6"
          >
            Why overpay when you can automate?
          </motion.h2>
          <p className="text-lg text-muted-foreground">
             Most lenders charge you for their inefficiencies. We used technology to remove the bloat, so you keep your money.
          </p>
        </div>

        {/* Feature Cards - Updated with "Painkiller" Copy */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-6 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600">
              <Trophy className="w-6 h-6 fill-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Stop Guessing, Start Saving</h3>
            <p className="text-muted-foreground leading-relaxed">
              Don't wonder if you got a good deal. Our AI scans 100+ lenders instantly to find the absolute lowest rate for your profile.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-6 bg-pink-100 rounded-2xl flex items-center justify-center text-pink-600">
              <Scissors className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Keep Your Cash</h3>
            <p className="text-muted-foreground leading-relaxed">
              Banks charge junk fees to pay for their branches. We don't have branches. We slash origination fees so you bring less cash to closing.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-6 bg-red-100 rounded-2xl flex items-center justify-center text-red-600">
              <Siren className="w-6 h-6 fill-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Never Miss a Drop</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rates change daily. Our monitoring engine watches the market 24/7 and alerts you exactly when to lock to maximize savings.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base font-semibold border-2 border-slate-200 hover:border-primary hover:text-primary hover:bg-white transition-all group">
            Compare our live rates vs. Banks
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
}
