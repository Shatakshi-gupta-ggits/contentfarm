import ModernHeader from '@/components/ModernHeader';
import SmartBar from '@/components/SmartBar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import { MessageCircle, Figma, FileText } from 'lucide-react';

const Index = () => {
  const services = [
    {
      name: "AI Agents & Chatbots",
      description: "Custom AI assistants that handle customer support, lead qualification, and repetitive tasks 24/7.",
      provider: "AutomateHub"
    },
    {
      name: "Workflow Automation",
      description: "Eliminate manual processes with intelligent automations that connect your tools and save 40+ hours weekly.",
      provider: "AutomateHub"
    },
    {
      name: "Web & App Development",
      description: "Custom websites and applications built to scale your business and convert visitors into customers.",
      provider: "AutomateHub"
    },
    {
      name: "AI Integration & Strategy",
      description: "Integrate AI into your existing systems with a strategic roadmap tailored to your business goals.",
      provider: "AutomateHub"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="AutomateHub - AI Agents, Automation & Web Development Agency | Save 40+ Hours Weekly"
        description="Leading AI automation agency specializing in custom AI agents, workflow automation, and web/app development. 90-day ROI guarantee. Take your business to the next level with intelligent automation that saves you 40+ hours per week."
        keywords="AI agents, automation agency, workflow automation, AI chatbots, web development, app development, business automation, AI integration, custom AI solutions, automation consulting, AI strategy, digital transformation"
        url="https://automatehub.io"
        type="website"
        image="https://automatehub.io/lovable-uploads/42844e19-815c-453d-9d1d-66e5ec0590fb.png"
      />
      
      <StructuredData type="organization" />
      <StructuredData type="service" services={services} />
      
      <SmartBar />
      <ModernHeader />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      {/* Easy Collaboration Section */}
      <section className="py-20 cinematic-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 cinematic-text-shadow">
              Working With Us Is Seamless
            </h2>
            <p className="text-xl text-gray-200">
              No complicated processes or endless meetings. We integrate smoothly into your workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center cinematic-card p-8 shadow-cinematic">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Chat on Slack</h3>
              <p className="text-gray-300">
                Direct communication with our team through Slack. Get instant updates, share feedback, and collaborate in real-time without switching platforms.
              </p>
            </div>

            <div className="text-center cinematic-card p-8 shadow-cinematic">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <Figma className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Preview in Figma</h3>
              <p className="text-gray-300">
                See your automations and workflows mapped out visually. Review designs, leave comments, and approve concepts before implementation starts.
              </p>
            </div>

            <div className="text-center cinematic-card p-8 shadow-cinematic">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Track in Notion</h3>
              <p className="text-gray-300">
                Complete transparency with our Notion workspace. Track automation builds, monitor progress, access deliverables, and stay updated on every milestone.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;