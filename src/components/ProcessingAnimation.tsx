
import { FileType } from 'lucide-react';

interface ProcessingAnimationProps {
  type: string;
  isProcessing: boolean;
}

const ProcessingAnimation = ({ type, isProcessing }: ProcessingAnimationProps) => {
  if (!isProcessing) return null;
  
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative">
        <FileType size={48} className="text-pdf-primary animate-spin-slow" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-3 w-3 bg-pdf-accent rounded-full animate-pulse" />
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">Processing your {type}...</h3>
      <p className="text-gray-600 text-sm mt-2">
        This may take a few moments depending on file size
      </p>
      
      <div className="mt-6 flex space-x-2">
        <div className="h-2 w-2 bg-pdf-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="h-2 w-2 bg-pdf-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
        <div className="h-2 w-2 bg-pdf-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
      </div>
    </div>
  );
};

export default ProcessingAnimation;
