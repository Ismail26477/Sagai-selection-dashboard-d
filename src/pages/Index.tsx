import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  BarChart3, 
  Package, 
  Users, 
  ShoppingCart,
  Sparkles,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/data/products";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track sales, revenue, and customer behavior with beautiful charts and insights."
  },
  {
    icon: Package,
    title: "Product Management",
    description: "Easily manage your inventory with grid/list views, bulk actions, and smart filters."
  },
  {
    icon: ShoppingCart,
    title: "Order Tracking",
    description: "Monitor order status, payments, and shipping with a streamlined workflow."
  },
  {
    icon: Users,
    title: "Customer Insights",
    description: "Build relationships with VIP tracking, purchase history, and contact management."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with two-factor auth and encrypted data storage."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures smooth experience even with large datasets."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Premium Admin Dashboard</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              Manage Your Store with{" "}
              <span className="text-gradient">Elegance</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              A stunning, feature-rich admin dashboard for Sagai Selection. 
              Beautiful analytics, seamless product management, and powerful insights at your fingertips.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="gap-2 gradient-primary hover:opacity-90 text-lg px-8 py-6">
                <Link to="/dashboard">
                  Enter Dashboard
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link to="/dashboard/analytics">
                  View Analytics
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 md:mt-24 relative"
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-3xl" />
              <div className="relative bg-card rounded-2xl border border-border shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-warning" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                  <span className="ml-4 text-sm text-muted-foreground">Sagai Selection Dashboard</span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Revenue", value: formatINR(10647430), change: "+12.5%" },
                      { label: "Orders", value: "1,234", change: "+8.2%" },
                      { label: "Customers", value: "8,549", change: "+23.1%" },
                      { label: "Conversion", value: "3.24%", change: "-0.4%" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="p-4 rounded-xl bg-muted/50"
                      >
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-xl md:text-2xl font-bold mt-1">{stat.value}</p>
                        <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                          {stat.change}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 h-32 md:h-48 bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help you manage and grow your business efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto text-center p-8 md:p-16 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                Access powerful tools and insights to take your store to the next level.
              </p>
              <Button asChild size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6">
                <Link to="/dashboard">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold">Sagai Selection</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Sagai Selection. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
