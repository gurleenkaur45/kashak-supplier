import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

const Cart = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h1 className="font-display text-2xl font-bold text-foreground mb-2">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-6">Add some parts to get started!</p>
        <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
          Browse Shop <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="bg-card border border-border rounded-lg p-4 flex gap-4">
              <img src={product.image} alt={product.name} className="w-20 h-20 rounded object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <Link to={`/product/${product.id}`} className="font-semibold text-foreground text-sm hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </Link>
                <p className="text-xs text-muted-foreground">{product.brand}</p>
                <p className="font-display font-bold text-primary mt-1">{formatPrice(product.price)}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 bg-muted rounded-lg">
                  <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1.5 hover:text-primary">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-medium text-foreground w-6 text-center">{quantity}</span>
                  <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1.5 hover:text-primary">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-lg p-6 h-fit sticky top-20">
          <h2 className="font-display font-bold text-foreground text-lg mb-4">Order Summary</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">{formatPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Delivery</span>
              <span className="text-success font-medium">{totalPrice >= 5000 ? "FREE" : formatPrice(200)}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="font-display text-xl font-bold text-primary">
                {formatPrice(totalPrice + (totalPrice >= 5000 ? 0 : 200))}
              </span>
            </div>
          </div>
          <Link
            to="/checkout"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-display font-semibold hover:opacity-90 transition-opacity"
          >
            Proceed to Checkout <ArrowRight className="w-4 h-4" />
          </Link>
          <button onClick={clearCart} className="w-full text-center text-sm text-muted-foreground hover:text-destructive mt-3">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
