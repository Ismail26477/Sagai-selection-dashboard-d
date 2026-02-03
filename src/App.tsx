import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import DashboardOverview from "./pages/dashboard/DashboardOverview";
import DashboardProducts from "./pages/dashboard/DashboardProducts";
import DashboardOrders from "./pages/dashboard/DashboardOrders";
import DashboardCustomers from "./pages/dashboard/DashboardCustomers";
import DashboardAnalytics from "./pages/dashboard/DashboardAnalytics";
import DashboardSettings from "./pages/dashboard/DashboardSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardOverview />} />
            <Route path="products" element={<DashboardProducts />} />
            <Route path="orders" element={<DashboardOrders />} />
            <Route path="customers" element={<DashboardCustomers />} />
            <Route path="analytics" element={<DashboardAnalytics />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
