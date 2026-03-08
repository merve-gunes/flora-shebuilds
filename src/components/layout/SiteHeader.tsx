import { Link } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import SearchModal from "@/components/search/SearchModal";

interface SiteHeaderProps {
  onContactOpen: () => void;
}

const SiteHeader = ({ onContactOpen }: SiteHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCatOpen, setIsCatOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <svg
              width="26"
              height="26"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-foreground flex-shrink-0"
            >
              {/* Tulip / peony line-art */}
              <path d="M16 28 Q16 22 15.5 18 Q15 16 16 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              {/* Left leaf */}
              <path d="M15 20 Q10 19 9 16 Q10 17.5 14 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Right leaf */}
              <path d="M16 21 Q21 20 22 17 Q21 18.5 17 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Center petal */}
              <path d="M16 14 Q16 8 16 5 Q14.5 3 13 5 Q12 7 13 10 Q14 13 16 14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Right petal */}
              <path d="M16 14 Q18 10 20 7 Q21 5 20 4 Q18.5 3.5 17.5 5 Q16.5 8 16 14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Left petal */}
              <path d="M16 14 Q14 10 12 7 Q11 5 12 4 Q13.5 3.5 14.5 5 Q15.5 8 16 14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Outer left petal */}
              <path d="M13.5 11 Q11 8 10 6 Q9.5 4.5 10.5 4 Q12 4 13 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Outer right petal */}
              <path d="M18.5 11 Q21 8 22 6 Q22.5 4.5 21.5 4 Q20 4 19 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span className="text-xl sm:text-2xl text-foreground tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
              FLORA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <div
              className="relative"
              onMouseEnter={() => setIsCatOpen(true)}
              onMouseLeave={() => setIsCatOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsCatOpen(!isCatOpen)}
              >
                Kategoriler
                <ChevronDown size={14} className={`transition-transform duration-200 ${isCatOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCatOpen && (
                <div className="absolute top-full left-0 pt-1 z-50">
                  <div className="bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl py-2 min-w-[180px]">
                    {[
                      { to: "/gul-buketleri", label: "Gül Buketleri" },
                      { to: "/orkideler", label: "Orkideler" },
                      { to: "/laleler", label: "Laleler" },
                      { to: "/papatyalar", label: "Papatyalar" },
                      { to: "/nergisler", label: "Nergisler" },
                      { to: "/aycicekleri", label: "Ayçiçekleri" },
                      { to: "/lavanta", label: "Lavanta" },
                      { to: "/nilufer", label: "Nilüfer" },
                      { to: "/dugun-cicekleri", label: "Düğün Çiçekleri" },
                      { to: "/hediye-kutulari", label: "Hediye Kutuları" },
                    ].map((item) => (
                      <Link key={item.to} to={item.to} onClick={() => setIsCatOpen(false)} className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-foreground hover:bg-secondary/50 transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
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
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
              aria-label="Ara"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setCartOpen(true)}
              className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5 relative"
              aria-label="Sepet"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium animate-scale-in">
                  {totalItems}
                </span>
              )}
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

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default SiteHeader;
