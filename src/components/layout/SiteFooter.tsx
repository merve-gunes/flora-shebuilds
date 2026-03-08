import { Instagram, Clock } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="py-10 sm:py-12 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-xl sm:text-2xl tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>FLORA</span>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors hover:scale-110 duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors hover:scale-110 duration-300" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="17" x2="12" y2="22"/>
                  <path d="M8 21.5L11.5 13"/>
                  <circle cx="12" cy="9" r="7"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-background/80">
            <Clock size={18} />
            <div className="text-sm text-center md:text-left">
              <p>Pazartesi - Cumartesi: 09:00 - 20:00</p>
              <p>Pazar: 10:00 - 18:00</p>
            </div>
          </div>

          <div className="text-sm text-background/60 text-center">
            © 2026 Zarif Buket. Tüm hakları saklıdır.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
