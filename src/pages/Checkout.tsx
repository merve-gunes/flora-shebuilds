import CheckoutHeader from "../components/header/CheckoutHeader";
import Footer from "../components/footer/Footer";

const Checkout = () => {
  // Mock cart data - in a real app this would come from state management
  const cartItems = [
    {
      id: 1,
      name: "Pantheon Ring",
      price: "€2,450",
      quantity: 1,
      image: "/pantheon.jpg",
      size: "54 EU / 7 US"
    },
    {
      id: 2,
      name: "Eclipse Earrings",
      price: "€1,850",
      quantity: 1,
      image: "/eclipse.jpg"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('€', '').replace(',', ''));
    return sum + (price * item.quantity);
  }, 0);

  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <CheckoutHeader />
      
      <main className="pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - will be for checkout form later */}
            <div className="lg:order-1">
              <h1 className="text-2xl font-light text-foreground mb-8">Checkout</h1>
              {/* Checkout form will go here */}
              <div className="text-muted-foreground">
                Checkout form coming soon...
              </div>
            </div>

            {/* Right side - Shopping bag content */}
            <div className="lg:order-2">
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
                        <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-foreground font-medium">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-muted-foreground/20 mt-8 pt-6 space-y-3">
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;