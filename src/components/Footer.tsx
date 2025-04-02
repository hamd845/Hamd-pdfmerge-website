
import { Link } from "react-router-dom";
import { Github, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-pdf-primary to-pdf-secondary flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <span className="font-bold text-xl text-pdf-primary dark:text-white">PixelPDF</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Advanced PDF tools for all your document needs. Edit, convert, merge and more.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-pdf-primary dark:hover:text-pdf-accent">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pdf-primary dark:hover:text-pdf-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pdf-primary dark:hover:text-pdf-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-pdf-primary dark:hover:text-pdf-accent">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">PDF Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools/pdf-to-word" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  PDF to Word
                </Link>
              </li>
              <li>
                <Link to="/tools/word-to-pdf" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Word to PDF
                </Link>
              </li>
              <li>
                <Link to="/tools/merge-pdf" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Merge PDF
                </Link>
              </li>
              <li>
                <Link to="/tools/split-pdf" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Split PDF
                </Link>
              </li>
              <li>
                <Link to="/tools/image-to-pdf" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Image to PDF
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 dark:text-gray-400 hover:text-pdf-primary dark:hover:text-pdf-accent">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
          <p>© {year} PixelPDF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
