
import { MapPin, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to section
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // If not on home page, Link component will handle navigation to /#section
  };

  return (
    <footer className="cinematic-section text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold cinematic-gradient-text">
              AutomateHub
            </div>
            <p className="text-gray-300">
              We help businesses scale with AI agents, automation, and custom web/app development that drives real results.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Lisbon, Portugal</span>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.linkedin.com/in/yuliya-yuvchenko/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  to="/#services" 
                  className="hover:text-yellow-400 transition-colors"
                  onClick={() => handleSectionNavigation('#services')}
                >
                  AI Agents & Chatbots
                </Link>
              </li>
              <li>
                <Link 
                  to="/#services" 
                  className="hover:text-yellow-400 transition-colors"
                  onClick={() => handleSectionNavigation('#services')}
                >
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link 
                  to="/#services" 
                  className="hover:text-yellow-400 transition-colors"
                  onClick={() => handleSectionNavigation('#services')}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/#services" 
                  className="hover:text-yellow-400 transition-colors"
                  onClick={() => handleSectionNavigation('#services')}
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/#services" 
                  className="hover:text-yellow-400 transition-colors"
                  onClick={() => handleSectionNavigation('#services')}
                >
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-yellow-400 transition-colors">Case Studies</Link></li>
              <li><Link to="/ai-automation" className="hover:text-yellow-400 transition-colors">AI Automation</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link></li>
              <li><Link to="/pricing" className="hover:text-yellow-400 transition-colors">Pricing</Link></li>
              <li><Link to="/career" className="hover:text-yellow-400 transition-colors">Career</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">© 2025 AutomateHub. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-300">
              <Link to="/privacy-policy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-yellow-400 transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-yellow-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;