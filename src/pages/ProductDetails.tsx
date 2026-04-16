import { useParams, Link } from "react-router-dom";
import { ShoppingCart, Heart, ArrowLeft, Check } from "lucide-react";
import { products, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <p className="text-muted-foreground text-lg">Product not found</p>
        <Link
          to="/shop"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const wishlisted = isInWishlist(product.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/shop"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Shop
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="relative rounded-lg overflow-hidden bg-card border border-border">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover"
          />
          {product.dashainOffer && (
            <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded">
              🔥 New Year Sale
            </span>
          )}
        </div>

        <div>
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-3xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="text-muted-foreground mb-6">{product.description}</p>

          <div className="bg-card border border-border rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-foreground text-sm mb-2">
              Compatibility
            </h3>
            <p className="text-sm text-muted-foreground">
              {product.compatibility}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <Check className="w-4 h-4 text-success" />
            <span className="text-sm text-success font-medium">In Stock</span>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => addItem(product)}
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-lg font-display font-semibold hover:opacity-90 transition-opacity"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button
              onClick={() => toggleItem(product)}
              className={`px-4 py-3 rounded-lg border transition-colors ${
                wishlisted
                  ? "bg-primary/20 border-primary text-primary"
                  : "border-border text-muted-foreground hover:text-primary hover:border-primary"
              }`}
            >
              <Heart
                className="w-5 h-5"
                fill={wishlisted ? "currentColor" : "none"}
              />
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
