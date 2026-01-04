import { motion } from "framer-motion";
import { Clock, Home, Star, Trophy, Scissors, Siren } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex flex-col items-center text-center gap-2"
          >
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Clock className="w-6 h-6 text-red-500 fill-red-100" />
              <span>&lt; 2 min.</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Instant quoting</p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="flex flex-col items-center text-center gap-2"
          >
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Home className="w-6 h-6 text-green-600 fill-green-100" />
              <span>$85B+</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Mortgages powered</p>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-col items-center text-center gap-2"
          >
            <div className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-100" />
              <span>5.0</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Google rating</p>
          </motion.div>
        </div>

        {/* Headline */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
          >
            Lower rates with Chestnut AI™
          </motion.h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 mb-6 text-yellow-500">
              <Trophy className="w-full h-full fill-yellow-100" />
            </div>
            <h3 className="text-xl font-bold mb-3">Your best deal</h3>
            <p className="text-muted-foreground leading-relaxed">
              Finds your best deal by comparing offers from 100+ lenders
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
            <div className="w-10 h-10 mb-6 text-pink-500">
              <Scissors className="w-full h-full -rotate-45" />
            </div>
            <h3 className="text-xl font-bold mb-3">Slashed fees</h3>
            <p className="text-muted-foreground leading-relaxed">
              Slashes your fees with cost-cutting automation
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
            <div className="w-10 h-10 mb-6 text-red-500">
              <Siren className="w-full h-full fill-red-100" />
            </div>
            <h3 className="text-xl font-bold mb-3">Rate monitoring</h3>
            <p className="text-muted-foreground leading-relaxed">
              Helps you lock at the right time with rate monitoring
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="secondary" size="lg" className="rounded-full px-8 h-14 text-base font-semibold bg-slate-100 hover:bg-slate-200 text-slate-900 group">
            See how our rates compare
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
}
