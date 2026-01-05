import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Zap, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "1. Connect Accounts",
    desc: "Link your financial accounts in seconds. No uploading PDFs or chasing down bank statements.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "2. AI Analysis",
    desc: "Our AI underwriter verifies your income and assets instantly, identifying your best loan programs.",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "3. Instant Approval",
    desc: "Get a verified pre-approval letter that's as good as cash. Close in as little as 14 days.",
    color: "bg-green-100 text-green-600"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Connecting Line (Desktop) */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200/60 -translate-y-12 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            From application to approval in minutes
          </h2>
          <p className="text-lg text-muted-foreground">
            We stripped away the manual work. You get a faster, smoother experience without the headache.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-primary/20">
            Start your application
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            No impact on your credit score to check rates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
