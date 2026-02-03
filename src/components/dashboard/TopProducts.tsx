import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { formatINR } from "@/data/products";

const topProducts = [
  { name: "Silk Banarasi Saree", sales: 124, revenue: 3099876, progress: 85 },
  { name: "Designer Lehenga Set", sales: 98, revenue: 4507902, progress: 72 },
  { name: "Cotton Kurti Collection", sales: 256, revenue: 1919744, progress: 90 },
  { name: "Embroidered Dupatta", sales: 189, revenue: 1228311, progress: 65 },
  { name: "Wedding Bridal Set", sales: 45, revenue: 4949955, progress: 55 },
];

export const TopProducts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="chart-container"
    >
      <div className="mb-6">
        <h3 className="text-lg font-display font-semibold">Top Products</h3>
        <p className="text-sm text-muted-foreground">Best selling items this month</p>
      </div>

      <div className="space-y-6">
        {topProducts.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </span>
                <span className="font-medium">{product.name}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-sm">{formatINR(product.revenue)}</p>
                <p className="text-xs text-muted-foreground">{product.sales} sales</p>
              </div>
            </div>
            <Progress value={product.progress} className="h-2" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
