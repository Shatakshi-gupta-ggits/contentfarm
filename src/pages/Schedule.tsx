import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle, ArrowRight, Calculator, BadgeDollarSign, ShieldCheck, Bot, Zap, Globe } from "lucide-react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const Schedule = () => {
  return <>
    <SEO title="Schedule a Call - Start Your AI Automation Journey | AutomateHub" description="Book a free 15-minute discovery call to discuss your AI automation strategy. Get a custom audit and implementation timeline for your business growth." keywords="schedule call, AI automation consultation, business automation consultation, workflow automation call" />
    <div className="min-h-screen bg-background">
      <ModernHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
            <div className="inline-block bg-primary/10 border-2 border-primary rounded-lg px-6 py-3 mb-6">
              <p className="text-base sm:text-lg font-bold text-primary uppercase tracking-wide">
                If You're Done Drowning in Manual Work
              </p>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
              Let's Build Your AI Automation System
            </h1>
          </motion.div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.1
            }} className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">Get 24/7 Support Without Hiring</h3>
              <p className="text-muted-foreground">
                AI agents handle customer inquiries, lead qualification, and repetitive tasks around the clock — without you lifting a finger.
              </p>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">Turn Manual Tasks Into Automated Workflows</h3>
              <p className="text-muted-foreground">So data entry, follow-ups, and reporting happen automatically while you focus on growth.</p>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">Stop Missing Leads Due to Slow Response</h3>
              <p className="text-muted-foreground">
                Instant AI responses mean no more leads going cold while you're busy with other tasks.
              </p>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">Quit Paying $50K+/Year for Tasks AI Can Handle</h3>
              <p className="text-muted-foreground">
                One-time automation investment vs. recurring salary costs — save 90% while getting better results.
              </p>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.5
            }} className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 text-xl">5</div>
              <h3 className="text-xl font-bold mb-3">Scale Operations Without Scaling Headcount</h3>
              <p className="text-muted-foreground">
                AI handles unlimited volume — grow 10x without the management headaches of a larger team.
              </p>
            </motion.div>

            <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.6
            }} className="bg-card rounded-lg p-6 border border-border">
              <div className="bg-primary/10 text-primary rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4 text-xl">6</div>
              <h3 className="text-xl font-bold mb-3">Get a Professional Digital Presence That Converts</h3>
              <p className="text-muted-foreground">
                Custom websites and apps built to capture leads and showcase your brand at its best.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
            <div className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-b border-border">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Calendar className="w-8 h-8 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold text-center">Choose Your Time</h2>
              </div>
              <p className="text-center text-muted-foreground">
                Select a time that works best for you. All times are shown in your local timezone.
              </p>
            </div>
            
            {/* Calendly Embed */}
            <div className="calendly-embed-container" style={{
              minHeight: '630px'
            }}>
              <iframe src="https://calendly.com/kvit/15-minutes-discovery-call" width="100%" height="630" frameBorder="0" title="Schedule a call with AutomateHub" style={{
                border: 0
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Why Schedule Now?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Get a Free Automation Audit</h3>
              <p className="text-muted-foreground">
                We'll analyze your current workflows and identify exactly which tasks can be automated. You'll see the potential time savings (typically 40+ hours/week) and cost reduction before committing to anything.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Calculate Your ROI Upfront</h3>
              <p className="text-muted-foreground">
                We'll show you the exact math: If automation saves 40 hours/week at $50/hour, that's $104K/year in savings. Compare that to a one-time investment of $10-25K. You'll see the ROI before signing anything.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border text-center">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">90-Day ROI Guarantee</h3>
              <p className="text-muted-foreground">
                If your automation doesn't deliver measurable time or cost savings within 90 days, we'll keep iterating until it does — at no additional cost. We're that confident in our system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Zap className="w-10 h-10 text-primary mb-3" />
              <p className="text-2xl font-bold">2-4 Weeks</p>
              <p className="text-muted-foreground">Average Implementation</p>
            </div>
            
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 text-primary mb-3" />
              <p className="text-2xl font-bold">40+ Hours</p>
              <p className="text-muted-foreground">Saved Per Week</p>
            </div>

            <div className="flex flex-col items-center">
              <Globe className="w-10 h-10 text-primary mb-3" />
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-muted-foreground">Availability</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </>;
};

export default Schedule;