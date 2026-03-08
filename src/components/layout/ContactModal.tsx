import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      
      <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5 z-10" aria-label="Kapat">
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-secondary/30 p-6 sm:p-8 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4">Bize Ulaşın</h3>
            <p className="text-foreground/60 text-sm mb-8">Sorularınız için bize her zaman ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">E-posta</p>
                  <a href="mailto:info@zarifbuket.com" className="text-foreground hover:text-primary transition-colors">info@zarifbuket.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-600">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-foreground/60">WhatsApp</p>
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">+90 555 123 45 67</a>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-6">Mesaj Gönderin</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div>
                <label htmlFor="contact-name" className="text-sm text-foreground/70 mb-1.5 block">Adınız</label>
                <Input id="contact-name" type="text" placeholder="Adınızı girin" className="rounded-lg border-border focus:border-primary" required maxLength={100} />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm text-foreground/70 mb-1.5 block">E-posta</label>
                <Input id="contact-email" type="email" placeholder="E-posta adresiniz" className="rounded-lg border-border focus:border-primary" required maxLength={255} />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-sm text-foreground/70 mb-1.5 block">Mesajınız</label>
                <Textarea id="contact-message" placeholder="Mesajınızı yazın..." className="rounded-lg border-border focus:border-primary min-h-[120px] resize-none" required maxLength={1000} />
              </div>
              <Button type="submit" className="w-full btn-glow bg-primary hover:bg-primary-hover text-primary-foreground rounded-full h-12 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(350_50%_70%)]">
                Gönder
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
