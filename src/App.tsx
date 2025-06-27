import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import CustomerInsights from "./pages/CustomerInsights";
import Dashboard from "./pages/Dashboard";
import ProductPerformance from "./pages/ProductPerformance";
import SalesAnalytics from "./pages/SalesAnalytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Dashboard />} />
          <Route path="/customer-insights" element={<CustomerInsights />} />
          <Route path="/product-performance" element={<ProductPerformance />} />
          <Route path="/sales-analytics" element={<SalesAnalytics />} />
          <Route path="/settings" element={<Settings />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
