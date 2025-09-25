import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import CheckoutHeader from "../components/header/CheckoutHeader";
import Footer from "../components/footer/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";

const Checkout = () => {
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  
  // Mock cart data - in a real app this would come from state management
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pantheon Ring",
      price: "€2,450",
      quantity: 1,
      image: pantheonImage,
      size: "54 EU / 7 US"
    },
    {
      id: 2,
      name: "Eclipse Earrings", 
      price: "€1,850",
      quantity: 1,
      image: eclipseImage
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(items => items.filter(item => item.id !== id));
    } else {
      setCartItems(items => 
        items.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', ''));
    return sum + (price * item.quantity);
  }, 0);

  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleDiscountSubmit = () => {
    // Handle discount code submission
    console.log("Discount code submitted:", discountCode);
    setShowDiscountInput(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <CheckoutHeader />
      
      <main className="pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Order Summary - moved to single column */}
          <div className="max-w-2xl">
            <div className="bg-muted/20 p-8 rounded-none">
              <h2 className="text-lg font-light text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-muted rounded-none overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-light text-foreground">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                      )}
                      
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 p-0 rounded-none border-muted-foreground/20"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium text-foreground min-w-[2ch] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0 rounded-none border-muted-foreground/20"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="text-foreground font-medium">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Code Section */}
              <div className="mt-8 pt-6 border-t border-muted-foreground/20">
                {!showDiscountInput ? (
                  <button 
                    onClick={() => setShowDiscountInput(true)}
                    className="text-sm text-foreground underline hover:no-underline transition-all"
                  >
                    Discount code
                  </button>
                ) : (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        placeholder="Enter discount code"
                        className="flex-1 rounded-none"
                      />
                      <button 
                        onClick={handleDiscountSubmit}
                        className="text-sm text-foreground underline hover:no-underline transition-all px-2"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-muted-foreground/20 mt-4 pt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">€{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">Free</span>
                </div>
                <div className="flex justify-between text-lg font-medium border-t border-muted-foreground/20 pt-3">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">€{total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;