import { useState } from "react";
import { motion } from "framer-motion";
import {
  Store,
  Bell,
  CreditCard,
  Shield,
  Palette,
  Mail,
  Phone,
  MapPin,
  Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardSettings = () => {
  const [notifications, setNotifications] = useState({
    orderAlerts: true,
    stockAlerts: true,
    customerAlerts: false,
    marketingEmails: true,
    weeklyReport: true,
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-display font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your store preferences and configurations
        </p>
      </div>

      <Tabs defaultValue="store" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto p-1">
          <TabsTrigger value="store" className="gap-2 py-3">
            <Store className="w-4 h-4" />
            <span className="hidden sm:inline">Store</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 py-3">
            <Bell className="w-4 h-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="payments" className="gap-2 py-3">
            <CreditCard className="w-4 h-4" />
            <span className="hidden sm:inline">Payments</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="gap-2 py-3">
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2 py-3">
            <Palette className="w-4 h-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
        </TabsList>

        {/* Store Settings */}
        <TabsContent value="store">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Store Information</CardTitle>
                <CardDescription>
                  Basic information about your store
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="storeName">Store Name</Label>
                    <Input id="storeName" defaultValue="Sagai Selection" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storeEmail">Store Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="storeEmail" defaultValue="contact@sagai.com" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="storePhone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input id="storePhone" defaultValue="+91 98765 43210" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger>
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD ($)</SelectItem>
                        <SelectItem value="inr">INR (₹)</SelectItem>
                        <SelectItem value="eur">EUR (€)</SelectItem>
                        <SelectItem value="gbp">GBP (£)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeAddress">Store Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Textarea
                      id="storeAddress"
                      className="pl-10 min-h-[80px]"
                      defaultValue="123 Fashion Street, Mumbai, Maharashtra, India - 400001"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeDescription">Store Description</Label>
                  <Textarea
                    id="storeDescription"
                    className="min-h-[100px]"
                    defaultValue="Premium Indian ethnic wear destination featuring handcrafted sarees, lehengas, and designer collections."
                  />
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button className="gap-2 gradient-primary hover:opacity-90">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </motion.div>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Notification Preferences</CardTitle>
                <CardDescription>
                  Choose how you want to be notified
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { key: "orderAlerts", label: "Order Alerts", description: "Get notified when new orders are placed" },
                  { key: "stockAlerts", label: "Stock Alerts", description: "Alerts when products are running low" },
                  { key: "customerAlerts", label: "Customer Alerts", description: "Notifications for new customer signups" },
                  { key: "marketingEmails", label: "Marketing Emails", description: "Receive tips and promotional updates" },
                  { key: "weeklyReport", label: "Weekly Report", description: "Get a weekly summary of your store performance" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between py-3">
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({ ...prev, [item.key]: checked }))
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Payments Settings */}
        <TabsContent value="payments">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Payment Methods</CardTitle>
                <CardDescription>
                  Configure your payment options
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Credit/Debit Cards", icon: "💳", enabled: true },
                  { name: "UPI", icon: "📱", enabled: true },
                  { name: "Net Banking", icon: "🏦", enabled: true },
                  { name: "Cash on Delivery", icon: "💵", enabled: false },
                  { name: "PayPal", icon: "🅿️", enabled: false },
                ].map((method) => (
                  <div key={method.name} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{method.icon}</span>
                      <span className="font-medium">{method.name}</span>
                    </div>
                    <Switch defaultChecked={method.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Security Settings</CardTitle>
                <CardDescription>
                  Protect your account and store
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Current Password</Label>
                  <Input type="password" placeholder="Enter current password" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>New Password</Label>
                    <Input type="password" placeholder="Enter new password" />
                  </div>
                  <div className="space-y-2">
                    <Label>Confirm Password</Label>
                    <Input type="password" placeholder="Confirm new password" />
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Login Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when someone logs into your account
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="font-display">Appearance</CardTitle>
                <CardDescription>
                  Customize the look of your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Label>Theme</Label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: "Light", bg: "bg-background", border: "border-primary" },
                      { name: "Dark", bg: "bg-sidebar", border: "border-transparent" },
                      { name: "System", bg: "bg-gradient-to-r from-background to-sidebar", border: "border-transparent" },
                    ].map((theme) => (
                      <button
                        key={theme.name}
                        className={`p-4 rounded-xl border-2 ${theme.border} ${theme.bg} text-center hover:border-primary transition-colors`}
                      >
                        <p className="font-medium">{theme.name}</p>
                      </button>
                    ))}
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Compact Mode</p>
                    <p className="text-sm text-muted-foreground">
                      Reduce spacing and padding for more content
                    </p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <p className="font-medium">Animations</p>
                    <p className="text-sm text-muted-foreground">
                      Enable smooth transitions and animations
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardSettings;
