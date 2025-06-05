
import { Github, Mail, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Smart Task Manager
            </h3>
            <p className="text-slate-400 leading-relaxed">
              AI-powered productivity that adapts to your workflow and helps you achieve more with less effort.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Product</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2024 Smart Task Manager. Built with AI assistance and modern design principles.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Code className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
