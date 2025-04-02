
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// PDF Tool Imports (these will be created in future iterations)
const PdfToWord = () => (<div>PDF to Word Tool (Coming Soon)</div>);
const WordToPdf = () => (<div>Word to PDF Tool (Coming Soon)</div>);
const MergePdf = () => (<div>Merge PDF Tool (Coming Soon)</div>);
const SplitPdf = () => (<div>Split PDF Tool (Coming Soon)</div>);
const ImageToPdf = () => (<div>Image to PDF Tool (Coming Soon)</div>);
const ExcelToPdf = () => (<div>Excel to PDF Tool (Coming Soon)</div>);
const HtmlToPdf = () => (<div>HTML to PDF Tool (Coming Soon)</div>);
const EditPdf = () => (<div>Edit PDF Tool (Coming Soon)</div>);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* PDF Tool Routes */}
          <Route path="/tools/pdf-to-word" element={<PdfToWord />} />
          <Route path="/tools/word-to-pdf" element={<WordToPdf />} />
          <Route path="/tools/merge-pdf" element={<MergePdf />} />
          <Route path="/tools/split-pdf" element={<SplitPdf />} />
          <Route path="/tools/image-to-pdf" element={<ImageToPdf />} />
          <Route path="/tools/excel-to-pdf" element={<ExcelToPdf />} />
          <Route path="/tools/html-to-pdf" element={<HtmlToPdf />} />
          <Route path="/tools/edit-pdf" element={<EditPdf />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
