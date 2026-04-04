import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5551999906411?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
    aria-label="Contato via WhatsApp"
  >
    <MessageCircle size={28} className="text-white" />
  </a>
);

export default WhatsAppButton;
