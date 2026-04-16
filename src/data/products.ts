export type Category = "bike" | "car" | "truck" | "ambulance" | "tractor";
import brakePadImg from "../assets//Bajaj Pulsar Brake Pad.png";
import oil from "../assets/oil.png";
import chain from "../assets/a.png";
import clutchImg from "../assets/3.png";
import brake from "../assets/brake shoe.png";
import a from "../assets/a.png";
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: Category;
  brand: string;
  image: string;
  description: string;
  compatibility: string;
  inStock: boolean;
  featured?: boolean;
  dashainOffer?: boolean;
}

export const categories: {
  id: Category;
  label: string;
  icon: string;
  nepali: string;
}[] = [
  { id: "bike", label: "Bike Parts", icon: "🏍️", nepali: "मोटरसाइकल" },
  { id: "car", label: "Car Parts", icon: "🚗", nepali: "कार" },
  { id: "truck", label: "Truck Parts", icon: "🚚", nepali: "ट्रक" },
  {
    id: "ambulance",
    label: "Ambulance Equipment",
    icon: "🚑",
    nepali: "एम्बुलेन्स",
  },
  {
    id: "tractor",
    label: "Tractor / Heavy Equipment",
    icon: "🚜",
    nepali: "ट्र्याक्टर",
  },
];

export const brands = [
  "Bajaj",
  "Hero",
  "Yamaha",
  "Suzuki",
  "Hyundai",
  "Tata",
  "Ashok Leyland",
  "Mahindra",
  "Exide",
  "Generic",
];

export const products: Product[] = [
  {
    id: "bike-1",
    name: "Bajaj Pulsar Brake Pad",
    price: 850,
    category: "bike",
    brand: "Bajaj",
    image: brakePadImg,
    description:
      "High-quality brake pad for Bajaj Pulsar 150/180/200. Ensures smooth and safe braking on Nepal's roads.",
    compatibility: "Bajaj Pulsar 150, 180, 200NS, 220F",
    inStock: true,
    featured: true,
  },
  {
    id: "bike-2",
    name: "Hero Splendor Engine Oil (1L)",
    price: 750,
    category: "bike",
    brand: "Hero",
    image: oil,
    description:
      "Premium 4-stroke engine oil for Hero Splendor. Provides superior engine protection in all weather conditions.",
    compatibility: "Hero Splendor, Splendor Plus, Splendor Pro",
    inStock: true,
    dashainOffer: true,
    originalPrice: 900,
  },
  {
    id: "bike-3",
    name: "Yamaha FZ Chain Set",
    price: 2500,
    category: "bike",
    brand: "Yamaha",
    image: a,
    description:
      "Complete chain and sprocket set for Yamaha FZ series. Heavy-duty for long-lasting performance.",
    compatibility: "Yamaha FZ, FZS, FZ-S V3",
    inStock: true,
    featured: true,
  },
  {
    id: "car-1",
    name: "Suzuki Alto Clutch Plate",
    price: 3200,
    category: "car",
    brand: "Suzuki",
    image: clutchImg,
    description:
      "Genuine quality clutch plate for Suzuki Alto. Perfect for city driving in Kathmandu.",
    compatibility: "Suzuki Alto 800, Alto K10",
    inStock: true,
    featured: true,
    dashainOffer: true,
    originalPrice: 3800,
  },
  {
    id: "car-2",
    name: "Hyundai i10 Oil Filter",
    price: 600,
    category: "car",
    brand: "Hyundai",
    image:
      "https://m.media-amazon.com/images/I/61krSamN3tS._AC_UF894,1000_QL80_.jpg",
    description:
      "OEM-grade oil filter for Hyundai i10. Keeps your engine clean and running efficiently.",
    compatibility: "Hyundai i10, Grand i10, i20",
    inStock: true,
  },
  {
    id: "car-3",
    name: "Car Battery (Exide)",
    price: 12000,
    category: "car",
    brand: "Exide",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop",
    description:
      "Exide heavy-duty car battery. 18-month warranty. Reliable starting in cold Himalayan weather.",
    compatibility: "Universal fit for most cars",
    inStock: true,
    featured: true,
  },
  {
    id: "truck-1",
    name: "Tata Truck Brake Shoe",
    price: 4500,
    category: "truck",
    brand: "Tata",
    image: brake,
    description:
      "Heavy-duty brake shoe for Tata trucks. Designed for mountain roads and heavy loads.",
    compatibility: "Tata LPT 1613, 2518, 3118",
    inStock: true,
    dashainOffer: true,
    originalPrice: 5200,
  },
  {
    id: "truck-2",
    name: "Ashok Leyland Air Filter",
    price: 2200,
    category: "truck",
    brand: "Ashok Leyland",
    image:
      "https://cdn11.bigcommerce.com/s-26lddf/images/stencil/1280x1280/products/17687/35797/p500955-donaldson-air-filter_western-filters__52516.1774013446.jpg?c=2",
    description:
      "High-capacity air filter for Ashok Leyland trucks. Filters dust on unpaved Nepali roads.",
    compatibility: "Ashok Leyland Ecomet, Captain, U-Truck",
    inStock: true,
  },
  {
    id: "truck-3",
    name: "Heavy Duty Tyre",
    price: 25000,
    category: "truck",
    brand: "Generic",
    image:
      "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=400&h=400&fit=crop",
    description:
      "Premium heavy-duty truck tyre. Deep tread for grip on mountain passes and highways.",
    compatibility: "10R20, fits most heavy trucks",
    inStock: true,
    featured: true,
  },
  {
    id: "amb-1",
    name: "Oxygen Cylinder",
    price: 18000,
    category: "ambulance",
    brand: "Generic",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400&h=400&fit=crop",
    description:
      "Medical-grade oxygen cylinder for ambulances. Essential equipment for emergency services across Nepal.",
    compatibility: "Standard medical fitting",
    inStock: true,
    featured: true,
  },
  {
    id: "amb-2",
    name: "Stretcher Bed",
    price: 15000,
    category: "ambulance",
    brand: "Generic",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
    description:
      "Foldable aluminium stretcher bed. Lightweight yet sturdy for patient transport.",
    compatibility: "Universal ambulance fit",
    inStock: true,
  },
  {
    id: "amb-3",
    name: "First Aid Kit",
    price: 2000,
    category: "ambulance",
    brand: "Generic",
    image:
      "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=400&fit=crop",
    description:
      "Complete first aid kit with 50+ items. Essential for vehicles, homes, and ambulances.",
    compatibility: "Universal",
    inStock: true,
    dashainOffer: true,
    originalPrice: 2500,
  },
  {
    id: "tractor-1",
    name: "Mahindra Tractor Disc Plate",
    price: 6500,
    category: "tractor",
    brand: "Mahindra",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/WE/QI/KP/4810876/tractor-brake-plate-500x500.jpg",
    description:
      "OEM-quality disc plate for Mahindra tractors. Built for Terai farming conditions.",
    compatibility: "Mahindra 275 DI, 475 DI, 575 DI",
    inStock: true,
    featured: true,
  },
  {
    id: "tractor-2",
    name: "Hydraulic Pump",
    price: 14000,
    category: "tractor",
    brand: "Generic",
    image:
      "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=400&h=400&fit=crop",
    description:
      "High-pressure hydraulic pump for tractors and heavy equipment. Reliable performance in demanding conditions.",
    compatibility: "Universal fit for most tractors",
    inStock: true,
  },
];

export const formatPrice = (price: number): string => {
  return `Rs. ${price.toLocaleString("en-NP")}`;
};

export const formatPriceNepali = (price: number): string => {
  return `रु ${price.toLocaleString("en-NP")}`;
};
