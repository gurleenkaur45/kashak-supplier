import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { toast } from "sonner";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";

const paymentMethods = [
  {
    id: "cod",
    label: "Cash on Delivery",
    icon: "💵",
    desc: "Pay when you receive",
  },
  { id: "esewa", label: "eSewa", icon: "📱", desc: "Pay via eSewa wallet" },
  { id: "khalti", label: "Khalti", icon: "📲", desc: "Pay via Khalti" },
];

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const [payment, setPayment] = useState("cod");
  const [submitted, setSubmitted] = useState(false);

  const deliveryFee = totalPrice >= 5000 ? 0 : 200;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
    toast.success("Order placed successfully! 🎉");
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-success" />
        </div>
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">
          Order Placed!
        </h1>
        <p className="text-muted-foreground mb-6">
          Thank you for shopping with Kasak Traders & Suppliers. Your order will
          be delivered soon.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground mb-4">
          Your cart is empty. Add items before checkout.
        </p>
        <Link to="/shop" className="text-primary hover:underline">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/cart"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Cart
      </Link>
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">
        Checkout
      </h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Delivery Address */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display font-bold text-foreground text-lg mb-4">
              Delivery Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                placeholder="Full Name (पूरा नाम)"
                className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                required
                placeholder="Phone Number"
                type="tel"
                className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                required
                placeholder="Province (प्रदेश)"
                className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                required
                placeholder="District (जिल्ला)"
                className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                required
                placeholder="City / Municipality (नगरपालिका)"
                className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 md:col-span-2"
              />
              <textarea
                required
                placeholder="Detailed Address / Landmark (ठेगाना)"
                rows={2}
                className="bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 md:col-span-2 resize-none"
              />
            </div>
          </div>

          {/* Payment */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-display font-bold text-foreground text-lg mb-4">
              Payment Method
            </h2>
            <div className="space-y-3">
              {paymentMethods.map((m) => (
                <label
                  key={m.id}
                  className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${
                    payment === m.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={m.id}
                    checked={payment === m.id}
                    onChange={(e) => setPayment(e.target.value)}
                    className="accent-primary"
                  />
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {m.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{m.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-card border border-border rounded-lg p-6 h-fit sticky top-20">
          <h2 className="font-display font-bold text-foreground text-lg mb-4">
            Order Summary
          </h2>
          <div className="space-y-2 mb-4">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground truncate mr-2">
                  {product.name} ×{quantity}
                </span>
                <span className="text-foreground flex-shrink-0">
                  {formatPrice(product.price * quantity)}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="text-success font-medium">
                {deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee)}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-display text-xl font-bold text-primary">
                {formatPrice(totalPrice + deliveryFee)}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-lg font-display font-semibold hover:opacity-90 transition-opacity"
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
