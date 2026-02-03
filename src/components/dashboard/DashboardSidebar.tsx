import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
  X,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface DashboardSidebarProps {
  onClose: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: Package, label: "Products", path: "/dashboard/products" },
  { icon: ShoppingCart, label: "Orders", path: "/dashboard/orders" },
  { icon: Users, label: "Customers", path: "/dashboard/customers" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

export const DashboardSidebar = ({ onClose }: DashboardSidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="h-full w-[280px] bg-sidebar flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-lg font-semibold text-sidebar-foreground">
              Sagai Selection
            </h1>
            <p className="text-xs text-sidebar-muted">Admin Dashboard</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Navigation */}
      <ScrollArea className="flex-1 px-4 py-6">
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <NavLink
                to={item.path}
                end={item.path === "/dashboard"}
                className={`sidebar-item ${
                  isActive(item.path) ? "sidebar-item-active" : ""
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute right-4 w-1.5 h-1.5 rounded-full bg-sidebar-primary"
                  />
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/50">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-sidebar-primary-foreground font-semibold">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">
              Admin User
            </p>
            <p className="text-xs text-sidebar-muted truncate">
              admin@sagai.com
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          className="w-full mt-3 text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-accent justify-start gap-3"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};
