import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";
import { formatINR } from "@/data/products";

const data = [
  { name: "Jan", sales: 3340000, orders: 240 },
  { name: "Feb", sales: 2500000, orders: 198 },
  { name: "Mar", sales: 4175000, orders: 300 },
  { name: "Apr", sales: 3755000, orders: 278 },
  { name: "May", sales: 5010000, orders: 389 },
  { name: "Jun", sales: 4590000, orders: 340 },
  { name: "Jul", sales: 5845000, orders: 430 },
  { name: "Aug", sales: 5427500, orders: 400 },
  { name: "Sep", sales: 6680000, orders: 480 },
  { name: "Oct", sales: 6262500, orders: 450 },
  { name: "Nov", sales: 7515000, orders: 520 },
  { name: "Dec", sales: 7097500, orders: 490 },
];

export const SalesChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="chart-container"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-display font-semibold">Sales Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue trends</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-sm text-muted-foreground">Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground">Orders</span>
          </div>
        </div>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "var(--radius)",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.2)",
              }}
              labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
              formatter={(value: number, name: string) => [
                name === "sales" ? formatINR(value) : value,
                name === "sales" ? "Sales" : "Orders"
              ]}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="hsl(var(--primary))"
              strokeWidth={2}
              fill="url(#salesGradient)"
            />
            <Area
              type="monotone"
              dataKey="orders"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              fill="url(#ordersGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
