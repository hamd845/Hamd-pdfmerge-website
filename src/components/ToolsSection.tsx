
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  FilePlus, 
  FileInput, 
  FileMinus, 
  Image,
  FileSpreadsheet,
  FileCode,
  Edit 
} from 'lucide-react';
import ToolCard from './ToolCard';

const ToolsSection = () => {
  const navigate = useNavigate();
  
  const tools = [
    {
      id: 'pdf-to-word',
      title: 'PDF to Word',
      description: 'Convert PDF files to editable Word documents.',
      icon: <FileText size={28} />,
      path: '/tools/pdf-to-word'
    },
    {
      id: 'word-to-pdf',
      title: 'Word to PDF',
      description: 'Convert Word documents to PDF format.',
      icon: <FileText size={28} />,
      path: '/tools/word-to-pdf'
    },
    {
      id: 'merge-pdf',
      title: 'Merge PDF',
      description: 'Combine multiple PDF files into one document.',
      icon: <FilePlus size={28} />,
      path: '/tools/merge-pdf'
    },
    {
      id: 'split-pdf',
      title: 'Split PDF',
      description: 'Divide PDF files into separate pages or sections.',
      icon: <FileMinus size={28} />,
      path: '/tools/split-pdf'
    },
    {
      id: 'image-to-pdf',
      title: 'Image to PDF',
      description: 'Convert images to PDF files with custom settings.',
      icon: <Image size={28} />,
      path: '/tools/image-to-pdf'
    },
    {
      id: 'excel-to-pdf',
      title: 'Excel to PDF',
      description: 'Convert Excel spreadsheets to PDF format.',
      icon: <FileSpreadsheet size={28} />,
      path: '/tools/excel-to-pdf'
    },
    {
      id: 'html-to-pdf',
      title: 'HTML to PDF',
      description: 'Convert web pages or HTML code to PDF.',
      icon: <FileCode size={28} />,
      path: '/tools/html-to-pdf'
    },
    {
      id: 'edit-pdf',
      title: 'Edit PDF',
      description: 'Modify text, images, and other content in PDF files.',
      icon: <Edit size={28} />,
      path: '/tools/edit-pdf'
    }
  ];
  
  const handleToolClick = (path: string) => {
    navigate(path);
  };
  
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 gradient-heading">
          Powerful PDF Tools
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          All the PDF tools you need in one place. Edit, convert, merge, split, and more - 
          all for free and without complicated software.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              icon={tool.icon}
              onClick={() => handleToolClick(tool.path)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
