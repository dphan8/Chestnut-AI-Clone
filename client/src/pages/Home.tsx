import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SavingsCalculator from "@/components/SavingsCalculator";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        {/* Social Proof / Stats Section could go here for better flow, but Features has them too. */}
        <Features />
        <SavingsCalculator /> 
        <HowItWorks />
        <Testimonials />
        <FAQ />
        
        {/* CTA Section */}
        <section className="py-32 bg-primary relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Stop overpaying your mortgage.</h2>
            <p className="text-primary-foreground/90 text-xl mb-10 text-balance leading-relaxed">
              Join thousands who switched to Chestnut AI and saved an average of $45,000 over the life of their loan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-16 px-10 text-lg bg-white text-primary font-bold rounded-full shadow-2xl hover:bg-white/90 transition-all hover:-translate-y-1">
                Get Pre-Approved Now
              </button>
            </div>
             <p className="text-white/60 text-sm mt-6">
                No hard credit check required to see rates.
             </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
