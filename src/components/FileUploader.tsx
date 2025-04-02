
import { useState, useCallback, DragEvent, ChangeEvent } from 'react';
import { Upload, File, X, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

interface FileUploaderProps {
  acceptedFileTypes: string;
  maxFileSize?: number; // in MB
  maxFiles?: number;
  onFilesSelected: (files: File[]) => void;
  isProcessing?: boolean;
}

const FileUploader = ({
  acceptedFileTypes,
  maxFileSize = 10,
  maxFiles = 5,
  onFilesSelected,
  isProcessing = false
}: FileUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);
  
  const handleDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);
  
  const validateFiles = useCallback((files: File[]) => {
    if (files.length + selectedFiles.length > maxFiles) {
      toast.error(`You can only upload up to ${maxFiles} files at once.`);
      return false;
    }
    
    const invalidFiles = files.filter(file => !file.type.match(acceptedFileTypes));
    if (invalidFiles.length > 0) {
      toast.error(`Some files are not supported. Please upload files of type: ${acceptedFileTypes.replace(/\./g, '')}`);
      return false;
    }
    
    const tooBigFiles = files.filter(file => file.size > maxFileSize * 1024 * 1024);
    if (tooBigFiles.length > 0) {
      toast.error(`Some files exceed the maximum size of ${maxFileSize}MB.`);
      return false;
    }
    
    return true;
  }, [acceptedFileTypes, maxFileSize, maxFiles, selectedFiles.length]);
  
  const handleFilesSelected = useCallback((files: FileList | null) => {
    if (!files) return;
    
    const fileArray = Array.from(files);
    if (!validateFiles(fileArray)) return;
    
    // Simulate upload progress
    const timer = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    
    setSelectedFiles(prev => [...prev, ...fileArray]);
    onFilesSelected(fileArray);
    
    // Reset progress after "upload" completes
    setTimeout(() => {
      clearInterval(timer);
      setUploadProgress(100);
      setTimeout(() => setUploadProgress(0), 500);
    }, 2000);
  }, [onFilesSelected, validateFiles]);
  
  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    handleFilesSelected(e.dataTransfer.files);
  }, [handleFilesSelected]);
  
  const handleFileInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    handleFilesSelected(e.target.files);
  }, [handleFilesSelected]);
  
  const removeFile = useCallback((index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  }, []);
  
  return (
    <div className="w-full">
      <div 
        className={`file-drop-area ${isDragging ? 'file-drop-active' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center">
          <div className="mb-4 p-3 rounded-full bg-blue-100 text-pdf-primary animate-pulse-scale">
            <Upload size={32} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Drop your files here</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
            or click to browse from your computer
          </p>
          <input
            type="file"
            id="file-input"
            className="hidden"
            multiple={maxFiles > 1}
            accept={acceptedFileTypes}
            onChange={handleFileInput}
            disabled={isProcessing}
          />
          <label htmlFor="file-input">
            <Button 
              variant="outline" 
              className="cursor-pointer" 
              disabled={isProcessing}
            >
              Select Files
            </Button>
          </label>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Accepted formats: {acceptedFileTypes.replace(/\./g, '').replace(/,/g, ', ')} • Max {maxFileSize}MB per file
          </p>
        </div>
      </div>
      
      {uploadProgress > 0 && (
        <div className="mt-4">
          <Progress value={uploadProgress} className="h-2" />
          <p className="text-xs text-gray-500 mt-2 text-center">
            {uploadProgress === 100 ? (
              <span className="flex items-center justify-center text-green-500">
                <Check size={14} className="mr-1" /> Upload complete
              </span>
            ) : (
              `Uploading... ${uploadProgress}%`
            )}
          </p>
        </div>
      )}
      
      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Selected Files</h4>
          <div className="space-y-2">
            {selectedFiles.map((file, index) => (
              <div 
                key={`${file.name}-${index}`} 
                className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg p-3"
              >
                <div className="flex items-center">
                  <File size={18} className="text-pdf-primary mr-2" />
                  <div>
                    <p className="text-sm font-medium truncate max-w-[200px] md:max-w-[300px]">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeFile(index)}
                  disabled={isProcessing}
                  className="h-8 w-8 rounded-full text-gray-500 hover:text-red-500"
                >
                  <X size={16} />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
