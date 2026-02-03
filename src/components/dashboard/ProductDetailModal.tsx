import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Edit,
  Trash2,
  Plus,
  Package,
  Tag,
  Palette,
  Ruler,
  Save,
  ImagePlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Product, formatINR } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailModal = ({
  product,
  isOpen,
  onClose,
}: ProductDetailModalProps) => {
  const [activeTab, setActiveTab] = useState("details");
  const [isEditing, setIsEditing] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="badge-success">{status}</Badge>;
      case "Low Stock":
        return <Badge className="badge-warning">{status}</Badge>;
      case "Out of Stock":
        return <Badge className="badge-destructive">{status}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const totalVariantStock = product.variants?.reduce((acc, v) => acc + v.stock, 0) || product.stock;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sticky top-0 z-10 bg-background p-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl font-display">{product.name}</DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                {product.category} • SKU: {product.variants?.[0]?.sku || `PROD-${product.id}`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {getStatusBadge(product.status)}
              <Button
                variant={isEditing ? "default" : "outline"}
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="gap-2"
              >
                {isEditing ? (
                  <>
                    <Save className="w-4 h-4" /> Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4" /> Edit
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="p-6">
          {/* Product Image and Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {discount > 0 && (
                  <div className="absolute top-3 left-3">
                    <Badge className="gradient-primary text-primary-foreground">
                      {discount}% OFF
                    </Badge>
                  </div>
                )}
                {isEditing && (
                  <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button variant="secondary" className="gap-2">
                      <ImagePlus className="w-4 h-4" />
                      Change Image
                    </Button>
                  </div>
                )}
              </div>
              {isEditing && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 gap-2">
                    <ImagePlus className="w-4 h-4" />
                    Add More Images
                  </Button>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Pricing */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Pricing</Label>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-primary">
                    {formatINR(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      {formatINR(product.originalPrice)}
                    </span>
                  )}
                </div>
                {isEditing && (
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <Label htmlFor="price">Selling Price (₹)</Label>
                      <Input
                        id="price"
                        type="number"
                        defaultValue={product.price}
                      />
                    </div>
                    <div>
                      <Label htmlFor="originalPrice">MRP (₹)</Label>
                      <Input
                        id="originalPrice"
                        type="number"
                        defaultValue={product.originalPrice}
                      />
                    </div>
                  </div>
                )}
              </div>

              <Separator />

              {/* Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-muted-foreground flex items-center gap-2">
                    <Package className="w-4 h-4" /> Stock
                  </Label>
                  <p className="text-lg font-semibold">{totalVariantStock} units</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-muted-foreground flex items-center gap-2">
                    <Tag className="w-4 h-4" /> Category
                  </Label>
                  <p className="text-lg font-semibold">{product.category}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-muted-foreground flex items-center gap-2">
                    <Palette className="w-4 h-4" /> Fabric
                  </Label>
                  <p className="text-lg font-semibold">{product.fabric || "N/A"}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-muted-foreground flex items-center gap-2">
                    <Ruler className="w-4 h-4" /> Occasion
                  </Label>
                  <p className="text-lg font-semibold">{product.occasion || "N/A"}</p>
                </div>
              </div>

              <Separator />

              {/* Description */}
              <div className="space-y-2">
                <Label className="text-muted-foreground">Description</Label>
                {isEditing ? (
                  <Textarea
                    defaultValue={product.description}
                    className="min-h-[100px]"
                  />
                ) : (
                  <p className="text-sm leading-relaxed">{product.description}</p>
                )}
              </div>
            </div>
          </div>

          {/* Tabs for Variants and Inventory */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="variants">
                Variants ({product.variants?.length || 0})
              </TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Product Details</h4>
                  <div className="space-y-3">
                    {isEditing ? (
                      <>
                        <div>
                          <Label htmlFor="fabric">Fabric</Label>
                          <Input id="fabric" defaultValue={product.fabric} />
                        </div>
                        <div>
                          <Label htmlFor="occasion">Occasion</Label>
                          <Input id="occasion" defaultValue={product.occasion} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Fabric</span>
                          <span className="font-medium">{product.fabric}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Occasion</span>
                          <span className="font-medium">{product.occasion}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Category</span>
                          <span className="font-medium">{product.category}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-muted-foreground">Status</span>
                          {getStatusBadge(product.status)}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Sales Information</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Total Sales</span>
                      <span className="font-medium">124 units</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Revenue</span>
                      <span className="font-medium">{formatINR(product.price * 124)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Avg. Rating</span>
                      <span className="font-medium">4.5 ⭐</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-muted-foreground">Reviews</span>
                      <span className="font-medium">28 reviews</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="variants" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Product Variants</h4>
                  {isEditing && (
                    <Button size="sm" className="gap-2">
                      <Plus className="w-4 h-4" /> Add Variant
                    </Button>
                  )}
                </div>

                {product.variants && product.variants.length > 0 ? (
                  <div className="rounded-lg border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead>Variant</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Color</TableHead>
                          <TableHead>SKU</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>Price</TableHead>
                          {isEditing && <TableHead>Actions</TableHead>}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.variants.map((variant) => (
                          <TableRow key={variant.id}>
                            <TableCell className="font-medium">
                              {variant.name}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{variant.size}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-4 h-4 rounded-full border"
                                  style={{
                                    backgroundColor:
                                      variant.color.toLowerCase() === "red"
                                        ? "#dc2626"
                                        : variant.color.toLowerCase() === "maroon"
                                        ? "#7f1d1d"
                                        : variant.color.toLowerCase() === "green"
                                        ? "#16a34a"
                                        : variant.color.toLowerCase() === "pink"
                                        ? "#ec4899"
                                        : variant.color.toLowerCase() === "teal"
                                        ? "#14b8a6"
                                        : variant.color.toLowerCase() === "orange"
                                        ? "#f97316"
                                        : variant.color.toLowerCase() === "navy"
                                        ? "#1e3a5f"
                                        : variant.color.toLowerCase() === "lavender"
                                        ? "#c4b5fd"
                                        : variant.color.toLowerCase() === "coral"
                                        ? "#f87171"
                                        : "#6b7280",
                                  }}
                                />
                                {variant.color}
                              </div>
                            </TableCell>
                            <TableCell className="font-mono text-sm">
                              {variant.sku}
                            </TableCell>
                            <TableCell>
                              {isEditing ? (
                                <Input
                                  type="number"
                                  defaultValue={variant.stock}
                                  className="w-20 h-8"
                                />
                              ) : (
                                <span
                                  className={
                                    variant.stock === 0
                                      ? "text-destructive"
                                      : variant.stock < 10
                                      ? "text-warning"
                                      : ""
                                  }
                                >
                                  {variant.stock}
                                </span>
                              )}
                            </TableCell>
                            <TableCell>
                              {isEditing ? (
                                <Input
                                  type="number"
                                  defaultValue={variant.price}
                                  className="w-28 h-8"
                                />
                              ) : (
                                formatINR(variant.price)
                              )}
                            </TableCell>
                            {isEditing && (
                              <TableCell>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-destructive"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </TableCell>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No variants configured</p>
                    {isEditing && (
                      <Button size="sm" variant="outline" className="mt-3 gap-2">
                        <Plus className="w-4 h-4" /> Create First Variant
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="mt-4">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="stat-card">
                    <p className="text-sm text-muted-foreground">Total Stock</p>
                    <p className="text-2xl font-bold">{totalVariantStock}</p>
                  </div>
                  <div className="stat-card">
                    <p className="text-sm text-muted-foreground">Reserved</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="stat-card">
                    <p className="text-sm text-muted-foreground">Available</p>
                    <p className="text-2xl font-bold">{totalVariantStock - 12}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Stock by Variant</h4>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Plus className="w-4 h-4" /> Add Stock
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {product.variants?.map((variant) => (
                      <div
                        key={variant.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-8 h-8 rounded-full border"
                            style={{
                              backgroundColor:
                                variant.color.toLowerCase() === "red"
                                  ? "#dc2626"
                                  : variant.color.toLowerCase() === "maroon"
                                  ? "#7f1d1d"
                                  : variant.color.toLowerCase() === "pink"
                                  ? "#ec4899"
                                  : variant.color.toLowerCase() === "teal"
                                  ? "#14b8a6"
                                  : variant.color.toLowerCase() === "navy"
                                  ? "#1e3a5f"
                                  : variant.color.toLowerCase() === "lavender"
                                  ? "#c4b5fd"
                                  : variant.color.toLowerCase() === "coral"
                                  ? "#f87171"
                                  : "#6b7280",
                            }}
                          />
                          <div>
                            <p className="font-medium">{variant.name}</p>
                            <p className="text-sm text-muted-foreground">
                              Size: {variant.size} • SKU: {variant.sku}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-semibold">{variant.stock} units</p>
                            <p className="text-xs text-muted-foreground">
                              {variant.stock > 10
                                ? "In Stock"
                                : variant.stock > 0
                                ? "Low Stock"
                                : "Out of Stock"}
                            </p>
                          </div>
                          <div
                            className={`w-3 h-3 rounded-full ${
                              variant.stock > 10
                                ? "bg-success"
                                : variant.stock > 0
                                ? "bg-warning"
                                : "bg-destructive"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">Stock History</h4>
                  <div className="space-y-2">
                    {[
                      { action: "Stock Added", qty: "+50", date: "Jan 15, 2024", user: "Admin" },
                      { action: "Order Fulfilled", qty: "-5", date: "Jan 14, 2024", user: "System" },
                      { action: "Order Fulfilled", qty: "-3", date: "Jan 13, 2024", user: "System" },
                      { action: "Stock Adjusted", qty: "-2", date: "Jan 12, 2024", user: "Admin" },
                    ].map((log, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between py-2 border-b last:border-0"
                      >
                        <div>
                          <p className="font-medium">{log.action}</p>
                          <p className="text-xs text-muted-foreground">
                            {log.date} • by {log.user}
                          </p>
                        </div>
                        <span
                          className={`font-mono font-semibold ${
                            log.qty.startsWith("+") ? "text-success" : "text-destructive"
                          }`}
                        >
                          {log.qty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};
