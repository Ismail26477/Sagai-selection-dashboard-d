import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Download,
  Eye,
  MoreVertical,
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatINR } from "@/data/products";

const orders = [
  {
    id: "#ORD-001",
    customer: "Priya Sharma",
    email: "priya@email.com",
    products: ["Silk Banarasi Saree", "Dupatta"],
    total: 31498,
    status: "Delivered",
    payment: "Paid",
    date: "Jan 15, 2024",
  },
  {
    id: "#ORD-002",
    customer: "Rahul Patel",
    email: "rahul@email.com",
    products: ["Designer Lehenga Set"],
    total: 45999,
    status: "Processing",
    payment: "Paid",
    date: "Jan 15, 2024",
  },
  {
    id: "#ORD-003",
    customer: "Ananya Gupta",
    email: "ananya@email.com",
    products: ["Cotton Kurti Pack (3)"],
    total: 22497,
    status: "Shipped",
    payment: "Paid",
    date: "Jan 14, 2024",
  },
  {
    id: "#ORD-004",
    customer: "Vikram Singh",
    email: "vikram@email.com",
    products: ["Wedding Collection", "Bridal Set"],
    total: 219998,
    status: "Pending",
    payment: "Pending",
    date: "Jan 14, 2024",
  },
  {
    id: "#ORD-005",
    customer: "Meera Nair",
    email: "meera@email.com",
    products: ["Embroidered Dupatta"],
    total: 6499,
    status: "Cancelled",
    payment: "Refunded",
    date: "Jan 13, 2024",
  },
  {
    id: "#ORD-006",
    customer: "Arjun Reddy",
    email: "arjun@email.com",
    products: ["Anarkali Suit", "Palazzo Set"],
    total: 27998,
    status: "Delivered",
    payment: "Paid",
    date: "Jan 13, 2024",
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Delivered":
      return <CheckCircle className="w-4 h-4" />;
    case "Shipped":
      return <Truck className="w-4 h-4" />;
    case "Processing":
      return <Package className="w-4 h-4" />;
    case "Pending":
      return <Clock className="w-4 h-4" />;
    case "Cancelled":
      return <XCircle className="w-4 h-4" />;
    default:
      return null;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Delivered":
      return <Badge className="badge-success gap-1">{getStatusIcon(status)} {status}</Badge>;
    case "Shipped":
      return <Badge className="badge-info gap-1">{getStatusIcon(status)} {status}</Badge>;
    case "Processing":
      return <Badge className="badge-warning gap-1">{getStatusIcon(status)} {status}</Badge>;
    case "Pending":
      return <Badge variant="secondary" className="gap-1">{getStatusIcon(status)} {status}</Badge>;
    case "Cancelled":
      return <Badge className="badge-destructive gap-1">{getStatusIcon(status)} {status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getPaymentBadge = (payment: string) => {
  switch (payment) {
    case "Paid":
      return <Badge className="badge-success">{payment}</Badge>;
    case "Pending":
      return <Badge className="badge-warning">{payment}</Badge>;
    case "Refunded":
      return <Badge variant="secondary">{payment}</Badge>;
    default:
      return <Badge variant="outline">{payment}</Badge>;
  }
};

const DashboardOrders = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "all") return true;
    return order.status.toLowerCase() === activeTab;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Orders</h1>
          <p className="text-muted-foreground mt-1">
            Track and manage customer orders
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export Orders
        </Button>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: "All Orders", value: "156", bg: "bg-muted" },
          { label: "Pending", value: "12", bg: "bg-secondary" },
          { label: "Processing", value: "28", bg: "bg-warning/10" },
          { label: "Shipped", value: "45", bg: "bg-info/10" },
          { label: "Delivered", value: "71", bg: "bg-success/10" },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.02 }}
            className={`${stat.bg} rounded-xl p-4 text-center`}
          >
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
          </TabsList>

          <div className="flex gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search orders..." className="pl-10 w-full sm:w-[200px]" />
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="highest">Highest Value</SelectItem>
                <SelectItem value="lowest">Lowest Value</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value={activeTab} className="mt-6">
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="p-4 text-left font-medium">Order ID</th>
                    <th className="p-4 text-left font-medium">Customer</th>
                    <th className="p-4 text-left font-medium">Products</th>
                    <th className="p-4 text-left font-medium">Total</th>
                    <th className="p-4 text-left font-medium">Status</th>
                    <th className="p-4 text-left font-medium">Payment</th>
                    <th className="p-4 text-left font-medium">Date</th>
                    <th className="p-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, index) => (
                    <motion.tr
                      key={order.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-t table-row-hover"
                    >
                      <td className="p-4 font-mono font-medium">{order.id}</td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{order.customer}</p>
                          <p className="text-sm text-muted-foreground">{order.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="max-w-[200px]">
                          {order.products.map((p, i) => (
                            <p key={i} className="text-sm truncate">{p}</p>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 font-semibold">{formatINR(order.total)}</td>
                      <td className="p-4">{getStatusBadge(order.status)}</td>
                      <td className="p-4">{getPaymentBadge(order.payment)}</td>
                      <td className="p-4 text-muted-foreground">{order.date}</td>
                      <td className="p-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="w-4 h-4 mr-2" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>Update Status</DropdownMenuItem>
                            <DropdownMenuItem>Send Invoice</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Cancel Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardOrders;
