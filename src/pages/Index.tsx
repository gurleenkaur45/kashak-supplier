import { Link } from "react-router-dom";
import {
  ArrowRight,
  Truck,
  Shield,
  Clock,
  ChevronRight,
  Star,
} from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, formatPrice } from "@/data/products";
import heroBanner from "@/assets/hero-banner.jpg";
import dashainSale from "@/assets/dashain-sale.jpg";

const featuredProducts = products.filter((p) => p.featured);
const dashainProducts = products.filter((p) => p.dashainOffer);

const testimonials = [
  {
    name: "Om Prakash Thapa",
    location: "Kathmandu",
    text: "Best quality brake pads for my Pulsar. Fast delivery to Kathmandu!",
    rating: 5,
  },
  {
    name: "Sita basyal",
    location: "Pokhara",
    text: "Ordered car battery online, received within 3 days. Excellent service!",
    rating: 5,
  },
  {
    name: "Biku Gurung",
    location: "Chitwan",
    text: "Great prices on tractor parts. My Mahindra runs like new!",
    rating: 4,
  },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <img
          src={heroBanner}
          alt="Nepal highway with vehicles"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl animate-fade-in">
            <span className="inline-block bg-primary/20 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-4">
              🇳🇵 Nepal's #1 Auto Parts Store
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Quality Parts for{" "}
              <span className="text-gradient">Every Vehicle</span>
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              From Bajaj Pulsar to Tata Trucks — genuine spare parts delivered
              across Nepal. Bikes, Cars, Trucks, Ambulances & Heavy Equipment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display font-semibold hover:opacity-90 transition-opacity"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/shop?category=bike"
                className="inline-flex items-center gap-2 bg-muted text-foreground px-6 py-3 rounded-lg font-display font-semibold hover:bg-muted/80 transition-colors"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features bar */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Truck,
                label: "Free Delivery",
                sub: "Orders above Rs. 5,000",
              },
              {
                icon: Shield,
                label: "Genuine Parts",
                sub: "100% authentic guarantee",
              },
              {
                icon: Clock,
                label: "Fast Shipping",
                sub: "2-5 days across Nepal",
              },
              {
                icon: Star,
                label: "Best Prices",
                sub: "NPR competitive rates",
              },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {label}
                  </p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
          Shop by Vehicle Type
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="bg-card border border-border rounded-lg p-6 text-center card-hover group"
            >
              <span className="text-4xl block mb-3">{cat.icon}</span>
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {cat.label}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">{cat.nepali}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Featured Products
          </h2>
          <Link
            to="/shop"
            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Dashain Sale Banner */}
      <section className="container mx-auto px-4 pb-16">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src={dashainSale}
            alt="New Year Sale"
            loading="lazy"
            className="w-full h-64 md:h-80 object-cover"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent flex items-center">
            <div className="p-8 max-w-md">
              <span className="text-primary font-display font-bold text-sm">
                🔥 New Year SALE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
                Up to 20% Off!
              </h2>
              <p className="text-muted-foreground mb-4">
                Celebrate New Year with special discounts on selected parts.
                Limited time offer!
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Shop Offers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dashain Offer Products */}
      {dashainProducts.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            🎉 New Year Special Offers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dashainProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="bg-card border-y border-border py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-primary fill-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.location}, Nepal
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
