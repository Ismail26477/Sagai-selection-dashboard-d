// Product images
import silkSaree from "@/assets/products/silk-saree.jpg";
import lehenga from "@/assets/products/lehenga.jpg";
import kurti from "@/assets/products/kurti.jpg";
import dupatta from "@/assets/products/dupatta.jpg";
import bridalSet from "@/assets/products/bridal-set.jpg";
import anarkali from "@/assets/products/anarkali.jpg";
import chanderiSaree from "@/assets/products/chanderi-saree.jpg";
import palazzoSet from "@/assets/products/palazzo-set.jpg";

export interface ProductVariant {
  id: string;
  name: string;
  size: string;
  color: string;
  sku: string;
  stock: number;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  stock: number;
  status: "Active" | "Low Stock" | "Out of Stock";
  image: string;
  description?: string;
  fabric?: string;
  occasion?: string;
  variants?: ProductVariant[];
  images?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Silk Banarasi Saree",
    category: "Sarees",
    price: 24999,
    originalPrice: 29999,
    stock: 45,
    status: "Active",
    image: silkSaree,
    description: "Exquisite handwoven Banarasi silk saree with intricate zari work. Perfect for weddings and festive occasions.",
    fabric: "Pure Silk",
    occasion: "Wedding, Festive",
    variants: [
      { id: "v1", name: "Red/Gold", size: "Free Size", color: "Red", sku: "BSS-RG-001", stock: 15, price: 24999 },
      { id: "v2", name: "Maroon/Gold", size: "Free Size", color: "Maroon", sku: "BSS-MG-001", stock: 12, price: 24999 },
      { id: "v3", name: "Green/Gold", size: "Free Size", color: "Green", sku: "BSS-GG-001", stock: 18, price: 26999 },
    ],
  },
  {
    id: 2,
    name: "Designer Lehenga Set",
    category: "Lehengas",
    price: 45999,
    originalPrice: 54999,
    stock: 12,
    status: "Active",
    image: lehenga,
    description: "Stunning pink designer lehenga with heavy embroidery and sequin work. Includes choli and dupatta.",
    fabric: "Georgette",
    occasion: "Wedding, Reception",
    variants: [
      { id: "v1", name: "Pink/Gold", size: "S", color: "Pink", sku: "DLS-PG-S", stock: 3, price: 45999 },
      { id: "v2", name: "Pink/Gold", size: "M", color: "Pink", sku: "DLS-PG-M", stock: 4, price: 45999 },
      { id: "v3", name: "Pink/Gold", size: "L", color: "Pink", sku: "DLS-PG-L", stock: 3, price: 45999 },
      { id: "v4", name: "Pink/Gold", size: "XL", color: "Pink", sku: "DLS-PG-XL", stock: 2, price: 47999 },
    ],
  },
  {
    id: 3,
    name: "Cotton Kurti Pack",
    category: "Kurtis",
    price: 7499,
    originalPrice: 8999,
    stock: 156,
    status: "Active",
    image: kurti,
    description: "Comfortable cotton kurti with beautiful floral embroidery. Perfect for daily wear and casual occasions.",
    fabric: "Cotton",
    occasion: "Casual, Daily Wear",
    variants: [
      { id: "v1", name: "Teal Blue", size: "S", color: "Teal", sku: "CKP-TB-S", stock: 35, price: 7499 },
      { id: "v2", name: "Teal Blue", size: "M", color: "Teal", sku: "CKP-TB-M", stock: 45, price: 7499 },
      { id: "v3", name: "Teal Blue", size: "L", color: "Teal", sku: "CKP-TB-L", stock: 40, price: 7499 },
      { id: "v4", name: "Teal Blue", size: "XL", color: "Teal", sku: "CKP-TB-XL", stock: 36, price: 7999 },
    ],
  },
  {
    id: 4,
    name: "Embroidered Dupatta",
    category: "Dupattas",
    price: 6499,
    stock: 0,
    status: "Out of Stock",
    image: dupatta,
    description: "Beautiful embroidered dupatta with traditional border work and tassels.",
    fabric: "Silk Blend",
    occasion: "Festive, Traditional",
    variants: [
      { id: "v1", name: "Orange/Gold", size: "2.5m", color: "Orange", sku: "ED-OG-01", stock: 0, price: 6499 },
      { id: "v2", name: "Red/Gold", size: "2.5m", color: "Red", sku: "ED-RG-01", stock: 0, price: 6499 },
    ],
  },
  {
    id: 5,
    name: "Wedding Bridal Set",
    category: "Bridal",
    price: 109999,
    originalPrice: 129999,
    stock: 8,
    status: "Active",
    image: bridalSet,
    description: "Complete bridal set with heavy embroidered lehenga, choli, and dupatta. Includes traditional jewelry set.",
    fabric: "Velvet & Net",
    occasion: "Wedding",
    variants: [
      { id: "v1", name: "Red/Gold", size: "S", color: "Red", sku: "WBS-RG-S", stock: 2, price: 109999 },
      { id: "v2", name: "Red/Gold", size: "M", color: "Red", sku: "WBS-RG-M", stock: 3, price: 109999 },
      { id: "v3", name: "Red/Gold", size: "L", color: "Red", sku: "WBS-RG-L", stock: 2, price: 109999 },
      { id: "v4", name: "Red/Gold", size: "XL", color: "Red", sku: "WBS-RG-XL", stock: 1, price: 114999 },
    ],
  },
  {
    id: 6,
    name: "Anarkali Suit",
    category: "Suits",
    price: 16999,
    originalPrice: 19999,
    stock: 34,
    status: "Active",
    image: anarkali,
    description: "Elegant navy blue Anarkali suit with golden embroidery. Floor-length design with matching dupatta.",
    fabric: "Georgette",
    occasion: "Party, Festive",
    variants: [
      { id: "v1", name: "Navy/Gold", size: "S", color: "Navy", sku: "AS-NG-S", stock: 8, price: 16999 },
      { id: "v2", name: "Navy/Gold", size: "M", color: "Navy", sku: "AS-NG-M", stock: 10, price: 16999 },
      { id: "v3", name: "Navy/Gold", size: "L", color: "Navy", sku: "AS-NG-L", stock: 9, price: 16999 },
      { id: "v4", name: "Navy/Gold", size: "XL", color: "Navy", sku: "AS-NG-XL", stock: 7, price: 17999 },
    ],
  },
  {
    id: 7,
    name: "Chanderi Saree",
    category: "Sarees",
    price: 28999,
    originalPrice: 32999,
    stock: 5,
    status: "Low Stock",
    image: chanderiSaree,
    description: "Delicate Chanderi silk saree in pastel lavender with silver border. Lightweight and elegant.",
    fabric: "Chanderi Silk",
    occasion: "Party, Festive",
    variants: [
      { id: "v1", name: "Lavender/Silver", size: "Free Size", color: "Lavender", sku: "CS-LS-001", stock: 5, price: 28999 },
    ],
  },
  {
    id: 8,
    name: "Palazzo Set",
    category: "Indo-Western",
    price: 10999,
    originalPrice: 12999,
    stock: 67,
    status: "Active",
    image: palazzoSet,
    description: "Modern Indo-Western palazzo set in coral pink. Contemporary design with elegant draping.",
    fabric: "Crepe",
    occasion: "Party, Casual",
    variants: [
      { id: "v1", name: "Coral Pink", size: "S", color: "Coral", sku: "PS-CP-S", stock: 15, price: 10999 },
      { id: "v2", name: "Coral Pink", size: "M", color: "Coral", sku: "PS-CP-M", stock: 20, price: 10999 },
      { id: "v3", name: "Coral Pink", size: "L", color: "Coral", sku: "PS-CP-L", stock: 18, price: 10999 },
      { id: "v4", name: "Coral Pink", size: "XL", color: "Coral", sku: "PS-CP-XL", stock: 14, price: 11999 },
    ],
  },
];

export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};
