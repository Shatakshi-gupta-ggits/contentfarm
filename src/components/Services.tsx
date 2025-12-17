import { Bot, Workflow, Globe, Brain, ArrowRight, CheckCircle, Star, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ContactFormDialog from '@/components/ContactFormDialog';

const Services = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  
  const services = [{
    icon: Bot,
    title: "AI Agents & Chatbots",
    description: "Custom AI assistants that handle customer support, lead qualification, and repetitive tasks 24/7.",
    features: ["24/7 customer support automation", "Lead qualification & nurturing", "Knowledge base integration", "Multi-platform deployment"],
    badge: "Most Popular",
    badgeColor: "bg-gradient-to-r from-green-500 to-emerald-600"
  }, {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Eliminate manual processes with intelligent automations that connect your tools and save 40+ hours weekly.",
    features: ["Cross-platform integrations", "Data syncing & migrations", "Automated reporting", "Error handling & alerts"],
    badge: "Best ROI",
    badgeColor: "bg-gradient-to-r from-purple-500 to-violet-600"
  }, {
    icon: Globe,
    title: "Web & App Development",
    description: "Custom websites and applications built to scale your business and convert visitors into customers.",
    features: ["Responsive web design", "Custom web applications", "E-commerce solutions", "API development"],
    badge: "High Impact",
    badgeColor: "bg-gradient-to-r from-orange-500 to-red-600"
  }, {
    icon: Brain,
    title: "AI Integration & Strategy",
    description: "Integrate AI into your existing systems with a strategic roadmap tailored to your business goals.",
    features: ["AI readiness assessment", "Custom AI implementation", "Process optimization", "Team training & support"],
    badge: "Long-term Growth",
    badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-600"
  }];

  return <>
    {/* Problem/Pain Points Section */}
    <section className="relative py-20 cinematic-section overflow-hidden">
      {/* Background decoration with blob shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 blob-shape blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 blob-organic blur-3xl animate-blob-pulse" style={{
        animationDelay: '2s'
      }}></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-primary/5 blob-soft blur-2xl animate-blob-breathe" style={{
        animationDelay: '4s'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold cinematic-gradient-text leading-tight">
            Your Business is Drowning in Manual Work
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed cinematic-text-shadow">
            While you're stuck doing repetitive tasks that should be automated...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="cinematic-card p-8 shadow-cinematic liquid-card">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-4 text-white">40+ hours wasted weekly on tasks AI could handle</h3>
            <p className="text-gray-300">
              Your competitors with automation are scaling faster while you're drowning in spreadsheets
            </p>
          </div>

          <div className="cinematic-card p-8 shadow-cinematic liquid-card">
            <div className="text-4xl mb-4">💸</div>
            <h3 className="text-xl font-bold mb-4 text-white">Missed opportunities because you can't respond fast enough</h3>
            <p className="text-gray-300">
              Leads go cold while you're busy with manual data entry and follow-ups
            </p>
          </div>

          <div className="cinematic-card p-8 shadow-cinematic liquid-card md:col-span-2 lg:col-span-1">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-4 text-white">No website or app to capture and convert your audience</h3>
            <p className="text-gray-300">
              You're leaving money on the table without a professional digital presence
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Solution/Benefits Section */}
    <section className="relative py-20 cinematic-section overflow-hidden border-t border-primary/20">
      {/* Background decoration with morphing blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 blob-shape blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 blob-organic blur-3xl animate-blob-breathe" style={{
        animationDelay: '1s'
      }}></div>
      <div className="absolute top-2/3 left-1/3 w-60 h-60 bg-primary/5 blob-soft blur-xl animate-blob-pulse" style={{
        animationDelay: '3s'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold cinematic-gradient-text leading-tight">
            We Fix This in 30 Days or You Don't Pay
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed cinematic-text-shadow">
            Here's exactly what happens when you work with AutomateHub:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="cinematic-card p-8 shadow-cinematic liquid-card">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4 cinematic-gradient-text">40+ Hours Saved Weekly</h3>
              <p className="text-gray-300">
                AI agents handle repetitive tasks while you focus on growth and strategy
              </p>
            </div>
          </div>

          <div className="cinematic-card p-8 shadow-cinematic liquid-card">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-4 cinematic-gradient-text">Instant Lead Response</h3>
              <p className="text-gray-300">
                Never miss an opportunity with 24/7 automated lead qualification and follow-up
              </p>
            </div>
          </div>

          <div className="cinematic-card p-8 shadow-cinematic liquid-card">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 cinematic-gradient-text">Professional Digital Presence</h3>
              <p className="text-gray-300">
                Custom websites and apps that convert visitors and showcase your brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="relative py-20 cinematic-section overflow-hidden border-t border-primary/20">
      {/* Background decoration with organic blobs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 blob-organic blur-3xl animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/10 blob-shape blur-3xl animate-blob-pulse" style={{
        animationDelay: '3s'
      }}></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-primary/10 blob-soft blur-2xl animate-blob-breathe" style={{
        animationDelay: '5s'
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with compelling messaging */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight cinematic-text-shadow">
            Services That
            <span className="cinematic-gradient-text block mt-2">
              Actually Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed cinematic-text-shadow">
            Stop wasting time on manual tasks. Our data-driven approach has helped businesses 
            <span className="font-bold cinematic-gradient-text"> save 40+ hours per week</span> and 
            <span className="font-bold cinematic-gradient-text"> increase revenue by 3x</span>.
          </p>
          
          {/* Social proof numbers with liquid design */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
            <div className="text-center cinematic-card p-4 shadow-cinematic liquid-card">
              <div className="text-2xl font-bold cinematic-gradient-text">40+</div>
              <div className="text-sm text-gray-400">Hours Saved Weekly</div>
            </div>
            <div className="text-center cinematic-card p-4 shadow-cinematic liquid-card">
              <div className="text-2xl font-bold cinematic-gradient-text">3x</div>
              <div className="text-sm text-gray-400">Revenue Growth</div>
            </div>
            <div className="text-center cinematic-card p-4 shadow-cinematic liquid-card">
              <div className="text-2xl font-bold cinematic-gradient-text">14 Days</div>
              <div className="text-sm text-gray-400">Average Delivery</div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="relative group liquid-card transition-all duration-500 cinematic-card overflow-hidden flex flex-col h-full shadow-cinematic cursor-pointer">
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md`}>
                  {service.badge}
                </div>
                
                <CardHeader className="text-center pb-4 relative">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary blob-shape flex items-center justify-center group-hover:scale-110 group-hover:animate-blob-pulse transition-all duration-500 shadow-lg group-hover:shadow-glow">
                    <Icon className="h-10 w-10 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-4">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6 flex flex-col flex-grow">
                  <CardDescription className="text-gray-300 text-center font-medium">
                    {service.description}
                  </CardDescription>
                  
                  <ul className="space-y-3 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-white">
                        <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA with urgency */}
        <div className="text-center mt-16">
          <div className="relative cinematic-card p-8 text-white max-w-4xl mx-auto shadow-cinematic overflow-hidden" style={{
            borderRadius: '40px'
          }}>
            {/* Background decoration with blob shapes */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-primary/20 blob-shape blur-2xl animate-blob-breathe"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary/10 blob-organic blur-xl animate-blob-pulse"></div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4 cinematic-gradient-text">
                🔥 Ready to Automate Your Business?
              </h3>
              <p className="text-xl text-gray-300 mb-6">Book a call and get a FREE automation audit</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="cinematic-cta text-lg px-8 py-4 font-bold shadow-glow hover:shadow-glow transition-all duration-300"
                  onClick={() => setIsContactDialogOpen(true)}
                >
                  Get Your Free Automation Audit →
                </Button>
                <ContactFormDialog isOpen={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
                <Link to="/pricing">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 font-bold border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-2">
                    <Calculator className="w-5 h-5" />
                    ROI Calculator
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>;
};

export default Services;