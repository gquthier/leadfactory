import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import Merci from "./pages/Merci";
import ESN from "./pages/ESN";
import SaaS from "./pages/SaaS";
import ServicesB2B from "./pages/ServicesB2B";
import AgencesMarketing from "./pages/AgencesMarketing";
import Consultants from "./pages/Consultants";
import Immobilier from "./pages/Immobilier";
import Formation from "./pages/Formation";
import Travaux from "./pages/Travaux";
import ServicesPersonne from "./pages/ServicesPersonne";
import Healthcare from "./pages/Healthcare";
import Tourisme from "./pages/Tourisme";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ma" element={<Landing />} />
            <Route path="/merci" element={<Merci />} />
            <Route path="/esn" element={<ESN />} />
            <Route path="/saas" element={<SaaS />} />
            <Route path="/services-b2b" element={<ServicesB2B />} />
            <Route path="/agences-marketing" element={<AgencesMarketing />} />
            <Route path="/consultants" element={<Consultants />} />
            <Route path="/immobilier" element={<Immobilier />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/travaux" element={<Travaux />} />
            <Route path="/services-personne" element={<ServicesPersonne />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/tourisme" element={<Tourisme />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
