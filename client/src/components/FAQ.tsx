import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Chestnut save me money?",
    answer: "Traditional banks have huge overheads (branches, manual underwriters). We use AI to automate the processing and underwriting, cutting our costs by 80%. We pass those savings directly to you in the form of lower interest rates—typically 0.5% lower than the national average."
  },
  {
    question: "Is my personal data secure?",
    answer: "Absolutely. We use bank-grade 256-bit encryption for all data. We are SOC2 compliant and never sell your personal information to third-party marketers. Your data is used solely to secure your mortgage."
  },
  {
    question: "How fast can I close?",
    answer: "Because our AI agents handle document verification instantly, we can clear loans to close in as little as 14 days. Traditional lenders often take 30-45 days."
  },
  {
    question: "Do I still talk to a human?",
    answer: "Yes! While AI handles the heavy lifting and paperwork, you have a dedicated Mortgage Expert to guide you through strategy and answer complex questions whenever you need them."
  },
  {
    question: "What credit score do I need?",
    answer: "We work with a wide range of credit profiles. Generally, a score of 620+ is required for most conventional loans, but our AI can analyze your specific situation to find the best program for you."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about the AI mortgage process.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-border px-6 rounded-xl data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
