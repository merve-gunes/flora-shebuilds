import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Truck, Shield, RotateCcw, Minus, Plus } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import FloraBreadcrumb from "@/components/FloraBreadcrumb";
import { getProductById, getProductsByCategory, type Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [isFav, setIsFav] = useState(false);

  if (!product) {
    return (
      <SiteLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl text-foreground mb-3">Ürün Bulunamadı</h1>
            <p className="text-muted-foreground mb-6">Aradığınız ürün mevcut değil.</p>
            <Link to="/">
              <Button className="rounded-full">Ana Sayfaya Dön</Button>
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    toast({
      title: "🌸 Sepete eklendi!",
      description: `${quantity}x ${product.name} sepetinize eklendi.`,
    });
  };

  return (
    <SiteLayout>
      <div className="container mx-auto px-4 sm:px-6 pt-4">
        <FloraBreadcrumb
          items={[
            { label: product.category, href: product.categorySlug },
            { label: product.name },
          ]}
        />
      </div>

      <section className="container mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted/10">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center py-4">
            <p className="text-sm text-primary tracking-wider uppercase mb-2">{product.category}</p>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              {product.name}
            </h1>
            <p className="text-2xl sm:text-3xl text-primary font-semibold mb-6">{product.price}</p>
            <p className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-8">{product.desc}</p>

            {product.details && product.details.length > 0 && (
              <ul className="space-y-2 mb-8">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <div className="flex items-center border border-border rounded-full overflow-hidden">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 hover:bg-secondary/50 transition-colors">
                  <Minus size={16} />
                </button>
                <span className="px-5 py-3 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 hover:bg-secondary/50 transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="flex-1 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 py-6 text-base"
              >
                <ShoppingBag size={18} />
                Sepete Ekle
              </Button>
              <button
                onClick={() => setIsFav(!isFav)}
                className={`p-3 rounded-full border transition-all duration-300 ${
                  isFav ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <Heart size={20} fill={isFav ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
              <div className="flex flex-col items-center text-center gap-1.5">
                <Truck size={20} className="text-primary" />
                <span className="text-xs text-muted-foreground">Aynı Gün Teslimat</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <Shield size={20} className="text-primary" />
                <span className="text-xs text-muted-foreground">Taze Çiçek Garantisi</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <RotateCcw size={20} className="text-primary" />
                <span className="text-xs text-muted-foreground">Koşulsuz İade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2
              className="text-2xl sm:text-3xl text-foreground mb-8 text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Benzer Ürünler
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <RelatedCard key={rp.id} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteLayout>
  );
};

const RelatedCard = ({ product }: { product: Product }) => (
  <Link
    to={`/urun/${product.id}`}
    className="group bg-card rounded-2xl overflow-hidden card-shadow transition-all duration-500 hover:-translate-y-2"
  >
    <div className="aspect-square overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="p-5">
      <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
      <p className="text-muted-foreground text-sm mb-2 line-clamp-1">{product.desc}</p>
      <span className="text-primary font-semibold">{product.price}</span>
    </div>
  </Link>
);

export default ProductDetail;
