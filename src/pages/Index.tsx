import heroFlowers from "@/assets/hero-flowers.jpg";
import gulBuketleri from "@/assets/gul-buketleri.jpg";
import salonBitkileri from "@/assets/salon-bitkileri.jpg";
import dogumGunu from "@/assets/dogum-gunu.jpg";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Menu, X, Flower2, PenLine, Truck } from "lucide-react";
import { useState } from "react";

const categories = [
  {
    image: gulBuketleri,
    title: "Aşkın Dili Güller",
    alt: "Gül Buketleri"
  },
  {
    image: salonBitkileri,
    title: "Evinize Nefes Aldırın",
    alt: "Salon Bitkileri"
  },
  {
    image: dogumGunu,
    title: "En Mutlu Günlere",
    alt: "Doğum Günü Aranjmanları"
  }
];

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Glassmorphism Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display text-2xl text-foreground hover:text-primary transition-colors">
            Zarif Buket
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#kategoriler" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Kategoriler
            </a>
            <a href="#ozel-gunler" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Özel Günler
            </a>
            <a href="#hakkimizda" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Hakkımızda
            </a>
            <a href="#iletisim" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              İletişim
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button 
              className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
              aria-label="Ara"
            >
              <Search size={20} />
            </button>
            <button 
              className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5 relative"
              aria-label="Sepet"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-foreground/70 hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menü"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a 
                href="#kategoriler" 
                className="text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kategoriler
              </a>
              <a 
                href="#ozel-gunler" 
                className="text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Özel Günler
              </a>
              <a 
                href="#hakkimizda" 
                className="text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hakkımızda
              </a>
              <a 
                href="#iletisim" 
                className="text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İletişim
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroFlowers} 
            alt="Çiçek bahçesi" 
            className="w-full h-full object-cover"
          />
          {/* Soft overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <div className="max-w-2xl">
            <h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Hayatın En Güzel Anlarını Çiçeklerle Taçlandırın
            </h1>
            <p 
              className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              Taze, tasarım buketler ve özel gün aranjmanları ile sevdiklerinize unutulmaz sürprizler yapın.
            </p>
            <div 
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Buketleri Keşfet
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
          <div className="flex flex-col items-center gap-2 text-foreground/50">
            <span className="text-sm">Keşfetmeye başla</span>
            <svg 
              className="w-5 h-5 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section id="kategoriler" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Popüler Kategoriler
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto">
              En sevilen çiçek ve bitki kategorilerimizi keşfedin
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl text-foreground mb-4">
                    {category.title}
                  </h3>
                  <Button 
                    variant="outline" 
                    className="rounded-full border-primary text-primary-foreground bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    İncele
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
