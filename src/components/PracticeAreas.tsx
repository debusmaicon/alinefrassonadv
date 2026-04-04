import { Home, Briefcase, Users, Building2, Heart, Clock } from "lucide-react";

const areas = [
  { icon: Home, title: "Direito Imobiliário", desc: "Contratos, usucapião, locação e disputas de propriedade" },
  { icon: Briefcase, title: "Direito Trabalhista", desc: "Rescisões, direitos trabalhistas e ações judiciais" },
  { icon: Users, title: "Direito Civil", desc: "Contratos, indenizações e responsabilidade civil" },
  { icon: Building2, title: "Direito Empresarial", desc: "Abertura de empresas, contratos e compliance" },
  { icon: Heart, title: "Direito de Família", desc: "Divórcio, guarda, pensão alimentícia e inventário" },
  { icon: Clock, title: "Direito Previdenciário", desc: "Aposentadoria, benefícios e revisões do INSS" },
];

const PracticeAreas = () => (
  <section id="areas" className="section-padding bg-muted/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Áreas de Atuação</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Atuação especializada em diversas áreas do direito para atender todas as suas necessidades jurídicas.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {areas.map((a) => (
          <div key={a.title} className="card-lift group cursor-default">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <a.icon className="text-secondary" size={24} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PracticeAreas;
