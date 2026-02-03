import { Bell, Menu, Search, PanelLeftClose, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  onToggleMobileMenu: () => void;
}

export const DashboardHeader = ({
  sidebarOpen,
  onToggleSidebar,
  onToggleMobileMenu,
}: DashboardHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 h-16 bg-background/80 backdrop-blur-lg border-b border-border flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onToggleMobileMenu}
        >
          <Menu className="w-5 h-5" />
        </Button>

        {/* Desktop Sidebar Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="hidden lg:flex"
          onClick={onToggleSidebar}
        >
          {sidebarOpen ? (
            <PanelLeftClose className="w-5 h-5" />
          ) : (
            <PanelLeft className="w-5 h-5" />
          )}
        </Button>

        {/* Search */}
        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search products, orders..."
            className="pl-10 w-64 lg:w-80 bg-muted/50 border-0 focus-visible:ring-1"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Mobile Search */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="w-5 h-5" />
        </Button>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-[10px] bg-primary">
                3
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <span className="font-medium">New order received</span>
              <span className="text-xs text-muted-foreground">
                Order #1234 from John Doe - $299.99
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <span className="font-medium">Low stock alert</span>
              <span className="text-xs text-muted-foreground">
                Product "Silk Saree" is running low
              </span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
              <span className="font-medium">New customer registered</span>
              <span className="text-xs text-muted-foreground">
                Sarah Wilson just created an account
              </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
