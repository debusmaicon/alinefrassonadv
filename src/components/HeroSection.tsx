import advogadaImg from "@/assets/advogada-aline.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-primary min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text */}
        <div className="animate-fade-slide-up text-center md:text-left order-2 md:order-1">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-[52px] leading-tight text-primary-foreground font-bold mb-6">
            Defenda e proteja seus direitos com{" "}
            <span className="text-accent">transparência</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            Soluções jurídicas eficazes e atendimento humanizado para proteger o que é seu.
          </p>
          <a
            href="#contato"
            className="btn-gold inline-block animate-pulse-subtle"
          >
            Fale Agora com a Dra. Aline
          </a>
        </div>

        {/* Photo */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 animate-fade-slide-up" style={{ animationDelay: "0.3s" }}>
          <img
            src={advogadaImg}
            alt="Dra. Aline Frasson, advogada profissional em ambiente de escritório"
            className="w-72 sm:w-80 md:w-[420px] lg:w-[480px] rounded-2xl shadow-2xl object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* Decorative bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 60Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
