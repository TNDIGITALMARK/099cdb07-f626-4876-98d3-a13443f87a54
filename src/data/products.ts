export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
  description: string;
  features: string[];
  inStock: boolean;
  sizes?: string[];
}

export const products: Product[] = [
  // Longboards
  {
    id: "1",
    name: "Performance Longboard",
    price: 899,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=400&auto=format&fit=crop",
    category: "Longboards",
    rating: 4.8,
    isSale: true,
    description: "Perfect for beginners and intermediate surfers. This classic longboard offers excellent stability and smooth rides.",
    features: ["9'6\" length", "Foam construction", "Soft top", "Triple fin setup"],
    inStock: true
  },
  {
    id: "2",
    name: "Classic Wooden Longboard",
    price: 1299,
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=400&auto=format&fit=crop",
    category: "Longboards",
    rating: 4.9,
    isNew: true,
    description: "Handcrafted wooden longboard with traditional styling and modern performance.",
    features: ["10' length", "Bamboo construction", "Classic single fin", "Handmade"],
    inStock: true
  },

  // Shortboards
  {
    id: "3",
    name: "High Performance Shortboard",
    price: 749,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop",
    category: "Shortboards",
    rating: 4.7,
    description: "Designed for advanced surfers seeking maximum performance and maneuverability.",
    features: ["6'2\" length", "Carbon fiber", "Thruster setup", "Competition ready"],
    inStock: true
  },

  // Wetsuits
  {
    id: "4",
    name: "Women's Full Wetsuit",
    price: 350,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop",
    category: "Wetsuits",
    rating: 4.6,
    description: "Premium 3/2mm wetsuit designed specifically for women. Perfect for Costa Rican waters.",
    features: ["3/2mm thickness", "Flexible neoprene", "Back zip", "Thermal lining"],
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "5",
    name: "Men's Spring Suit",
    price: 189,
    originalPrice: 229,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=400&auto=format&fit=crop",
    category: "Wetsuits",
    rating: 4.4,
    isSale: true,
    description: "Lightweight spring suit perfect for warm water surfing and flexibility.",
    features: ["2mm thickness", "Sleeveless", "Back zip", "Quick dry"],
    inStock: true,
    sizes: ["S", "M", "L", "XL", "XXL"]
  },

  // Accessories
  {
    id: "6",
    name: "Carbon's Fin Set",
    price: 120,
    image: "https://images.unsplash.com/photo-1502675135487-e971002a6adb?q=80&w=400&auto=format&fit=crop",
    category: "Fins",
    rating: 4.5,
    description: "High-performance fin set with carbon fiber construction for maximum speed and control.",
    features: ["Carbon fiber", "Thruster setup", "Medium size", "Futures compatible"],
    inStock: true
  },
  {
    id: "7",
    name: "Tropical Rashguard",
    price: 60,
    image: "https://images.unsplash.com/photo-1566479179817-d1b6c17deea4?q=80&w=400&auto=format&fit=crop",
    category: "Rashguards",
    rating: 4.3,
    isNew: true,
    description: "UV protective rashguard with tropical Costa Rican print. UPF 50+ protection.",
    features: ["UPF 50+", "Quick dry", "Long sleeve", "Tropical print"],
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "8",
    name: "Premium Surf Leash",
    price: 35,
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=400&auto=format&fit=crop",
    category: "Accessories",
    rating: 4.7,
    description: "Heavy-duty surf leash with swivel connection and comfortable ankle strap.",
    features: ["6ft length", "Swivel connection", "Comfortable strap", "Heavy duty"],
    inStock: true
  }
];

export const featuredProducts = products.filter(p => p.isNew || p.isSale || p.rating >= 4.7).slice(0, 4);

export const categories = [
  "All",
  "Longboards", 
  "Shortboards",
  "Wetsuits",
  "Fins",
  "Rashguards",
  "Accessories"
];