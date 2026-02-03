import { motion } from "framer-motion";
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  Package,
  Plus,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { RecentOrders } from "@/components/dashboard/RecentOrders";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/data/products";

const stats = [
  {
    title: "Total Revenue",
    value: formatINR(10647430),
    change: "+12.5% from last month",
    changeType: "positive" as const,
    icon: DollarSign,
    iconColor: "bg-primary",
  },
  {
    title: "Total Orders",
    value: "1,234",
    change: "+8.2% from last month",
    changeType: "positive" as const,
    icon: ShoppingCart,
    iconColor: "bg-accent",
  },
  {
    title: "Total Customers",
    value: "8,549",
    change: "+23.1% from last month",
    changeType: "positive" as const,
    icon: Users,
    iconColor: "bg-success",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-0.4% from last month",
    changeType: "negative" as const,
    icon: TrendingUp,
    iconColor: "bg-info",
  },
];

const quickActions = [
  { icon: Plus, label: "Add Product", color: "bg-primary" },
  { icon: Package, label: "View Inventory", color: "bg-accent" },
  { icon: ShoppingCart, label: "Process Orders", color: "bg-success" },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {quickActions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              size="sm"
              className="gap-2 hover-lift"
            >
              <action.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatCard {...stat} />
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <div>
          <TopProducts />
        </div>
      </div>

      {/* Recent Orders */}
      <RecentOrders />
    </div>
  );
};

export default DashboardOverview;
