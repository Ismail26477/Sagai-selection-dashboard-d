import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Plus,
  Grid3X3,
  List,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  X,
  Package,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductDetailModal } from "@/components/dashboard/ProductDetailModal";
import { products, formatINR, Product } from "@/data/products";

const DashboardProducts = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const toggleProductSelection = (id: number) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

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

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category.toLowerCase() === categoryFilter;
    const matchesStatus = statusFilter === "all" || product.status.toLowerCase().replace(" ", "-") === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const totalStock = products.reduce((acc, p) => acc + p.stock, 0);
  const lowStockCount = products.filter((p) => p.status === "Low Stock").length;
  const outOfStockCount = products.filter((p) => p.status === "Out of Stock").length;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Products</h1>
          <p className="text-muted-foreground mt-1">
            Manage your product inventory and listings
          </p>
        </div>
        <Button className="gap-2 gradient-primary hover:opacity-90">
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="stat-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Products</p>
              <p className="text-xl font-bold">{products.length}</p>
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-success/10">
              <Package className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Stock</p>
              <p className="text-xl font-bold">{totalStock}</p>
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-warning/10">
              <AlertTriangle className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Low Stock</p>
              <p className="text-xl font-bold">{lowStockCount}</p>
            </div>
          </div>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-destructive/10">
              <X className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Out of Stock</p>
              <p className="text-xl font-bold">{outOfStockCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search products..." 
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="sarees">Sarees</SelectItem>
              <SelectItem value="lehengas">Lehengas</SelectItem>
              <SelectItem value="kurtis">Kurtis</SelectItem>
              <SelectItem value="suits">Suits</SelectItem>
              <SelectItem value="bridal">Bridal</SelectItem>
              <SelectItem value="dupattas">Dupattas</SelectItem>
              <SelectItem value="indo-western">Indo-Western</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="low-stock">Low Stock</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex border rounded-lg overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      <AnimatePresence>
        {selectedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-4 p-4 bg-muted rounded-lg"
          >
            <span className="text-sm font-medium">
              {selectedProducts.length} selected
            </span>
            <Button variant="outline" size="sm">
              Edit Selected
            </Button>
            <Button variant="destructive" size="sm">
              Delete Selected
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedProducts([])}
            >
              Clear
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Grid */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-card rounded-xl border border-border overflow-hidden hover-lift"
            >
              <div className="absolute top-3 left-3 z-10">
                <Checkbox
                  checked={selectedProducts.includes(product.id)}
                  onCheckedChange={() => toggleProductSelection(product.id)}
                  className="bg-background/80 backdrop-blur-sm"
                />
              </div>
              <div className="absolute top-3 right-3 z-10">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-background/80 backdrop-blur-sm"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => openProductDetail(product)}>
                      <Eye className="w-4 h-4 mr-2" /> View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="w-4 h-4 mr-2" /> Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="w-4 h-4 mr-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div 
                className="h-48 bg-muted/50 overflow-hidden cursor-pointer"
                onClick={() => openProductDetail(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 
                      className="font-semibold line-clamp-1 cursor-pointer hover:text-primary transition-colors"
                      onClick={() => openProductDetail(product)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-primary">
                      {formatINR(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatINR(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  {getStatusBadge(product.status)}
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Stock: <span className="font-medium text-foreground">{product.stock}</span>
                  </p>
                  {product.variants && (
                    <p className="text-sm text-muted-foreground">
                      {product.variants.length} variants
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="p-4 text-left">
                    <Checkbox />
                  </th>
                  <th className="p-4 text-left font-medium">Product</th>
                  <th className="p-4 text-left font-medium">Category</th>
                  <th className="p-4 text-left font-medium">Price</th>
                  <th className="p-4 text-left font-medium">Stock</th>
                  <th className="p-4 text-left font-medium">Status</th>
                  <th className="p-4 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-t table-row-hover">
                    <td className="p-4">
                      <Checkbox
                        checked={selectedProducts.includes(product.id)}
                        onCheckedChange={() => toggleProductSelection(product.id)}
                      />
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <span className="font-medium">{product.name}</span>
                          {product.variants && (
                            <p className="text-xs text-muted-foreground">
                              {product.variants.length} variants
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-muted-foreground">{product.category}</td>
                    <td className="p-4">
                      <div>
                        <span className="font-semibold">{formatINR(product.price)}</span>
                        {product.originalPrice && (
                          <p className="text-xs text-muted-foreground line-through">
                            {formatINR(product.originalPrice)}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">{product.stock}</td>
                    <td className="p-4">{getStatusBadge(product.status)}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => openProductDetail(product)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => {
          setIsDetailOpen(false);
          setSelectedProduct(null);
        }}
      />
    </div>
  );
};

export default DashboardProducts;
