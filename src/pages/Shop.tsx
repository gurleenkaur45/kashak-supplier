import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { products, categories, brands, Category } from "@/data/products";

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name", label: "Name A-Z" },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "">(
    (searchParams.get("category") as Category) || ""
  );
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30000]);
  const [sort, setSort] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (selectedBrand && p.brand !== selectedBrand) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      return true;
    });

    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "name": result.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return result;
  }, [search, selectedCategory, selectedBrand, priceRange, sort]);

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("");
    setSelectedBrand("");
    setPriceRange([0, 30000]);
    setSort("default");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl font-bold text-foreground mb-2">Shop All Parts</h1>
      <p className="text-muted-foreground mb-8">Browse our complete collection of automotive parts and equipment</p>

      {/* Search & Sort Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search parts... (e.g., Brake Pad, Oil Filter)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          {sortOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 bg-muted text-foreground px-4 py-2.5 rounded-lg text-sm font-medium"
        >
          <SlidersHorizontal className="w-4 h-4" /> Filters
        </button>
      </div>

      <div className="flex gap-6">
        {/* Sidebar Filters */}
        <aside className={`${showFilters ? "block" : "hidden"} md:block w-full md:w-64 flex-shrink-0`}>
          <div className="bg-card border border-border rounded-lg p-4 space-y-6 sticky top-20">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-semibold text-foreground">Filters</h3>
              <button onClick={clearFilters} className="text-xs text-primary hover:underline">Clear All</button>
            </div>

            {/* Category */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Vehicle Type</h4>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`w-full text-left text-sm px-3 py-1.5 rounded transition-colors ${!selectedCategory ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  All Types
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-left text-sm px-3 py-1.5 rounded transition-colors ${selectedCategory === cat.id ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Brand */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Brand</h4>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-background border border-border rounded px-3 py-1.5 text-sm text-foreground"
              >
                <option value="">All Brands</option>
                {brands.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Max Price (NPR)</h4>
              <input
                type="range"
                min={0}
                max={30000}
                step={500}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-primary"
              />
              <p className="text-xs text-muted-foreground mt-1">Up to Rs. {priceRange[1].toLocaleString()}</p>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-sm text-muted-foreground mb-4">{filtered.length} products found</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-2">No products found</p>
              <button onClick={clearFilters} className="text-primary text-sm hover:underline">Clear filters</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
