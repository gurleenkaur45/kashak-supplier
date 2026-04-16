import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";
import { toast } from "sonner";

interface WishlistContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleItem: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    setItems((prev) => [...prev, product]);
    toast.success(`${product.name} added to wishlist!`);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((p) => p.id !== productId));
    toast.info("Removed from wishlist");
  };

  const isInWishlist = (productId: string) => items.some((p) => p.id === productId);

  const toggleItem = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, isInWishlist, toggleItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};
