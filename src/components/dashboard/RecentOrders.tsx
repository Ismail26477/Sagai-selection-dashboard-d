import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { formatINR } from "@/data/products";

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "Priya Sharma",
    product: "Silk Banarasi Saree",
    amount: 24999,
    status: "Delivered",
    date: "2 hours ago",
  },
  {
    id: "#ORD-002",
    customer: "Rahul Patel",
    product: "Designer Lehenga Set",
    amount: 45999,
    status: "Processing",
    date: "4 hours ago",
  },
  {
    id: "#ORD-003",
    customer: "Ananya Gupta",
    product: "Cotton Kurti Pack",
    amount: 7499,
    status: "Shipped",
    date: "6 hours ago",
  },
  {
    id: "#ORD-004",
    customer: "Vikram Singh",
    product: "Wedding Collection",
    amount: 109999,
    status: "Pending",
    date: "8 hours ago",
  },
  {
    id: "#ORD-005",
    customer: "Meera Nair",
    product: "Embroidered Dupatta",
    amount: 6499,
    status: "Delivered",
    date: "1 day ago",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Delivered":
      return <Badge className="badge-success">{status}</Badge>;
    case "Processing":
      return <Badge className="badge-info">{status}</Badge>;
    case "Shipped":
      return <Badge className="badge-warning">{status}</Badge>;
    case "Pending":
      return <Badge variant="secondary">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export const RecentOrders = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="chart-container"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-display font-semibold">Recent Orders</h3>
          <p className="text-sm text-muted-foreground">Latest customer orders</p>
        </div>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {recentOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                {order.customer.charAt(0)}
              </div>
              <div>
                <p className="font-medium">{order.customer}</p>
                <p className="text-sm text-muted-foreground">{order.product}</p>
              </div>
            </div>

            <div className="hidden md:block text-right">
              <p className="font-semibold">{formatINR(order.amount)}</p>
              <p className="text-xs text-muted-foreground">{order.date}</p>
            </div>

            <div className="flex items-center gap-3">
              {getStatusBadge(order.status)}
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
