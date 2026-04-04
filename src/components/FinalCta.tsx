import { ShieldCheck, Clock, Lock } from "lucide-react";

const guarantees = [
  { icon: Lock, label: "Confidencial" },
  { icon: ShieldCheck, label: "Sem custo inicial" },
  { icon: Clock, label: "Retorno em 24h" },
];

const FinalCta = () => (
  <section className="section-padding bg-primary text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Sua consulta inicial pode mudar o rumo do seu caso
      </h2>
      <p className="text-primary-foreground/80 text-lg mb-8">
        Fale agora com uma especialista e tire suas dúvidas sem compromisso
      </p>
      <a href="#contato" className="btn-gold inline-block mb-8 animate-pulse-subtle">
        Agendar Consulta Gratuita
      </a>
      <div className="flex flex-wrap justify-center gap-6">
        {guarantees.map((g) => (
          <div key={g.label} className="flex items-center gap-2 text-primary-foreground/70">
            <g.icon size={16} className="text-accent" />
            <span className="text-sm">{g.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FinalCta;
