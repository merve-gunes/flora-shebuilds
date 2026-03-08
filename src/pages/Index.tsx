import heroFlowers from "@/assets/hero-flowers.jpg";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="font-display text-2xl text-foreground">Zarif Buket</h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Buketler</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Aranjmanlar</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">Özel Günler</a>
            <a href="#" className="text-sm text-foreground/70 hover:text-foreground transition-colors">İletişim</a>
          </nav>
        </div>
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
    </div>
  );
};

export default Index;
