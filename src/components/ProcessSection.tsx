import { MessageSquare, Search, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, step: "01", title: "Consulta Gratuita", desc: "Você explica sua situação e tiramos todas as dúvidas" },
  { icon: Search, step: "02", title: "Análise Jurídica", desc: "Estudamos as melhores soluções para o seu caso" },
  { icon: CheckCircle, step: "03", title: "Solução Personalizada", desc: "Atuamos estrategicamente para resolver seu caso" },
];

const ProcessSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Como Funciona</h2>
        <p className="text-muted-foreground text-lg">Três passos simples para iniciar sua jornada jurídica</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-border" />

        {steps.map((s) => (
          <div key={s.step} className="text-center relative">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center relative z-10">
              <s.icon className="text-primary-foreground" size={28} />
            </div>
            <span className="text-accent font-heading font-bold text-sm tracking-widest">{s.step}</span>
            <h3 className="font-heading text-xl font-semibold text-foreground mt-2 mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
