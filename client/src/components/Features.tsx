import { motion } from "framer-motion";
import { Clock, ShieldCheck, TrendingDown, Bot } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "AI Underwriting",
    description: "Our agents process thousands of data points in seconds, not weeks, to approve your loan faster."
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Lower Rates",
    description: "By automating overhead costs, we pass the savings directly to you—averaging 0.5% lower rates."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "14-Day Close",
    description: "Move into your dream home sooner. Our streamlined process cuts closing time in half."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Bank-Grade Security",
    description: "Your financial data is protected by enterprise-level encryption and privacy protocols."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
