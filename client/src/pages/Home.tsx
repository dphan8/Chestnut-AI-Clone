import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SavingsCalculator from "@/components/SavingsCalculator";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <SavingsCalculator />
        
        {/* CTA Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">Ready to secure your future?</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Join thousands of homeowners who saved time and money with Chestnut. No obligation, just better rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-14 px-8 text-lg bg-primary text-white font-medium rounded-full shadow-xl hover:bg-primary/90 transition-all">
                Get Pre-Approved
              </button>
              <button className="h-14 px-8 text-lg bg-white border border-input text-primary font-medium rounded-full hover:bg-gray-50 transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
