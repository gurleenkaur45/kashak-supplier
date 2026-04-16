import { Link } from "react-router-dom";
import { Product, formatPrice } from "@/data/products";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden card-hover">
      <div className="relative overflow-hidden aspect-square">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
        {product.dashainOffer && (
          <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
            🔥 New Year Sale
          </span>
        )}
        <button
          onClick={() => toggleItem(product)}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            wishlisted
              ? "bg-primary text-primary-foreground"
              : "bg-card/80 text-muted-foreground hover:text-primary"
          }`}
        >
          <Heart
            className="w-4 h-4"
            fill={wishlisted ? "currentColor" : "none"}
          />
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-display font-bold text-lg text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <button
          onClick={() => addItem(product)}
          className="w-full flex items-center justify-center gap-2 bg-muted hover:bg-primary hover:text-primary-foreground text-foreground text-sm font-medium py-2 rounded-md transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
