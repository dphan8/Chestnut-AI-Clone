import { Star, Quote, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "First-time Homebuyer",
    quote: "I was overwhelmed by the bank's paperwork. Chestnut's AI handled everything instantly. I saved $450/month compared to my other quote.",
    initials: "SJ",
    verified: true
  },
  {
    name: "Michael Chen",
    role: "Refinancing",
    quote: "The speed is unreal. I uploaded my docs and had a verified approval in 20 minutes. Closed in 12 days. The rate was unbeatable.",
    initials: "MC",
    verified: true
  },
  {
    name: "Elena Rodriguez",
    role: "Real Estate Investor",
    quote: "I've done 10+ mortgages. This was by far the easiest. No chasing loan officers, no missing emails. Just efficient execution.",
    initials: "ER",
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Trusted by modern homeowners
          </h2>
          <div className="flex justify-center items-center gap-3 mb-4 bg-slate-50 inline-flex px-4 py-2 rounded-full border border-slate-100">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-sm text-foreground">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border/60 shadow-lg shadow-slate-200/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
              <CardContent className="pt-8 px-8 pb-8 flex flex-col gap-6 h-full">
                <Quote className="w-10 h-10 text-primary/10 fill-primary/5" />
                <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto border-t border-border/40 pt-6">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white font-bold">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-sm flex items-center gap-1.5">
                      {t.name}
                      {t.verified && <CheckCircle className="w-3.5 h-3.5 text-primary fill-primary/10" />}
                    </div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
