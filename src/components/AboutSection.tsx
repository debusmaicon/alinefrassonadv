import { Award, ShieldCheck, Calendar } from "lucide-react";
import escritorioImg from "@/assets/escritorio.png";

const seals = [
  { icon: Award, label: "OAB/SC" },
  { icon: ShieldCheck, label: "LGPD" },
  { icon: Calendar, label: "+5 Anos de Experiência" },
];

const AboutSection = () => (
  <section id="sobre" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <img
          src={escritorioImg}
          alt="Escritório moderno e sofisticado da Aline Frasson Advocacia"
          className="rounded-2xl shadow-xl w-full object-cover max-h-[420px]"
          loading="lazy"
        />
      </div>
      <div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Sobre o Escritório</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Aline Frasson Advocacia nasceu com o propósito de oferecer soluções jurídicas eficazes e acessíveis, sempre pautadas pela ética, transparência e dedicação.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Com atuação em diversas áreas do direito, o escritório prioriza o atendimento próximo e personalizado, garantindo que cada cliente receba a atenção e o cuidado que seu caso merece.
        </p>
        <div className="flex flex-wrap gap-4">
          {seals.map((s) => (
            <div key={s.label} className="flex items-center gap-2 bg-muted rounded-full px-4 py-2">
              <s.icon size={18} className="text-secondary" />
              <span className="text-sm font-medium text-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
