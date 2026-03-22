import { MessageCircle } from "lucide-react";
import { contactInfo } from "@/data/content";

const WhatsAppButton = () => {
  return (
    <a
      href={contactInfo.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="text-white" size={28} />
    </a>
  );
};

export default WhatsAppButton;
