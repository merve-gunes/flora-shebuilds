import heroFlowers from "@/assets/hero-flowers.jpg";
import gulBuketleri from "@/assets/gul-buketleri.jpg";
import salonBitkileri from "@/assets/salon-bitkileri.jpg";
import dogumGunu from "@/assets/dogum-gunu.jpg";
import atolyeImage from "@/assets/atolye.jpg";
import orkideImage from "@/assets/orkide.jpg";
import dugunCicekleri from "@/assets/dugun-cicekleri.jpg";
import hediyeKutusu from "@/assets/hediye-kutusu.jpg";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Menu, X, Flower2, PenLine, Truck, Quote, BadgeCheck, Instagram, Mail, Clock, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import CartDrawer from "@/components/cart/CartDrawer";
import SearchModal from "@/components/search/SearchModal";

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

// Category sections data
const categoryProducts = {
  guller: [
    { name: "Romantik Gül Buketi", price: "₺450", image: gulBuketleri },
    { name: "Kırmızı Aşk", price: "₺550", image: gulBuketleri },
    { name: "Pembe Rüya", price: "₺400", image: gulBuketleri },
  ],
  orkideler: [
    { name: "Mor Orkide", price: "₺650", image: orkideImage },
    { name: "Beyaz Elegance", price: "₺750", image: orkideImage },
    { name: "Phalaenopsis", price: "₺580", image: orkideImage },
  ],
  dugun: [
    { name: "Gelin Buketi", price: "₺850", image: dugunCicekleri },
    { name: "Masa Aranjmanı", price: "₺450", image: dugunCicekleri },
    { name: "Kapı Süsü", price: "₺350", image: dugunCicekleri },
  ],
  hediye: [
    { name: "Lüks Hediye Kutusu", price: "₺750", image: hediyeKutusu },
    { name: "Çikolatalı Set", price: "₺650", image: hediyeKutusu },
    { name: "Mini Sürpriz", price: "₺400", image: hediyeKutusu },
  ],
};

// Custom hook for scroll-triggered animations
const useFadeInOnScroll = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { addItem, totalItems, setIsOpen: setCartOpen } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: { name: string; price: string; image: string }) => {
    addItem({
      id: `index-${product.name}`,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: "🌸 Ürün sepete eklendi!",
      description: `${product.name} sepetinize başarıyla eklendi.`,
    });
  };
  
  // Fade-in refs for each section
  const categoriesSection = useFadeInOnScroll();
  const processSection = useFadeInOnScroll();
  const aboutSection = useFadeInOnScroll();
  const testimonialSection = useFadeInOnScroll();
  const newsletterSection = useFadeInOnScroll();

  return (
    <div className="min-h-screen bg-background">
      {/* Glassmorphism Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display text-xl sm:text-2xl text-foreground hover:text-primary transition-colors">
            Zarif Buket
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {/* Kategoriler Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors py-2">
                Kategoriler
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
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
            <a href="#kategoriler" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Özel Günler
            </a>
            <a href="#hakkimizda" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              Hakkımızda
            </a>
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              İletişim
            </button>
          </nav>

          {/* Right side icons */}
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
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                  {totalItems}
                </span>
              )}
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
          <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-fade-in">
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a 
                href="#kategoriler" 
                className="text-foreground/70 hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kategoriler
              </a>
              <a 
                href="#kategoriler" 
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
              <button 
                className="text-foreground/70 hover:text-foreground transition-colors py-2 text-left"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
              >
                İletişim
              </button>
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
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20">
          <div className="max-w-2xl">
            <h1 
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Hayatın En Güzel Anlarını Çiçeklerle Taçlandırın
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-10 leading-relaxed opacity-0 animate-fade-in"
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
                className="btn-glow bg-primary hover:bg-primary-hover text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-medium rounded-full shadow-lg hover:shadow-[0_10px_40px_-10px_hsl(350_50%_70%)] transition-all duration-300"
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
      <section id="kategoriler" className="py-16 sm:py-24 bg-secondary/20">
        <div 
          ref={categoriesSection.ref}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            categoriesSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Popüler Kategoriler
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-sm sm:text-base">
              En sevilen çiçek ve bitki kategorilerimizi keşfedin
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-3 cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
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
                <div className="p-5 sm:p-6 text-center">
                  <h3 className="font-display text-lg sm:text-xl text-foreground mb-4">
                    {category.title}
                  </h3>
                  <Button 
                    variant="outline" 
                    className="btn-glow rounded-full border-primary text-primary-foreground bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_5px_20px_-5px_hsl(350_50%_70%)]"
                  >
                    İncele
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gül Buketleri Section */}
      <section id="gul-buketleri" className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
              Gül Buketleri
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-sm sm:text-base">
              Aşkın ve tutkunun simgesi, özenle hazırlanmış gül buketlerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categoryProducts.guller.map((product, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg text-foreground mb-2">{product.name}</h3>
                  <p className="text-primary font-medium mb-3">{product.price}</p>
                  <Button 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300"
                  >
                    Sepete Ekle
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orkideler Section */}
      <section id="orkideler" className="py-16 sm:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
              Orkideler
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-sm sm:text-base">
              Zarafet ve şıklığın sembolü, uzun ömürlü orkide çeşitlerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categoryProducts.orkideler.map((product, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg text-foreground mb-2">{product.name}</h3>
                  <p className="text-primary font-medium mb-3">{product.price}</p>
                  <Button 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300"
                  >
                    Sepete Ekle
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Düğün Çiçekleri Section */}
      <section id="dugun-cicekleri" className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
              Düğün Çiçekleri
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-sm sm:text-base">
              Hayatınızın en özel gününe yakışır düğün aranjmanları
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categoryProducts.dugun.map((product, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg text-foreground mb-2">{product.name}</h3>
                  <p className="text-primary font-medium mb-3">{product.price}</p>
                  <Button 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300"
                  >
                    Sepete Ekle
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hediye Kutuları Section */}
      <section id="hediye-kutulari" className="py-16 sm:py-20 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
              Hediye Kutuları
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-sm sm:text-base">
              Çiçek ve lezzetlerin bir arada olduğu özel hediye setleri
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categoryProducts.hediye.map((product, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-lg text-foreground mb-2">{product.name}</h3>
                  <p className="text-primary font-medium mb-3">{product.price}</p>
                  <Button 
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300"
                  >
                    Sepete Ekle
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Process Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div 
          ref={processSection.ref}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            processSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Sipariş Süreci
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-sm sm:text-base">
              Sadece 3 kolay adımda çiçekleriniz kapınızda
            </p>
          </div>

          {/* Steps */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting Line - Desktop */}
            <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-primary/30 via-primary to-primary/30" />
            
            {/* Connecting Line - Mobile */}
            <div className="md:hidden absolute left-1/2 top-16 bottom-16 w-px bg-gradient-to-b from-primary via-primary/50 to-primary" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-secondary/50 flex items-center justify-center mb-6 relative z-10 border-4 border-background shadow-lg transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(140_25%_70%)]">
                  <Flower2 size={36} className="text-primary sm:w-10 sm:h-10" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-primary mb-2">Adım 1</span>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-3">
                  Çiçeğinizi Seçin
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
                  Geniş koleksiyonumuzdan size en uygun tasarımı bulun.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-secondary/50 flex items-center justify-center mb-6 relative z-10 border-4 border-background shadow-lg transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(140_25%_70%)]">
                  <PenLine size={36} className="text-primary sm:w-10 sm:h-10" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-primary mb-2">Adım 2</span>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-3">
                  Notunuzu Ekleyin
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
                  Duygularınızı ifade eden özel mesajınızı yazın.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-secondary/50 flex items-center justify-center mb-6 relative z-10 border-4 border-background shadow-lg transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(140_25%_70%)]">
                  <Truck size={36} className="text-primary sm:w-10 sm:h-10" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-primary mb-2">Adım 3</span>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-3">
                  Aynı Gün Teslim
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed max-w-xs">
                  Seçtiğiniz saat diliminde kapınıza getirelim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="hakkimizda" className="py-16 sm:py-24 bg-secondary/20">
        <div 
          ref={aboutSection.ref}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            aboutSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={atolyeImage} 
                alt="Zarif Buket Atölyesi" 
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="lg:pl-8">
              <span className="text-sm font-medium text-primary mb-4 block">Hakkımızda</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Zanaat ve Doğanın Buluşma Noktası
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  20 yılı aşkın süredir, doğanın en güzel renklerini evlerinize ve sevdiklerinize taşıyoruz. Her buketimiz, ustalıkla seçilmiş taze çiçeklerden özenle hazırlanır.
                </p>
                <p>
                  Zarif Buket olarak, çiçekçilik geleneğini modern tasarımlarla buluşturarak her özel anınıza anlam katmayı amaçlıyoruz. Sizin mutluluğunuz, bizim ilham kaynağımız.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <p className="font-display text-2xl sm:text-3xl text-primary">20+</p>
                  <p className="text-sm text-foreground/60">Yıllık Deneyim</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl sm:text-3xl text-primary">50K+</p>
                  <p className="text-sm text-foreground/60">Mutlu Müşteri</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-2xl sm:text-3xl text-primary">100+</p>
                  <p className="text-sm text-foreground/60">Tasarım</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonial Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div 
          ref={testimonialSection.ref}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            testimonialSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            {/* Quote Icon */}
            <div className="mb-6 sm:mb-8">
              <Quote size={40} className="text-primary/40 mx-auto sm:w-12 sm:h-12" strokeWidth={1} />
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6 sm:mb-8 px-4">
              "Eşimin doğum günü için verdiğim sipariş tam zamanında ve görseldekinden bile daha güzel geldi. Teşekkürler Zarif Buket!"
            </blockquote>
            
            {/* Customer Info */}
            <div className="flex flex-col items-center gap-3">
              <p className="text-base sm:text-lg font-medium text-foreground">
                Ayşe Y.
              </p>
              
              {/* Verification Badge */}
              <div className="flex items-center gap-2 text-secondary-foreground bg-secondary/80 px-4 py-2 rounded-full">
                <BadgeCheck size={18} className="text-primary" />
                <span className="text-sm font-medium">Doğrulanmış Müşteri</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="iletisim" className="py-16 sm:py-20 bg-primary/10">
        <div 
          ref={newsletterSection.ref}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            newsletterSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-xl mx-auto text-center">
            <Mail size={28} className="text-primary mx-auto mb-4 sm:w-8 sm:h-8" strokeWidth={1.5} />
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground mb-3">
              Bültenimize Katılın
            </h2>
            <p className="text-foreground/60 mb-6 sm:mb-8 text-sm sm:text-base">
              İndirimlerden ve yeni tasarımlardan haberdar olun
            </p>
            
            <form 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle newsletter subscription
              }}
            >
              <Input 
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 rounded-full px-5 sm:px-6 py-3 h-12 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
                maxLength={255}
              />
              <Button 
                type="submit"
                className="btn-glow bg-primary hover:bg-primary-hover text-primary-foreground px-6 sm:px-8 h-12 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(350_50%_70%)]"
              >
                Abone Ol
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            {/* Logo & Social */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="font-display text-xl sm:text-2xl">Zarif Buket</span>
              <div className="flex items-center gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors hover:scale-110 duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors hover:scale-110 duration-300"
                  aria-label="Pinterest"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="17" x2="12" y2="22"/>
                    <path d="M8 21.5L11.5 13"/>
                    <circle cx="12" cy="9" r="7"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center gap-3 text-background/80">
              <Clock size={18} />
              <div className="text-sm text-center md:text-left">
                <p>Pazartesi - Cumartesi: 09:00 - 20:00</p>
                <p>Pazar: 10:00 - 18:00</p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-background/60 text-center">
              © 2026 Zarif Buket. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsContactModalOpen(false)}
          />
          
          {/* Modal */}
          <div className="relative bg-background rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setIsContactModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5 z-10"
              aria-label="Kapat"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Contact Info */}
              <div className="bg-secondary/30 p-6 sm:p-8 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4">
                  Bize Ulaşın
                </h3>
                <p className="text-foreground/60 text-sm mb-8">
                  Sorularınız için bize her zaman ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
                </p>

                {/* Contact details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">E-posta</p>
                      <a href="mailto:info@zarifbuket.com" className="text-foreground hover:text-primary transition-colors">
                        info@zarifbuket.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="text-green-600"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">WhatsApp</p>
                      <a 
                        href="https://wa.me/905551234567" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +90 555 123 45 67
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl sm:text-2xl text-foreground mb-6">
                  Mesaj Gönderin
                </h3>
                
                <form 
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission
                    setIsContactModalOpen(false);
                  }}
                >
                  <div>
                    <label htmlFor="name" className="text-sm text-foreground/70 mb-1.5 block">
                      Adınız
                    </label>
                    <Input 
                      id="name"
                      type="text"
                      placeholder="Adınızı girin"
                      className="rounded-lg border-border focus:border-primary"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm text-foreground/70 mb-1.5 block">
                      E-posta
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="rounded-lg border-border focus:border-primary"
                      required
                      maxLength={255}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm text-foreground/70 mb-1.5 block">
                      Mesajınız
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Mesajınızı yazın..."
                      className="rounded-lg border-border focus:border-primary min-h-[120px] resize-none"
                      required
                      maxLength={1000}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full btn-glow bg-primary hover:bg-primary-hover text-primary-foreground rounded-full h-12 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(350_50%_70%)]"
                  >
                    Gönder
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
