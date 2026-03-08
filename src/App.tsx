import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import GulBuketleri from "./pages/GulBuketleri";
import Orkideler from "./pages/Orkideler";
import DugunCicekleri from "./pages/DugunCicekleri";
import HediyeKutulari from "./pages/HediyeKutulari";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gul-buketleri" element={<GulBuketleri />} />
          <Route path="/orkideler" element={<Orkideler />} />
          <Route path="/dugun-cicekleri" element={<DugunCicekleri />} />
          <Route path="/hediye-kutulari" element={<HediyeKutulari />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
