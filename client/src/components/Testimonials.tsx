import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "First-time Homebuyer",
    quote: "I was overwhelmed by the bank's paperwork. Chestnut's AI handled everything instantly. I saved $450/month compared to my other quote.",
    initials: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Refinancing",
    quote: "The speed is unreal. I uploaded my docs and had a verified approval in 20 minutes. Closed in 12 days. The rate was unbeatable.",
    initials: "MC"
  },
  {
    name: "Elena Rodriguez",
    role: "Real Estate Investor",
    quote: "I've done 10+ mortgages. This was by far the easiest. No chasing loan officers, no missing emails. Just efficient execution.",
    initials: "ER"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
            Trusted by modern homeowners
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-lg">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border/50 shadow-lg shadow-slate-200/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-8 px-8 pb-8 flex flex-col gap-6">
                <Quote className="w-10 h-10 text-primary/20 fill-primary/10" />
                <p className="text-lg text-foreground/80 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto border-t border-border/40 pt-6">
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold">{t.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
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
