import heroFlowers from "@/assets/hero-flowers.jpg";
import atolyeImage from "@/assets/atolye.jpg";
import gulBuketleri from "@/assets/gul-buketleri.jpg";
import orkideImage from "@/assets/orkide.jpg";
import dugunCicekleri from "@/assets/dugun-cicekleri.jpg";
import hediyeKutusu from "@/assets/hediye-kutusu.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Flower2, Truck, Heart, Sparkles, Quote, BadgeCheck, Instagram, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const WAITLIST_KEY = "flora-waitlist-email";

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
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(() => !!localStorage.getItem(WAITLIST_KEY));
  const { toast } = useToast();

  const featuresSection = useFadeInOnScroll();
  const previewSection = useFadeInOnScroll();
  const aboutSection = useFadeInOnScroll();
  const testimonialSection = useFadeInOnScroll();
  const waitlistSection = useFadeInOnScroll();

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem(WAITLIST_KEY, email);
    setIsSubmitted(true);
    toast({
      title: "🌸 Bekleme listesine eklendi!",
      description: "Lansman günü sizi bilgilendireceğiz.",
    });
    setEmail("");
  };

  const features = [
    {
      icon: <Flower2 size={28} strokeWidth={1.5} />,
      title: "El Yapımı Tasarımlar",
      description: "Her buket, usta florinstlerimiz tarafından özenle hazırlanır.",
    },
    {
      icon: <Truck size={28} strokeWidth={1.5} />,
      title: "Aynı Gün Teslimat",
      description: "Siparişiniz aynı gün kapınıza özenle teslim edilir.",
    },
    {
      icon: <Heart size={28} strokeWidth={1.5} />,
      title: "Taze Garanti",
      description: "Tüm çiçeklerimiz taze ve kaliteli olarak garanti altındadır.",
    },
    {
      icon: <Sparkles size={28} strokeWidth={1.5} />,
      title: "Kişiye Özel Notlar",
      description: "Her siparişe özel mesaj kartı ile duygularınızı ifade edin.",
    },
  ];

  const collections = [
    { image: gulBuketleri, title: "Gül Buketleri", subtitle: "Aşkın simgesi" },
    { image: orkideImage, title: "Orkideler", subtitle: "Zarafetin tanımı" },
    { image: dugunCicekleri, title: "Düğün Çiçekleri", subtitle: "Özel gününüze özel" },
    { image: hediyeKutusu, title: "Hediye Kutuları", subtitle: "Sürpriz paketler" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground flex-shrink-0">
              <path d="M16 28 Q16 22 15.5 18 Q15 16 16 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M15 20 Q10 19 9 16 Q10 17.5 14 18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M16 21 Q21 20 22 17 Q21 18.5 17 19" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M16 14 Q16 8 16 5 Q14.5 3 13 5 Q12 7 13 10 Q14 13 16 14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M16 14 Q18 10 20 7 Q21 5 20 4 Q18.5 3.5 17.5 5 Q16.5 8 16 14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M16 14 Q14 10 12 7 Q11 5 12 4 Q13.5 3.5 14.5 5 Q15.5 8 16 14" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M13.5 11 Q11 8 10 6 Q9.5 4.5 10.5 4 Q12 4 13 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M18.5 11 Q21 8 22 6 Q22.5 4.5 21.5 4 Q20 4 19 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <span className="text-xl sm:text-2xl text-foreground tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>FLORA</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#ozellikler" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Özellikler</a>
            <a href="#koleksiyonlar" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Koleksiyonlar</a>
            <a href="#hakkimizda" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Hakkımızda</a>
          </nav>

          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 text-sm"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Bekleme Listesi
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroFlowers} alt="Çiçek bahçesi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-20 pb-24 sm:pb-10">
          <div className="max-w-2xl">
            <span
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-primary mb-6 opacity-0 animate-fade-in bg-primary/10 px-4 py-2 rounded-full"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles size={16} />
              Çok Yakında
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.3s", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Çiçek Sanatını<br />
              <span className="italic text-primary">Yeniden</span> Keşfedin.
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-foreground/60 mb-10 sm:mb-12 leading-relaxed max-w-lg opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Flora, el yapımı çiçek tasarımlarını kapınıza getiriyor. Lansman günümüzde ilk sipariş veren 100 kişiye özel indirim!
            </p>

            {/* Inline waitlist form */}
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              {isSubmitted ? (
                <div className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm rounded-full px-6 py-4 max-w-md">
                  <CheckCircle2 size={24} className="text-primary flex-shrink-0" />
                  <p className="text-foreground text-sm sm:text-base">Harika! Bekleme listesine eklendiniz 🌸</p>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 rounded-full px-6 h-12 bg-background/80 backdrop-blur-sm border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
                    required
                  />
                  <Button
                    type="submit"
                    className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(350_50%_70%)] flex items-center gap-2"
                  >
                    Katıl
                    <ArrowRight size={16} />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="flex flex-col items-center gap-2 text-foreground/40">
            <span className="text-xs tracking-[0.2em] uppercase">Aşağı kaydır</span>
            <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="ozellikler" className="py-16 sm:py-24 bg-secondary/20">
        <div
          ref={featuresSection.ref}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            featuresSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm tracking-[0.2em] uppercase text-primary mb-3 block">Neden Flora?</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Farkımız Ne?
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-sm sm:text-base">
              Her detayı düşünerek, size en güzel deneyimi sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 sm:p-8 text-center card-shadow transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-display text-lg text-foreground mb-3">{feature.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Preview Section */}
      <section id="koleksiyonlar" className="py-16 sm:py-24 bg-background">
        <div
          ref={previewSection.ref}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            previewSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-sm tracking-[0.2em] uppercase text-primary mb-3 block">Koleksiyon Önizleme</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Çok Yakında Sizlerle
            </h2>
            <p className="text-foreground/60 max-w-md mx-auto text-sm sm:text-base">
              Lansmanla birlikte açılacak olan koleksiyonlarımızdan bir önizleme
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {collections.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden card-shadow aspect-[3/4] cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-xs text-background/70 mb-1">{item.subtitle}</p>
                  <h3 className="font-display text-lg sm:text-xl text-background">{item.title}</h3>
                </div>
                {/* "Coming soon" overlay */}
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full">
                  Yakında
                </div>
              </div>
            ))}
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
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img src={atolyeImage} alt="Flora Atölyesi" className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>

            <div className="lg:pl-8">
              <span className="text-sm tracking-[0.2em] uppercase text-primary mb-4 block">Hakkımızda</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Çiçek Sanatını Yeniden Tanımlıyoruz
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  20 yılı aşkın süredir, doğanın en güzel renklerini evlerinize ve sevdiklerinize taşıyoruz. Her buketimiz, ustalıkla seçilmiş taze çiçeklerden özenle hazırlanır.
                </p>
                <p>
                  Flora olarak, çiçekçilik geleneğini modern tasarımlarla buluşturarak her özel anınıza anlam katmayı amaçlıyoruz.
                </p>
              </div>

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

      {/* Testimonial */}
      <section className="py-16 sm:py-24 bg-background">
        <div
          ref={testimonialSection.ref}
          className={`container mx-auto px-4 sm:px-6 transition-all duration-1000 ${
            testimonialSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6 sm:mb-8">
              <Quote size={40} className="text-primary/40 mx-auto sm:w-12 sm:h-12" strokeWidth={1} />
            </div>
            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6 sm:mb-8 px-4">
              "Eşimin doğum günü için verdiğim sipariş tam zamanında ve görseldekinden bile daha güzel geldi. Teşekkürler Flora!"
            </blockquote>
            <div className="flex flex-col items-center gap-3">
              <p className="text-base sm:text-lg font-medium text-foreground">Ayşe Y.</p>
              <div className="flex items-center gap-2 text-secondary-foreground bg-secondary/80 px-4 py-2 rounded-full">
                <BadgeCheck size={18} className="text-primary" />
                <span className="text-sm font-medium">Doğrulanmış Müşteri</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section id="waitlist" className="py-20 sm:py-28 bg-primary/10 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />

        <div
          ref={waitlistSection.ref}
          className={`container mx-auto px-4 sm:px-6 relative z-10 transition-all duration-1000 ${
            waitlistSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Mail size={28} className="text-primary" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Lansman Günü Haberdar Olun
            </h2>
            <p className="text-foreground/60 mb-8 sm:mb-10 text-sm sm:text-base max-w-md mx-auto">
              Bekleme listesine katılın, lansman günü ilk siz öğrenin ve <span className="text-primary font-medium">%20 özel indirim</span> kazanın!
            </p>

            {isSubmitted ? (
              <div className="flex items-center justify-center gap-3 bg-card rounded-2xl px-8 py-6 card-shadow max-w-md mx-auto">
                <CheckCircle2 size={28} className="text-primary flex-shrink-0" />
                <div className="text-left">
                  <p className="text-foreground font-medium">Listeye eklendi! 🌸</p>
                  <p className="text-foreground/60 text-sm">Lansman gününde size e-posta göndereceğiz.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="E-posta adresiniz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full px-6 h-13 bg-background border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-base"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-13 rounded-full transition-all duration-300 hover:shadow-[0_10px_30px_-10px_hsl(350_50%_70%)] flex items-center gap-2"
                >
                  Bekleme Listesine Katıl
                  <ArrowRight size={16} />
                </Button>
              </form>
            )}

            <p className="text-foreground/40 text-xs mt-4">Spam göndermeyiz. İstediğiniz zaman çıkabilirsiniz.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <span className="text-xl sm:text-2xl tracking-wider" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>FLORA</span>
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
              </div>
            </div>

            <div className="flex items-center gap-3 text-background/80">
              <Clock size={18} />
              <div className="text-sm text-center md:text-left">
                <p>Lansman: Yakında</p>
              </div>
            </div>

            <div className="text-sm text-background/60 text-center">
              © 2026 Flora. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
