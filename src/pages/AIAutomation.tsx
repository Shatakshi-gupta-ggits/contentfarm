import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, Target, TrendingUp, Users, Zap, Award, BarChart3, Rocket, X, Bot, Cpu, Sparkles, DollarSign, UserCheck } from "lucide-react";
import ModernHeader from "@/components/ModernHeader";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AIAutomation = () => {
  return <>
    <SEO title="AI Automation System - Business Automation Agency | AutomateHub" description="Save 40+ hours weekly with our AI Automation System. Custom AI agents, workflow automation, and web/app development. Performance-based pricing with ROI guarantee." keywords="AI automation, business automation, AI agents, workflow automation, custom AI solutions, automation agency, digital transformation, AI integration, process automation, chatbot development" />
    <div className="min-h-screen bg-background">
      <ModernHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">We Save You 40+ Hours Per Week With AI Automation Or You Don't Pay.</h1>
          <div className="max-w-4xl mx-auto mb-12 space-y-8">
            {/* Problem Statement */}
            <div className="space-y-3">
              <p className="text-xl sm:text-3xl text-yellow-500 leading-relaxed font-semibold">
                We build custom AI agents and automations that eliminate repetitive tasks, respond to leads 24/7, and scale your operations without hiring more staff
              </p>
            </div>

            {/* Solution Statement */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <Bot className="w-12 h-12 mx-auto mb-2 text-primary" />
                  <h3 className="font-bold text-white">AI Agents</h3>
                  <p className="text-sm text-muted-foreground">24/7 customer support & lead qualification</p>
                </div>
                <div className="text-center p-4">
                  <Cpu className="w-12 h-12 mx-auto mb-2 text-primary" />
                  <h3 className="font-bold text-white">Automations</h3>
                  <p className="text-sm text-muted-foreground">Connect tools & eliminate manual work</p>
                </div>
                <div className="text-center p-4">
                  <Sparkles className="w-12 h-12 mx-auto mb-2 text-primary" />
                  <h3 className="font-bold text-white">Web & App Dev</h3>
                  <p className="text-sm text-muted-foreground">Custom digital solutions that convert</p>
                </div>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-5">
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  <span className="font-bold text-primary">ROI-focused pricing.</span> You only pay when we deliver measurable results.
                </p>
              </div>
              <div className="bg-card border border-border rounded-lg p-5">
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  <span className="font-bold text-primary">No technical expertise required.</span> We handle everything from strategy to implementation.
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

      {/* Unique Mechanism Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-accent/5 overflow-hidden">
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
              Hiring More Staff vs. Our AI Automation System
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the clear difference in approach and results
            </p>
          </motion.div>

          <div className="space-y-6 mb-8">
            {/* Block 1 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 flex items-center gap-4 bg-muted/20">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <p className="text-foreground">Hire 1 employee at $50K+/year</p>
              </div>
              <div className="p-6 flex items-center gap-4 bg-primary/10">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground font-semibold">AI agents work 24/7 for a fraction of the cost</p>
              </div>
            </motion.div>

            {/* Block 2 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 flex items-center gap-4 bg-muted/20">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <p className="text-foreground">Human errors and inconsistency</p>
              </div>
              <div className="p-6 flex items-center gap-4 bg-primary/10">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground font-semibold">Perfect execution <span className="text-primary text-lg font-bold">every single time</span></p>
              </div>
            </motion.div>

            {/* Block 3 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 flex items-center gap-4 bg-muted/20">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <p className="text-foreground">9-5 availability, sick days, vacations</p>
              </div>
              <div className="p-6 flex items-center gap-4 bg-primary/10">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground font-semibold">Available <span className="text-primary font-bold">24/7/365</span> without breaks</p>
              </div>
            </motion.div>

            {/* Block 4 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 flex items-center gap-4 bg-muted/20">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <p className="text-foreground">Weeks of training required <span className="text-destructive font-medium">(costly)</span></p>
              </div>
              <div className="p-6 flex items-center gap-4 bg-primary/10">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground font-semibold">Instant deployment <span className="text-primary font-bold">(ready in days)</span></p>
              </div>
            </motion.div>

            {/* Block 5 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="grid md:grid-cols-2 gap-4 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 flex items-center gap-4 bg-muted/20">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <p className="text-foreground">Handles 1 thing at a time <span className="text-destructive font-medium">(limited)</span></p>
              </div>
              <div className="p-6 flex items-center gap-4 bg-primary/10">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-foreground font-semibold">Handles <span className="text-primary font-bold">unlimited tasks simultaneously</span></p>
              </div>
            </motion.div>

            {/* Block 6 - Pricing */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="grid md:grid-cols-2 gap-4 bg-card border-2 border-primary/30 rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="p-8 flex items-center gap-4 bg-destructive/10">
                <DollarSign className="w-8 h-8 text-destructive flex-shrink-0" />
                <p className="text-foreground font-bold text-lg">$50K-$150K/year per employee</p>
              </div>
              <div className="p-8 flex items-center gap-4 bg-gradient-to-r from-primary/20 to-primary/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
                <Check className="w-8 h-8 text-primary flex-shrink-0 relative z-10" />
                <p className="text-foreground font-bold text-lg relative z-10">One-time investment + low maintenance <span className="text-primary">(90% cost savings)</span></p>
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

      {/* Why Our System Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight gradient-text">
              Why Our AI Automation System Delivers Results That Hiring Can't
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {/* Block 1 - SCALABILITY */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-primary/10 px-6 py-4 border-b border-border">
                <h3 className="text-xl font-bold text-foreground">
                  1. SCALABILITY <span className="text-primary">(Unlimited Capacity)</span>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 bg-muted/20 border-r border-border">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Traditional:</p>
                  <p className="text-foreground">Need more capacity? Hire more people, more costs</p>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-primary mb-2">Our model:</p>
                  <p className="text-foreground font-medium">AI handles 10x the workload without additional cost</p>
                </div>
              </div>
            </motion.div>

            {/* Block 2 - CONSISTENCY */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-primary/10 px-6 py-4 border-b border-border">
                <h3 className="text-xl font-bold text-foreground">
                  2. CONSISTENCY <span className="text-primary">(Perfect Every Time)</span>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 bg-muted/20 border-r border-border">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Traditional:</p>
                  <p className="text-foreground">Quality varies by person, mood, and workload</p>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-primary mb-2">Our model:</p>
                  <p className="text-foreground font-medium">Consistent, high-quality output every single time</p>
                </div>
              </div>
            </motion.div>

            {/* Block 3 - SPEED */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="bg-primary/10 px-6 py-4 border-b border-border">
                <h3 className="text-xl font-bold text-foreground">
                  3. SPEED <span className="text-primary">(Instant Response)</span>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 bg-muted/20 border-r border-border">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Traditional:</p>
                  <p className="text-foreground">Leads wait hours or days for a response</p>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-primary mb-2">Our model:</p>
                  <p className="text-foreground font-medium">Instant responses = higher conversion rates</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ / Objection Handling */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Everything you need to know before getting started
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How much does AI automation cost compared to hiring?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  The average employee costs $50K-$150K per year including salary, benefits, training, and overhead. Our AI automation solutions typically cost a one-time investment of $5K-$25K with minimal ongoing maintenance costs.
                </p>
                <p className="text-muted-foreground">
                  That's a 90%+ cost savings while getting 24/7 availability and unlimited scalability. Most clients see full ROI within 2-3 months.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">What if AI makes mistakes or provides wrong information?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  We build AI agents with guardrails, fact-checking, and escalation protocols. They're trained specifically on your business knowledge and have clear boundaries on what they can and cannot answer.
                </p>
                <p className="text-muted-foreground">
                  For complex or sensitive queries, they seamlessly escalate to human team members. The error rate is typically lower than human employees because there's no fatigue, distraction, or mood variations.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">How long does it take to implement?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  Most automation projects are completed within 2-4 weeks. Simple chatbots and workflow automations can be live within days. More complex AI agents with custom training take 3-4 weeks.
                </p>
                <p className="text-muted-foreground">
                  Compare this to hiring: job posting (2 weeks), interviews (2-4 weeks), onboarding (2-4 weeks), training (4-8 weeks). That's 3-5 months before an employee is fully productive.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">I'm not technical. Can I still use this?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  Absolutely! This is a done-for-you service. You don't need any technical knowledge. We handle everything from strategy and design to implementation and ongoing support.
                </p>
                <p className="text-muted-foreground">
                  Your only involvement is telling us about your business, approving designs, and enjoying the time savings. We provide training on how to monitor and adjust settings through simple dashboards.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">What's your guarantee?</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">
                  We offer a 90-Day ROI Guarantee: if your automation doesn't deliver measurable time or cost savings within 90 days, we'll keep iterating and improving until it does—at no additional cost.
                </p>
                <p className="text-muted-foreground">
                  We're confident because we've done this hundreds of times. Our average client saves 40+ hours per week and sees a 3x+ ROI within the first 6 months.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  </>;
};

export default AIAutomation;