import aiVisual from "@assets/generated_images/abstract_ai_data_network_processing.png";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Connect Your Accounts",
    desc: "Securely link your financial accounts. Our AI instantly verifies income, assets, and credit history."
  },
  {
    number: "02",
    title: "Instant Underwriting",
    desc: "The Chestnut Engine analyzes your profile against thousands of lending criteria in real-time."
  },
  {
    number: "03",
    title: "Customize & Close",
    desc: "Review your custom rate options, sign digitally, and get funded in as little as 14 days."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-2xl"></div>
               <img 
                 src={aiVisual} 
                 alt="AI Processing" 
                 className="relative rounded-2xl shadow-2xl border border-white/10 w-full"
               />
               
               {/* Decorative floating UI elements */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="absolute top-10 -right-8 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-xl hidden md:block"
               >
                 <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center text-green-400 text-xs">✓</div>
                   <div className="text-sm font-medium">Income Verified</div>
                 </div>
                 <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                   <div className="bg-green-400 w-full h-full"></div>
                 </div>
               </motion.div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Built for Speed.<br/>Powered by Intelligence.</h2>
              <p className="text-white/70 text-lg max-w-md">
                We replaced the slow, manual bank process with intelligent agents that work 24/7 to get you the best deal.
              </p>
            </div>
            
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center font-serif text-xl font-bold text-secondary bg-white/5">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
