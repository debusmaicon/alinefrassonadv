import { UserCheck, Zap, ShieldCheck, Scale } from "lucide-react";

const pillars = [
  { icon: UserCheck, title: "Atendimento Próximo", desc: "Você fala direto com a advogada, sem intermediários" },
  { icon: Zap, title: "Agilidade Comprovada", desc: "Processos otimizados para resultados mais rápidos" },
  { icon: ShieldCheck, title: "Sigilo Absoluto", desc: "Ética profissional em cada detalhe do seu caso" },
  { icon: Scale, title: "Experiência Multidisciplinar", desc: "6 áreas do direito para resolver sua situação" },
];

const ValueProps = () => (
  <section className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, i) => (
          <div
            key={p.title}
            className={`card-lift text-center opacity-0 animate-fade-slide-up stagger-${i + 1}`}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <p.icon className="text-secondary" size={28} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ValueProps;
