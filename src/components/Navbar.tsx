import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="font-heading text-xl md:text-2xl text-primary-foreground font-bold tracking-tight">
          Aline Frasson <span className="text-accent font-semibold">Advocacia</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-accent text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" className="btn-gold text-sm !py-2.5 !px-6">
            Fale Conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-accent font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="btn-gold block text-center mt-4 !py-3">
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
