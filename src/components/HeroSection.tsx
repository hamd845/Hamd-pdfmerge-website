
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, FileUp, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUploader from './FileUploader';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleFilesSelected = (files: File[]) => {
    console.log("Files selected:", files);
    // In a real app, we would process the files here
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      if (files.length > 0) {
        navigate('/tools/pdf-to-word');
      }
    }, 2000);
  };
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading animate-fade-in">
          Advanced PDF Tools for Everyone
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10 animate-slide-up">
          Edit, convert, and manipulate PDF documents with ease. 
          No installation required, all tools work right in your browser.
        </p>
        
        <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8 animate-slide-up">
          <Tabs defaultValue="convert" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="convert" className="data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-gray-800">
                <FileText className="mr-2 h-4 w-4" />
                Convert
              </TabsTrigger>
              <TabsTrigger value="merge" className="data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-gray-800">
                <FileUp className="mr-2 h-4 w-4" />
                Merge
              </TabsTrigger>
              <TabsTrigger value="edit" className="data-[state=active]:bg-blue-50 dark:data-[state=active]:bg-gray-800">
                <FileText className="mr-2 h-4 w-4" />
                Edit
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="convert">
              <FileUploader
                acceptedFileTypes=".pdf,.doc,.docx"
                onFilesSelected={handleFilesSelected}
                isProcessing={isProcessing}
              />
            </TabsContent>
            
            <TabsContent value="merge">
              <FileUploader
                acceptedFileTypes=".pdf"
                maxFiles={10}
                onFilesSelected={handleFilesSelected}
                isProcessing={isProcessing}
              />
            </TabsContent>
            
            <TabsContent value="edit">
              <FileUploader
                acceptedFileTypes=".pdf"
                onFilesSelected={handleFilesSelected}
                isProcessing={isProcessing}
              />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
          <Button 
            variant="outline" 
            className="flex items-center gap-2 bg-white dark:bg-gray-900"
            onClick={() => navigate('/tools')}
          >
            Explore All Tools
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
