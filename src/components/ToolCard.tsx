
import { MouseEventHandler } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const ToolCard = ({ title, description, icon, onClick }: ToolCardProps) => {
  return (
    <Card 
      className="tool-card group cursor-pointer animate-fade-in" 
      onClick={onClick}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-blue-100 text-pdf-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon || <FileIcon size={28} />}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
