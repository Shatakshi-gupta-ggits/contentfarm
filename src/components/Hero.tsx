import { Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ScrollingBrands from '@/components/ScrollingBrands';
import ContactFormDialog from '@/components/ContactFormDialog';

const Hero = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden cinematic-section" style={{
      contain: 'layout'
    }}>
      {/* Film grain effect */}
      <div className="absolute inset-0 cinematic-grain opacity-20 z-0" style={{
        willChange: 'opacity'
      }}></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white max-w-4xl mx-auto" style={{
            textWrap: 'balance',
            lineHeight: '1.15'
          }}>
            <span className="cinematic-gradient-text cinematic-text-shadow">We Build AI Agents & Automations That Save You 40+ Hours Per Week Or You Don't Pay</span>
          </h1>
        </div>

        {/* Subtitle 1 */}
        <div className="text-center mb-6">
          <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto cinematic-text-shadow" style={{
            lineHeight: '1.45'
          }}>Take your business to the next level. We handle AI strategy, automation setup, custom agents, and web/app development.</p>
        </div>

        {/* Subtitle 2 */}
        <div className="text-center mb-12">
          <p className="text-base md:text-lg text-gray-300 font-normal max-w-3xl mx-auto cinematic-text-shadow" style={{
            lineHeight: '1.5'
          }}>
            <span className="font-semibold text-yellow-400">90-Day ROI Guarantee:</span> If your automation doesn't deliver measurable time/cost savings, we'll keep iterating until it does.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <Button size="lg" className="cinematic-cta text-lg px-10 py-6 font-semibold shadow-2xl hover:shadow-glow transition-all duration-500 transform hover:scale-105" onClick={() => setIsDialogOpen(true)}>
            Get Your Free Automation Audit →
          </Button>
        </div>

        {/* Form Dialog */}
        <ContactFormDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />

        {/* Feature highlights instead of video */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="cinematic-card p-6 text-center shadow-cinematic">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-white mb-2">AI Agents</h3>
              <p className="text-gray-300">Custom AI assistants that handle repetitive tasks 24/7</p>
            </div>
            <div className="cinematic-card p-6 text-center shadow-cinematic">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Automations</h3>
              <p className="text-gray-300">Workflow automations that eliminate manual work</p>
            </div>
            <div className="cinematic-card p-6 text-center shadow-cinematic">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-white mb-2">Web & App Dev</h3>
              <p className="text-gray-300">Custom websites and apps built for your needs</p>
            </div>
          </div>
          
          {/* Cinematic light flares */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl cinematic-flare" style={{
            willChange: 'transform, opacity'
          }}></div>
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400/15 rounded-full blur-3xl cinematic-flare" style={{
            animationDelay: '1s',
            willChange: 'transform, opacity'
          }}></div>
        </div>

        {/* Logos Carousel */}
        <div className="relative" style={{
          contain: 'layout'
        }}>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white cinematic-text-shadow">Trusted By</h2>
          </div>
          <ScrollingBrands />
        </div>
      </div>
    </section>
  );
};

export default Hero;