import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  iconColor: string;
}

export const StatCard = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  iconColor,
}: StatCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="stat-card group"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-display font-bold tracking-tight">{value}</p>
          <p
            className={`text-sm font-medium ${
              changeType === "positive"
                ? "text-success"
                : changeType === "negative"
                ? "text-destructive"
                : "text-muted-foreground"
            }`}
          >
            {change}
          </p>
        </div>
        <div
          className={`p-3 rounded-xl ${iconColor} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
    </motion.div>
  );
};
