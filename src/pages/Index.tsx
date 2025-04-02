
import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ToolsSection from '@/components/ToolsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Gift, Zap, Shield, Clock } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <ToolsSection />
        
        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-4 gradient-heading">
              Why Choose Our PDF Tools?
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Advanced features that make document management simple, secure, and efficient.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="feature-card">
                <div className="p-3 rounded-full bg-blue-100 text-pdf-primary w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Zap size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Fast Processing</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Process your documents in seconds, no matter the size or complexity.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="p-3 rounded-full bg-blue-100 text-pdf-primary w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Shield size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">100% Secure</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Your files are encrypted and automatically deleted after processing.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="p-3 rounded-full bg-blue-100 text-pdf-primary w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Save Time</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Automate repetitive tasks and process multiple files at once.
                </p>
              </div>
              
              <div className="feature-card">
                <div className="p-3 rounded-full bg-blue-100 text-pdf-primary w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Gift size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Free to Use</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  Start using our essential tools without any cost or limitations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pdf-primary to-pdf-secondary text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your PDF Experience?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of users who trust our tools for their document needs.
              No registration required to get started.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-pdf-primary hover:bg-blue-50 animate-pulse-scale"
            >
              Try It Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
