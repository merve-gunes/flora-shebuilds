import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface SiteHeaderProps {
  onContactOpen: () => void;
}

const SiteHeader = ({ onContactOpen }: SiteHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl sm:text-2xl text-foreground hover:text-primary transition-colors">
          Zarif Buket
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
              Kategoriler
              <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl py-2 min-w-[180px]">
                <Link to="/gul-buketleri" className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors">
                  Gül Buketleri
                </Link>
                <Link to="/orkideler" className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors">
                  Orkideler
                </Link>
                <Link to="/dugun-cicekleri" className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors">
                  Düğün Çiçekleri
                </Link>
                <Link to="/hediye-kutulari" className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors">
                  Hediye Kutuları
                </Link>
              </div>
            </div>
          </div>
          <Link to="/#kategoriler" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Özel Günler
          </Link>
          <Link to="/#hakkimizda" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Hakkımızda
          </Link>
          <button onClick={onContactOpen} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            İletişim
          </button>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5" aria-label="Ara">
            <Search size={20} />
          </button>
          <button className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5 relative" aria-label="Sepet">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">0</span>
          </button>
          <button className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menü">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link to="/gul-buketleri" className="text-foreground/70 hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Gül Buketleri
            </Link>
            <Link to="/orkideler" className="text-foreground/70 hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Orkideler
            </Link>
            <Link to="/dugun-cicekleri" className="text-foreground/70 hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Düğün Çiçekleri
            </Link>
            <Link to="/hediye-kutulari" className="text-foreground/70 hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Hediye Kutuları
            </Link>
            <Link to="/#hakkimizda" className="text-foreground/70 hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Hakkımızda
            </Link>
            <button className="text-foreground/70 hover:text-foreground transition-colors py-2 text-left" onClick={() => { setIsMobileMenuOpen(false); onContactOpen(); }}>
              İletişim
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
