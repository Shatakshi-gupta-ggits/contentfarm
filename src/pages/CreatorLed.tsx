import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, Target, TrendingUp, Users, Zap, Award, BarChart3, Rocket, X, Eye, MousePointer, Sparkles, DollarSign, UserCheck } from "lucide-react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TwentyOneSteps from "@/components/TwentyOneSteps";
import completeSystemBg from "@/assets/complete-system-bg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CreatorNetworkAnimation from "@/components/CreatorNetworkAnimation";
const ContentMachine = () => {
  return <>
      <SEO title="Video Content Creator System - SaaS Video Marketing | ContentFarm" description="Generate $15,000+ in new MRR with our Video Content Creator System. 50+ creators producing hundreds of viral videos across TikTok, Instagram & YouTube Shorts. Performance-based pricing." keywords="video content creator system, saas video marketing, viral video production, performance video marketing, tiktok marketing for saas, instagram reels for saas, youtube shorts marketing, video creator network, affiliate video marketing" />
      <div className="min-h-screen bg-background">
        <ModernHeader />
        
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">We Generate $15,000+ in New MRR From Viral Videos in 90 Days Or You Don't Pay.</h1>
            <div className="max-w-4xl mx-auto mb-12 space-y-8">
              {/* Problem Statement */}
              <div className="space-y-3">
                <p className="text-xl sm:text-3xl text-yellow-500 leading-relaxed font-semibold">
                  We recruit 50+ video creators every month to produce hundreds of videos about your SaaS across TikTok, Instagram, and YouTube Shorts that turns views into paying customers without spending on ads
                </p>
              </div>

              {/* Solution Statement */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                
                <CreatorNetworkAnimation />
              </div>

              {/* Value Propositions */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-5">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">
                    <span className="font-bold text-primary">You pay $1-3 per 1,000 views.</span> You keep 100% of revenue from every new customer.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-5">
                  <p className="text-base sm:text-lg text-foreground leading-relaxed">
                    <span className="font-bold text-primary">No upfront influencer fees.</span> No wasted ad spend. Just predictable, performance-based growth.
                  </p>
                </div>
              </div>
            </div>
            <Link to="/schedule">
              <Button className="btn-gradient font-bold shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 text-xl sm:text-2xl px-16 sm:px-24 py-8 sm:py-10 rounded-2xl min-w-[300px] sm:min-w-[400px]">
                Schedule a Call
              </Button>
            </Link>
          </div>
        </section>

        {/* Problem-Agitate-Solution Section */}
        

        {/* The Problem Section (Agitation) */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          
          
        </section>

        {/* Unique Mechanism Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-accent/5 overflow-hidden">
          {/* Animated background image with slow zoom */}
          <motion.div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
          backgroundImage: `url(${completeSystemBg})`
        }} animate={{
          scale: [1, 1.1, 1]
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }} />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
                Traditional Influencer Model vs. Our Video Content Creator System
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See the clear difference in approach and results
              </p>
            </motion.div>

            <div className="space-y-6 mb-8">
              {/* Block 1 */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 flex items-center gap-4 bg-muted/20">
                  <X className="w-6 h-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">1 influencer with 500k followers</p>
                </div>
                <div className="p-6 flex items-center gap-4 bg-primary/10">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground font-semibold">50+ video creators working simultaneously</p>
                </div>
              </motion.div>

              {/* Block 2 */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 flex items-center gap-4 bg-muted/20">
                  <X className="w-6 h-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">1 post = 50k views from their audience</p>
                </div>
                <div className="p-6 flex items-center gap-4 bg-primary/10">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground font-semibold">500+ videos = <span className="text-primary text-lg font-bold">2.5M+</span> algorithm-driven views</p>
                </div>
              </motion.div>

              {/* Block 3 */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 flex items-center gap-4 bg-muted/20">
                  <X className="w-6 h-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">Single touchpoint (user sees it once)</p>
                </div>
                <div className="p-6 flex items-center gap-4 bg-primary/10">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground font-semibold">Multiple touchpoints (user sees <span className="text-primary font-bold">5-7 videos</span> organically)</p>
                </div>
              </motion.div>

              {/* Block 4 */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.3
            }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 flex items-center gap-4 bg-muted/20">
                  <X className="w-6 h-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">Views from followers <span className="text-destructive font-medium">(low intent)</span></p>
                </div>
                <div className="p-6 flex items-center gap-4 bg-primary/10">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground font-semibold">Views from algorithm-matched users <span className="text-primary font-bold">(high intent)</span></p>
                </div>
              </motion.div>

              {/* Block 5 */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 flex items-center gap-4 bg-muted/20">
                  <X className="w-6 h-6 text-destructive flex-shrink-0" />
                  <p className="text-foreground">Feels like a paid ad <span className="text-destructive font-medium">(low trust)</span></p>
                </div>
                <div className="p-6 flex items-center gap-4 bg-primary/10">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-foreground font-semibold">Feels like organic discovery <span className="text-primary font-bold">(high trust)</span></p>
                </div>
              </motion.div>

              {/* Block 6 - Pricing */}
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }} className="grid md:grid-cols-2 gap-4 bg-card border-2 border-primary/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="p-8 flex items-center gap-4 bg-destructive/10">
                  <DollarSign className="w-8 h-8 text-destructive flex-shrink-0" />
                  <p className="text-foreground font-bold text-lg">$2.5k-$50k per post</p>
                </div>
                <div className="p-8 flex items-center gap-4 bg-gradient-to-r from-primary/20 to-primary/10 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-shimmer" style={{
                  backgroundSize: '200% 100%'
                }}></div>
                  <Check className="w-8 h-8 text-primary flex-shrink-0 relative z-10" />
                  <p className="text-foreground font-bold text-lg relative z-10">Pay only for results <span className="text-primary">(performance-based)</span></p>
                  <Award className="w-6 h-6 text-primary ml-auto relative z-10 animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/schedule">
              <Button className="btn-gradient font-bold shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 text-xl sm:text-2xl px-16 sm:px-24 py-8 sm:py-10 rounded-2xl min-w-[300px] sm:min-w-[400px]">
                Schedule A Call
              </Button>
            </Link>
          </div>
        </section>

        {/* Why Our System Delivers MRR Growth Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight gradient-text">
                Why Our Video Content Creator System Delivers MRR Growth That Influencer Marketing Can't
              </h2>
            </motion.div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {/* Block 1 - FREQUENCY */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">
                    1. FREQUENCY <span className="text-primary">(Organic Retargeting)</span>
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 bg-muted/20 border-r border-border">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Traditional:</p>
                    <p className="text-foreground">User sees your SaaS once, forgets about it</p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-primary mb-2">Our model:</p>
                    <p className="text-foreground font-medium">User sees 5-7 different videos over weeks, builds familiarity and trust</p>
                  </div>
                </div>
              </motion.div>

              {/* Block 2 - ALGORITHM */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1
            }} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">
                    2. ALGORITHM <span className="text-primary">(Amplification Beyond Followers)</span>
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 bg-muted/20 border-r border-border">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Traditional:</p>
                    <p className="text-foreground">Reach limited to influencer's follower base</p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-primary mb-2">Our model:</p>
                    <p className="text-foreground font-medium">Each video can go viral independently and algorithm pushes content to millions</p>
                  </div>
                </div>
              </motion.div>

              {/* Block 3 - INTENT */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="bg-card border border-border rounded-lg overflow-hidden">
                <div className="bg-primary/10 px-6 py-4 border-b border-border">
                  <h3 className="text-xl font-bold text-foreground">
                    3. INTENT <span className="text-primary">(Qualified Audience)</span>
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 bg-muted/20 border-r border-border">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Traditional:</p>
                    <p className="text-foreground">Influencer's followers aren't all interested in your product</p>
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-primary mb-2">Our model:</p>
                    <p className="text-foreground font-medium">Algorithm shows videos only to users interested in your category = higher conversions</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 21 Steps Visual */}
        <TwentyOneSteps />


        {/* Urgency & Scarcity */}
        

        {/* FAQ / Objection Handling */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Everything you need to know before getting started
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">This is too expensive. How do I justify the investment?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">
                    Let's look at the real cost. You're currently spending 20+ hours per week on affiliate management—that's $16,000/month of founder time at a conservative $200/hour. Plus, your CAC is likely 40-50% higher than it could be without authentic social proof.
                  </p>
                  <p className="text-muted-foreground">
                    The real question isn't "Can I afford this?"—it's "Can I afford NOT to do this while my competitors scale with UGC?" Our average client sees a 3.8X ROI within 6 months. This isn't an expense; it's the highest-leverage investment you can make in predictable growth.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">I'm worried about content quality and brand safety</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">
                    That's exactly why we built the Clipper Vetting System™. Unlike generic affiliate programs where anyone can join, we use a proprietary 5-stage qualification process that ensures 90% of recruited clippers produce brand-safe, high-quality content.
                  </p>
                  <p className="text-muted-foreground">
                    Every clip goes through our 24-hour review process before approval. You have final say on every piece of content. Plus, we provide pre-written scripts and brand guidelines to ensure consistency.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">We're already working with another agency</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">
                    That's great—it means you understand the value of UGC. The question is: are they using a proprietary vetting system that guarantees 90% clipper activation? Are they providing 24-48 hour payouts to keep creators motivated? Are they offering performance guarantees?
                  </p>
                  <p className="text-muted-foreground">
                    Most agencies treat affiliate management as a side service. We've built our entire business around the Clipper Vetting System™ because we've seen the 79% conversion increases and 60% lead growth it delivers.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">I don't have time to manage this</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">
                    That's precisely why this is a done-for-you service. You're not managing anything—we are. We handle recruitment, vetting, onboarding, training, content review, payout approval, ongoing motivation, performance optimization, and budget management.
                  </p>
                  <p className="text-muted-foreground">
                    Your only involvement is a 30-minute weekly check-in call to review performance and approve strategic decisions. Compare that to the 20+ hours per week you're currently spending on manual affiliate management.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">I need to see results before committing long-term</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">
                    Completely reasonable. That's why we offer the Pilot Program—a 3-month engagement designed specifically for SaaS founders who want to test the system before scaling.
                  </p>
                  <p className="text-muted-foreground">
                    You'll get 25-50 vetted clippers and 25+ clips per month with a performance guarantee: if we don't deliver the promised clips, we work for free until we do. Most Pilot clients see measurable improvements in lead volume within 60 days and convert to the Growth Accelerator program.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
        </section>

        {/* Final CTA */}
        

        <Footer />
      </div>
    </>;
};
export default ContentMachine;