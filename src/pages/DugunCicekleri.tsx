import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/layout/SiteLayout";
import dugunCicekleri from "@/assets/dugun-cicekleri.jpg";

const products = [
  { name: "Gelin Buketi", price: "₺850", desc: "Beyaz güller ve okaliptüs ile klasik gelin buketi" },
  { name: "Masa Aranjmanı", price: "₺450", desc: "Düğün masaları için zarif çiçek aranjmanı" },
  { name: "Kapı Süsü", price: "₺350", desc: "Mekan girişi için dekoratif çiçek süslemesi" },
  { name: "Çiçek Kemeri", price: "₺1,200", desc: "Nikah töreni için çiçek kemeri dekorasyonu" },
  { name: "Yaka Çiçeği", price: "₺150", desc: "Damat ve sağdıçlar için zarif yaka çiçeği" },
  { name: "Gelin Arabası", price: "₺600", desc: "Gelin arabası çiçek süslemesi" },
];

const DugunCicekleri = () => {
  return (
    <SiteLayout>
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={dugunCicekleri} alt="Düğün Çiçekleri" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center text-background">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Düğün Çiçekleri</h1>
          <p className="text-background/80 text-lg max-w-lg mx-auto">Hayatınızın en özel gününe yakışır düğün aranjmanları</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img src={dugunCicekleri} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
                  <p className="text-foreground/60 text-sm mb-3">{product.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-lg">{product.price}</span>
                    <Button size="sm" className="btn-glow bg-primary hover:bg-primary-hover text-primary-foreground rounded-full transition-all duration-300">
                      Sepete Ekle
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default DugunCicekleri;
