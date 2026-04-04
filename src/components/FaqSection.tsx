import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto custa uma consulta?",
    a: "A primeira consulta é gratuita para entendermos seu caso e avaliarmos a melhor estratégia jurídica. Após essa análise inicial, apresentamos os honorários de forma transparente.",
  },
  {
    q: "Quais os prazos para resolver meu processo?",
    a: "Os prazos variam conforme a complexidade de cada caso, mas priorizamos a agilidade em todas as etapas. Na consulta inicial, informamos uma estimativa realista de tempo.",
  },
  {
    q: "Vocês atendem online?",
    a: "Sim, oferecemos consultas por videochamada para sua comodidade. Todo o acompanhamento do caso também pode ser feito de forma digital.",
  },
  {
    q: "Preciso ir ao escritório presencialmente?",
    a: "Não necessariamente. Todo o processo pode ser conduzido de forma digital, desde a consulta inicial até a resolução do caso, com total segurança e sigilo.",
  },
  {
    q: "Como funciona o sigilo profissional?",
    a: "Todos os dados dos nossos clientes são protegidos pela LGPD e pelo sigilo profissional previsto no Código de Ética da OAB. Sua privacidade é nossa prioridade.",
  },
];

const FaqSection = () => (
  <section id="faq" className="section-padding bg-background">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
        <p className="text-muted-foreground text-lg">Tire suas dúvidas sobre nossos serviços</p>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-xl border px-6 shadow-sm"
          >
            <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
