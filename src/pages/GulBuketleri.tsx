import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import gulBuketleri from "@/assets/gul-buketleri.jpg";

const products = [
  { name: "Romantik Gül Buketi", price: "₺450", desc: "21 adet kırmızı ve pembe gülden oluşan el yapımı buket" },
  { name: "Kırmızı Aşk", price: "₺550", desc: "50 adet ithal kırmızı gül, özel ambalajda" },
  { name: "Pembe Rüya", price: "₺400", desc: "Pastel pembe güller ve okaliptüs yapraklarıyla zarif bir buket" },
  { name: "Gül Bahçesi", price: "₺650", desc: "Karma renklerde 30 adet bahçe gülü aranjmanı" },
  { name: "Tek Dal Gül", price: "₺120", desc: "Özel kutuda tek dal ithal gül, kişiye özel not ile" },
  { name: "Gül & Çikolata", price: "₺500", desc: "12 gül ve el yapımı çikolata seti" },
];

const GulBuketleri = () => {
  return (
    <SiteLayout>
      {/* Hero Banner */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={gulBuketleri} alt="Gül Buketleri" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center text-background">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Gül Buketleri</h1>
          <p className="text-background/80 text-lg max-w-lg mx-auto">Aşkın ve tutkunun simgesi, özenle hazırlanmış gül buketlerimiz</p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img src={gulBuketleri} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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

export default GulBuketleri;
