import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Eye,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatINR } from "@/data/products";

const revenueData = [
  { name: "Jan", revenue: 3757500, profit: 1001000 },
  { name: "Feb", revenue: 4340000, profit: 1252500 },
  { name: "Mar", revenue: 4007000, profit: 1085500 },
  { name: "Apr", revenue: 5093500, profit: 1503500 },
  { name: "May", revenue: 4592500, profit: 1336000 },
  { name: "Jun", revenue: 5595500, profit: 1754500 },
  { name: "Jul", revenue: 6012000, profit: 2004000 },
];

const categoryData = [
  { name: "Sarees", value: 35, color: "hsl(var(--primary))" },
  { name: "Lehengas", value: 25, color: "hsl(var(--accent))" },
  { name: "Kurtis", value: 20, color: "hsl(var(--success))" },
  { name: "Suits", value: 12, color: "hsl(var(--info))" },
  { name: "Others", value: 8, color: "hsl(var(--muted-foreground))" },
];

const trafficData = [
  { name: "Mon", visitors: 1200, conversions: 45 },
  { name: "Tue", visitors: 1800, conversions: 72 },
  { name: "Wed", visitors: 1400, conversions: 56 },
  { name: "Thu", visitors: 2200, conversions: 88 },
  { name: "Fri", visitors: 1900, conversions: 76 },
  { name: "Sat", visitors: 2800, conversions: 112 },
  { name: "Sun", visitors: 2400, conversions: 96 },
];

const topCities = [
  { city: "Mumbai", orders: 234, revenue: 3813678, percentage: 28 },
  { city: "Delhi", orders: 198, revenue: 3211456, percentage: 24 },
  { city: "Bangalore", orders: 156, revenue: 2494876, percentage: 19 },
  { city: "Chennai", orders: 123, revenue: 1958456, percentage: 15 },
  { city: "Hyderabad", orders: 89, revenue: 1439034, percentage: 11 },
];

const analyticsCards = [
  {
    title: "Total Revenue",
    value: formatINR(10647430),
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Total Visitors",
    value: "48,520",
    change: "+8.2%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-0.4%",
    trend: "down",
    icon: ShoppingCart,
  },
  {
    title: "Avg. Session",
    value: "4m 32s",
    change: "+15.3%",
    trend: "up",
    icon: Eye,
  },
];

const DashboardAnalytics = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Insights and performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="7d">
            <SelectTrigger className="w-[150px]">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="stat-card"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{card.title}</p>
                <p className="text-2xl font-bold mt-1">{card.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {card.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                  <span
                    className={
                      card.trend === "up" ? "text-success" : "text-destructive"
                    }
                  >
                    {card.change}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-muted">
                <card.icon className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 chart-container"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-display font-semibold">Revenue Trends</h3>
              <p className="text-sm text-muted-foreground">Monthly revenue and profit</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-sm text-muted-foreground">Profit</span>
              </div>
            </div>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--success))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(var(--success))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }} 
                  formatter={(value: number) => formatINR(value)}
                />
                <Area type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#revenueGrad)" />
                <Area type="monotone" dataKey="profit" stroke="hsl(var(--success))" strokeWidth={2} fill="url(#profitGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Category Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="chart-container"
        >
          <div className="mb-6">
            <h3 className="text-lg font-display font-semibold">Category Distribution</h3>
            <p className="text-sm text-muted-foreground">Sales by product category</p>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            {categoryData.map((category) => (
              <div key={category.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                  <span className="text-sm">{category.name}</span>
                </div>
                <span className="text-sm font-medium">{category.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Traffic and Top Cities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="chart-container"
        >
          <div className="mb-6">
            <h3 className="text-lg font-display font-semibold">Website Traffic</h3>
            <p className="text-sm text-muted-foreground">Daily visitors and conversions</p>
          </div>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "var(--radius)" }} />
                <Bar dataKey="visitors" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Top Cities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="chart-container"
        >
          <div className="mb-6">
            <h3 className="text-lg font-display font-semibold">Top Cities</h3>
            <p className="text-sm text-muted-foreground">Orders by location</p>
          </div>
          <div className="space-y-4">
            {topCities.map((city, index) => (
              <div key={city.city} className="flex items-center gap-4">
                <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  {index + 1}
                </span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{city.city}</span>
                    <span className="text-sm text-muted-foreground">{city.orders} orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full"
                        style={{ width: `${city.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{formatINR(city.revenue)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
