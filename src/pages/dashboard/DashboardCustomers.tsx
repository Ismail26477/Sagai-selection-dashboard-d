import { motion } from "framer-motion";
import {
  Search,
  Download,
  Mail,
  Phone,
  MapPin,
  Star,
  MoreVertical,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { formatINR } from "@/data/products";

const customers = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    orders: 12,
    spent: 204500,
    status: "VIP",
    joinDate: "Mar 2023",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Patel",
    email: "rahul.patel@email.com",
    phone: "+91 87654 32109",
    location: "Delhi",
    orders: 8,
    spent: 157890,
    status: "Regular",
    joinDate: "Jun 2023",
    avatar: "RP",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    email: "ananya.g@email.com",
    phone: "+91 76543 21098",
    location: "Bangalore, Karnataka",
    orders: 23,
    spent: 381567,
    status: "VIP",
    joinDate: "Jan 2023",
    avatar: "AG",
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "vikram.s@email.com",
    phone: "+91 65432 10987",
    location: "Jaipur, Rajasthan",
    orders: 5,
    spent: 74290,
    status: "New",
    joinDate: "Dec 2023",
    avatar: "VS",
  },
  {
    id: 5,
    name: "Meera Nair",
    email: "meera.nair@email.com",
    phone: "+91 54321 09876",
    location: "Chennai, Tamil Nadu",
    orders: 15,
    spent: 260520,
    status: "Regular",
    joinDate: "Apr 2023",
    avatar: "MN",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    email: "arjun.r@email.com",
    phone: "+91 43210 98765",
    location: "Hyderabad, Telangana",
    orders: 3,
    spent: 37550,
    status: "New",
    joinDate: "Jan 2024",
    avatar: "AR",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "VIP":
      return (
        <Badge className="bg-gradient-primary text-primary-foreground gap-1">
          <Star className="w-3 h-3" /> {status}
        </Badge>
      );
    case "Regular":
      return <Badge variant="secondary">{status}</Badge>;
    case "New":
      return <Badge className="badge-info">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const DashboardCustomers = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Customers</h1>
          <p className="text-muted-foreground mt-1">
            Manage your customer relationships
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2 gradient-primary hover:opacity-90">
            <UserPlus className="w-4 h-4" />
            Add Customer
          </Button>
        </div>
      </div>

      {/* Customer Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Customers", value: "8,549", change: "+12%" },
          { label: "VIP Customers", value: "342", change: "+8%" },
          { label: "New This Month", value: "127", change: "+23%" },
          { label: "Avg. Order Value", value: formatINR(15789), change: "+5%" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="stat-card"
          >
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
            <p className="text-sm text-success mt-1">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="new">New</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="orders">Most Orders</SelectItem>
              <SelectItem value="spent">Highest Spent</SelectItem>
              <SelectItem value="name">Name A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Customers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.map((customer, index) => (
          <motion.div
            key={customer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-card rounded-xl border border-border p-6 hover-lift"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 gradient-primary">
                  <AvatarFallback className="bg-transparent text-primary-foreground font-semibold">
                    {customer.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{customer.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Joined {customer.joinDate}
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Profile</DropdownMenuItem>
                  <DropdownMenuItem>View Orders</DropdownMenuItem>
                  <DropdownMenuItem>Send Email</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="truncate">{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{customer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{customer.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-center">
                <p className="text-lg font-bold">{customer.orders}</p>
                <p className="text-xs text-muted-foreground">Orders</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold">{formatINR(customer.spent)}</p>
                <p className="text-xs text-muted-foreground">Total Spent</p>
              </div>
              <div>{getStatusBadge(customer.status)}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCustomers;
