import { useState } from "react";
import { Send, Clock } from "lucide-react";

const areas = [
  "Direito Imobiliário",
  "Direito Trabalhista",
  "Direito Civil",
  "Direito Empresarial",
  "Direito de Família",
  "Direito Previdenciário",
  "Outro",
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contato" className="section-padding bg-muted/50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Entre em Contato</h2>
          <div className="flex items-center justify-center gap-2 text-secondary">
            <Clock size={18} />
            <span className="font-medium text-sm">Retorno em até 24h úteis</span>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-12 bg-card rounded-2xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-success/10 flex items-center justify-center">
              <Send className="text-success" size={28} />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Mensagem Enviada!</h3>
            <p className="text-muted-foreground">Entraremos em contato em breve.</p>
          </div>
        ) : (
          <form
  action="https://formsubmit.co/alinefrassonadv@gmail.com" 
  method="POST" 
  className="bg-card rounded-2xl shadow-lg p-6 md:p-10 space-y-5"
>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                <input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  className="w-full border-2 border-border rounded-lg px-4 py-3 text-foreground bg-background input-gold transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">E-mail</label>
                <input
                  id="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full border-2 border-border rounded-lg px-4 py-3 text-foreground bg-background input-gold transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  maxLength={20}
                  className="w-full border-2 border-border rounded-lg px-4 py-3 text-foreground bg-background input-gold transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-foreground mb-1.5">Área de Interesse</label>
                <select
                  id="area"
                  required
                  className="w-full border-2 border-border rounded-lg px-4 py-3 text-foreground bg-background input-gold transition-all"
                >
                  <option value="">Selecione...</option>
                  {areas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Mensagem</label>
              <textarea
                id="message"
                required
                maxLength={1000}
                rows={4}
                className="w-full border-2 border-border rounded-lg px-4 py-3 text-foreground bg-background input-gold transition-all resize-none"
                placeholder="Descreva brevemente sua situação..."
              />
            </div>
            <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
              <input type="hidden" name="_subject" value="Novo contato pelo site" />
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_next" value="https://alinefrassonadv.com.br/obrigado.html" />
              <Send size={18} />
              Enviar Mensagem para Dra. Aline
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
