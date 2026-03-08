import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-full sm:w-[420px] bg-background border-l border-border/50 flex flex-col">
        <SheetHeader className="border-b border-border/50 pb-4">
          <SheetTitle className="font-display text-xl text-foreground flex items-center gap-2">
            <ShoppingBag size={20} />
            Sepetim ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center">
              <ShoppingBag size={32} className="text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Sepetiniz boş</p>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="rounded-full border-border"
            >
              Alışverişe Devam Et
            </Button>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 px-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl bg-card border border-border/30"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="font-display text-sm text-foreground truncate pr-2">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-foreground transition-colors shrink-0"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <p className="text-primary font-semibold text-sm mt-1">
                      {item.price}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary/50 transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-secondary/50 transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-border/50 pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">Toplam</span>
                <span className="font-display text-xl text-primary font-semibold">
                  ₺{totalPrice.toLocaleString("tr-TR")}
                </span>
              </div>
              <Button className="w-full btn-glow bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 text-base transition-all duration-300">
                Ödemeye Geç
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="w-full text-muted-foreground hover:text-foreground text-xs"
              >
                Sepeti Temizle
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
