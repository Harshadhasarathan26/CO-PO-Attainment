import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminIndex from "./admin/pages/Index";
import FacultyLogin from "./faculty/pages/Login";
import FacultyDashboard from "./faculty/pages/Dashboard";
import FacultyCOPOSetup from "./faculty/pages/COPOSetup";
import FacultyDataPage from "./faculty/pages/DataPage";
import FacultyCOSelection from "./faculty/pages/COSelection";
import FacultyCOMapping from "./faculty/pages/COMapping";
import FacultyMarksEntry from "./faculty/pages/MarksEntry";
import FacultyMarkSplitup from "./faculty/pages/MarkSplitup";
import AssessmentWeaver from "./faculty/pages/AssessmentWeaver";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<AdminIndex />} />
          <Route path="/faculty" element={<FacultyLogin />} />
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty/assessment-weaver" element={<AssessmentWeaver />} />
          <Route path="/faculty/copo-setup" element={<FacultyCOPOSetup />} />
          <Route path="/faculty/data" element={<FacultyDataPage />} />
          <Route path="/faculty/co-selection" element={<FacultyCOSelection />} />
          <Route path="/faculty/co-mapping" element={<FacultyCOMapping />} />
          <Route path="/faculty/marks-entry" element={<FacultyMarksEntry />} />
          <Route path="/faculty/mark-splitup" element={<FacultyMarkSplitup />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
