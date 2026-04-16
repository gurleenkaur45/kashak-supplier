import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search, Menu, X, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";

const Navbar = () => {
  const { totalItems } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/cart", label: "Cart" },
    { to: "/checkout", label: "Checkout" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-lg leading-none text-foreground">
                Kasak Traders & Suppliers
              </h1>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/shop"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <Search className="w-5 h-5" />
            </Link>
            <Link
              to="/cart"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground relative"
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              to="/login"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground relative"
            >
              <Heart className="w-5 h-5" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center font-bold">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link
              to="/login"
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <User className="w-5 h-5" />
            </Link>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
