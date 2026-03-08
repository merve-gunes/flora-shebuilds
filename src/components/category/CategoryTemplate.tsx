import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { SlidersHorizontal, X } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

export interface CategoryProduct {
  name: string;
  price: string;
  desc: string;
  image?: string;
}

interface CategoryTemplateProps {
  title: string;
  subtitle: string;
  heroImage: string;
  products: CategoryProduct[];
}

const parsePrice = (price: string): number => {
  return parseInt(price.replace(/[^\d]/g, ""), 10) || 0;
};

const CategoryTemplate = ({ title, subtitle, heroImage, products }: CategoryTemplateProps) => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);
  const [filterOpen, setFilterOpen] = useState(false);
  const { addItem } = useCart();
  const { toast } = useToast();

  const maxPrice = useMemo(
    () => Math.max(...products.map((p) => parsePrice(p.price)), 2000),
    [products]
  );

  const filteredProducts = useMemo(
    () =>
      products.filter((p) => {
        const val = parsePrice(p.price);
        return val >= priceRange[0] && val <= priceRange[1];
      }),
    [products, priceRange]
  );

  const resetFilter = () => setPriceRange([0, maxPrice]);

  const handleAddToCart = (product: CategoryProduct) => {
    addItem({
      id: `${title}-${product.name}`,
      name: product.name,
      price: product.price,
      image: product.image || heroImage,
    });
    toast({
      title: "🌸 Ürün sepete eklendi!",
      description: `${product.name} sepetinize başarıyla eklendi.`,
    });
  };

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative h-[36vh] sm:h-[44vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/35" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-3 text-background">
            {title}
          </h1>
          <p className="text-background/80 text-base sm:text-lg max-w-lg mx-auto">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-8">
            {/* Sidebar — desktop */}
            <aside className="hidden lg:block w-56 shrink-0">
              <div className="sticky top-24 space-y-6">
                <h3 className="font-display text-lg text-foreground">Fiyat Aralığı</h3>
                <Slider
                  min={0}
                  max={maxPrice}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>₺{priceRange[0]}</span>
                  <span>₺{priceRange[1]}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilter}
                  className="text-xs text-muted-foreground hover:text-foreground px-0"
                >
                  Filtreyi Sıfırla
                </Button>
              </div>
            </aside>

            {/* Main area */}
            <div className="flex-1 min-w-0">
              {/* Mobile filter toggle */}
              <div className="lg:hidden flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">{filteredProducts.length} ürün</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFilterOpen(!filterOpen)}
                  className="gap-1.5 border-border text-foreground"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" />
                  Filtre
                </Button>
              </div>

              {/* Mobile filter panel */}
              {filterOpen && (
                <div className="lg:hidden mb-6 p-4 rounded-xl bg-card border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-base text-foreground">Fiyat Aralığı</h3>
                    <button onClick={() => setFilterOpen(false)}>
                      <X className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <Slider
                    min={0}
                    max={maxPrice}
                    step={50}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>₺{priceRange[0]}</span>
                    <span>₺{priceRange[1]}</span>
                  </div>
                </div>
              )}

              {/* Item count — desktop */}
              <p className="hidden lg:block text-sm text-muted-foreground mb-6">
                {filteredProducts.length} ürün
              </p>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image || heroImage}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{product.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold text-lg">{product.price}</span>
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                          className="btn-glow bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300"
                        >
                          Sepete Ekle
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">Bu fiyat aralığında ürün bulunamadı.</p>
                  <Button variant="ghost" onClick={resetFilter} className="mt-3 text-primary">
                    Filtreyi Sıfırla
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default CategoryTemplate;
