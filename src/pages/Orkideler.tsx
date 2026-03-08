import { Button } from "@/components/ui/button";
import SiteLayout from "@/components/layout/SiteLayout";
import orkideImage from "@/assets/orkide.jpg";

const products = [
  { name: "Mor Orkide", price: "₺650", desc: "Tek dallı mor phalaenopsis orkide, seramik saksıda" },
  { name: "Beyaz Elegance", price: "₺750", desc: "Çift dallı beyaz orkide, premium saksıda" },
  { name: "Phalaenopsis", price: "₺580", desc: "Pembe phalaenopsis orkide, dekoratif saksıda" },
  { name: "Mini Orkide Seti", price: "₺450", desc: "3 adet mini orkide, şık kutuda" },
  { name: "Orkide Aranjmanı", price: "₺900", desc: "Çoklu orkide aranjmanı, özel tasarım saksıda" },
  { name: "Sarı Orkide", price: "₺680", desc: "Nadir sarı orkide, cam saksıda" },
];

const Orkideler = () => {
  return (
    <SiteLayout>
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={orkideImage} alt="Orkideler" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>
        <div className="relative z-10 text-center text-background">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4">Orkideler</h1>
          <p className="text-background/80 text-lg max-w-lg mx-auto">Zarafet ve şıklığın sembolü, uzun ömürlü orkide çeşitlerimiz</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img src={orkideImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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

export default Orkideler;
