import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";

export default function SavingsCalculator() {
  const [loanAmount, setLoanAmount] = useState(450000);
  const [marketRate] = useState(7.1);
  const [chestnutRate] = useState(6.6); // 0.5% lower
  
  const calculateMonthlyPayment = (principal: number, rate: number) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = 30 * 12; // 30 years
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  };
  
  const marketPayment = calculateMonthlyPayment(loanAmount, marketRate);
  const chestnutPayment = calculateMonthlyPayment(loanAmount, chestnutRate);
  const monthlySavings = marketPayment - chestnutPayment;
  const lifetimeSavings = monthlySavings * 360; // 30 years
  
  const data = [
    { name: "Traditional Bank", rate: marketRate, payment: marketPayment },
    { name: "Chestnut AI", rate: chestnutRate, payment: chestnutPayment },
  ];

  return (
    <section id="calculator" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">See Your Potential Savings</h2>
          <p className="text-muted-foreground text-lg">
            Our AI agents find efficiencies that traditional banks miss. Adjust the loan amount to see how much you could save.
          </p>
        </div>
        
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <Card className="md:col-span-5 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-8">
              <CardTitle>Loan Details</CardTitle>
              <CardDescription>Adjust your mortgage parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-muted-foreground">Loan Amount</label>
                  <span className="text-xl font-bold font-serif text-primary">
                    ${loanAmount.toLocaleString()}
                  </span>
                </div>
                <Slider 
                  value={[loanAmount]} 
                  onValueChange={(vals) => setLoanAmount(vals[0])} 
                  min={100000} 
                  max={2000000} 
                  step={10000} 
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground px-1">
                  <span>$100k</span>
                  <span>$2M</span>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Market Average Rate</span>
                  <span className="font-bold">{marketRate}%</span>
                </div>
                <div className="flex justify-between items-center text-primary">
                  <span className="text-sm font-medium">Chestnut AI Rate</span>
                  <span className="font-bold bg-primary/10 px-2 py-1 rounded text-primary border border-primary/20">
                    {chestnutRate}%
                  </span>
                </div>
              </div>
              
              <div className="pt-6">
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 text-center">
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1 font-medium">Lifetime Savings</p>
                  <motion.div 
                    key={lifetimeSavings}
                    initial={{ scale: 0.9, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-serif font-bold text-primary"
                  >
                    ${Math.round(lifetimeSavings).toLocaleString()}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="md:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white/50">
                <CardContent className="pt-6">
                  <div className="text-sm text-muted-foreground mb-2">Monthly Payment</div>
                  <div className="text-2xl font-bold text-muted-foreground decoration-slate-400 line-through decoration-2">
                    ${Math.round(marketPayment).toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Traditional Bank</div>
                </CardContent>
              </Card>
              <Card className="border-primary/20 shadow-lg bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                <CardContent className="pt-6">
                  <div className="text-sm text-primary mb-2 font-medium">Chestnut Payment</div>
                  <div className="text-2xl font-bold text-primary">
                    ${Math.round(chestnutPayment).toLocaleString()}
                  </div>
                  <div className="text-xs text-secondary-foreground/70 mt-1 font-medium text-secondary">
                    Save ${Math.round(monthlySavings)}/mo
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="flex-1 border-0 shadow-lg p-6 bg-white/80">
               <h3 className="text-sm font-medium text-muted-foreground mb-6">Monthly Payment Comparison</h3>
               <div className="h-[250px] w-full">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={data} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
                     <XAxis type="number" hide />
                     <YAxis 
                       dataKey="name" 
                       type="category" 
                       axisLine={false} 
                       tickLine={false} 
                       width={100}
                       tick={{ fontSize: 12, fill: '#64748b' }} 
                     />
                     <Tooltip 
                        cursor={{fill: 'transparent'}}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                     />
                     <Bar dataKey="payment" radius={[0, 4, 4, 0]} barSize={40}>
                        {data.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 0 ? '#cbd5e1' : 'hsl(150, 40%, 25%)'} />
                        ))}
                     </Bar>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
