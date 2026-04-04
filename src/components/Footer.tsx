import { Phone, Mail, Instagram, Award, ShieldCheck } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-12 px-4">
    <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div>
        <h3 className="font-heading text-xl font-bold text-background mb-4">
          Aline Frasson <span className="text-accent">Advocacia</span>
        </h3>
        <p className="text-sm leading-relaxed mb-4">
          Soluções jurídicas eficazes com atendimento humanizado e transparente.
        </p>
        <div className="flex gap-3">
          <span className="flex items-center gap-1 text-xs"><Award size={14} className="text-accent" /> OAB/SC</span>
          <span className="flex items-center gap-1 text-xs"><ShieldCheck size={14} className="text-accent" /> LGPD</span>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-background mb-4">Contato</h4>
        <div className="space-y-3 text-sm">
          <a href="tel:+5551999906411" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={16} /> (51) 99990-6411
          </a>
          <a href="mailto:aline.frasson@hotmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={16} /> aline.frasson@hotmail.com
          </a>
          <a href="https://instagram.com/alinefrassonadv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Instagram size={16} /> @alinefrassonadv
          </a>
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-background mb-4">Localização</h4>
        <p className="text-sm leading-relaxed mb-4">Atendemos em todo o Brasil com consultas presenciais e online.</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/50">
      <p>© {new Date().getFullYear()} Aline Frasson Advocacia. Todos os direitos reservados.</p>
      <p className="mt-1">Em conformidade com a LGPD — Lei Geral de Proteção de Dados.</p>
    </div>
  </footer>
);

export default Footer;
