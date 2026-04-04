import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Maria S.",
    city: "São José/SC",
    area: "Direito Trabalhista",
    initials: "MS",
    text: "Após meses de insegurança com meu processo trabalhista, a Dra. Aline resolveu tudo em tempo recorde. Profissional dedicada, atenciosa e extremamente competente. Recomendo para quem busca seriedade e resultados.",
  },
  {
    name: "Carlos R.",
    city: "Florianópolis/SC",
    area: "Direito Imobiliário",
    initials: "CR",
    text: "Tive um problema complexo com a compra do meu imóvel e a Dra. Aline conduziu todo o processo com maestria. Sua expertise em direito imobiliário me deu segurança para tomar as melhores decisões.",
  },
  {
    name: "Ana P.",
    city: "Palhoça/SC",
    area: "Direito Previdenciário",
    initials: "AP",
    text: "Depois de anos tentando minha aposentadoria sem sucesso, a Dra. Aline analisou meu caso e conseguiu o benefício que eu merecia. Atendimento humanizado e resultado surpreendente.",
  },
  {
    name: "Roberto M.",
    city: "Porto Alegre/RS",
    area: "Compliance Empresarial",
    initials: "RM",
    text: "Contratamos a Dra. Aline para adequar nossa empresa às normas de compliance e LGPD. Trabalho impecável, com total transparência e profissionalismo em cada etapa do processo.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="depoimentos" className="section-padding bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-12">
          O Que Nossos Clientes Dizem
        </h2>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 transition-all duration-500">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-8 italic">
              "{t.text}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold">
                {t.initials}
              </div>
              <div className="text-left">
                <p className="text-primary-foreground font-semibold">{t.name}</p>
                <p className="text-primary-foreground/60 text-sm">{t.city} — {t.area}</p>
              </div>
            </div>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-primary-foreground transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent w-8" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para depoimento ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
