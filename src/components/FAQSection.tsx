import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HelpCircle, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const faqs = [
    {
      question: "What makes ADmyBRAND AI Suite different from other marketing tools?",
      answer: "ADmyBRAND AI Suite combines advanced artificial intelligence with intuitive design to provide a comprehensive marketing solution. Unlike traditional tools that focus on single functions, our suite offers end-to-end campaign management, from content creation to performance optimization, all powered by cutting-edge AI that learns and adapts to your brand's unique voice and audience preferences."
    },
    {
      question: "How quickly can I see results with ADmyBRAND AI Suite?",
      answer: "Most users see significant improvements within the first 30 days. Our AI begins optimizing your campaigns immediately, and you'll notice better engagement rates, higher click-through rates, and improved conversion metrics typically within 2-3 weeks. However, the AI continues to learn and improve over time, with peak performance usually achieved within 60-90 days of consistent use."
    },
    {
      question: "Do I need technical skills to use the platform?",
      answer: "Not at all! ADmyBRAND AI Suite is designed for marketers, not engineers. Our intuitive interface guides you through every step, and our AI handles the complex technical aspects automatically. We also provide comprehensive onboarding, tutorials, and 24/7 support to ensure you're successful from day one. If you can use email or social media, you can master our platform."
    },
    {
      question: "How does the AI content generation work?",
      answer: "Our AI analyzes your brand voice, target audience, industry trends, and campaign goals to generate highly relevant content. It uses advanced natural language processing and machine learning models trained on millions of successful campaigns. The AI creates everything from social media posts and email copy to blog articles and ad headlines, all while maintaining your brand's unique tone and style."
    },
    {
      question: "Can I integrate ADmyBRAND with my existing marketing tools?",
      answer: "Absolutely! We offer extensive integrations with popular platforms including HubSpot, Salesforce, Mailchimp, Google Analytics, Facebook Ads, LinkedIn, and many more. Our API also allows for custom integrations with your existing tech stack. Our team can help you set up integrations during onboarding to ensure seamless workflow continuity."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support across all plans. Starter users get email support with 24-hour response times. Professional users receive priority support with 4-hour response times plus live chat. Enterprise customers get dedicated account managers, phone support, and guaranteed SLAs. We also provide extensive documentation, video tutorials, and regular webinars."
    },
    {
      question: "Is my data secure with ADmyBRAND AI Suite?",
      answer: "Security is our top priority. We use enterprise-grade encryption (AES-256) for data at rest and in transit, maintain SOC 2 Type II compliance, and follow GDPR and CCPA regulations. Your data is stored in secure, redundant data centers with 99.9% uptime guarantees. We never share your data with third parties and you maintain full ownership of all your content and insights."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no penalties or hidden fees. Your service will continue until the end of your current billing period, and you'll retain access to your data for 90 days after cancellation for export purposes. We also offer a 30-day money-back guarantee if you're not completely satisfied with the platform."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Badge className="glass-card border-primary/30 px-4 py-2 text-sm">
              <HelpCircle className="w-4 h-4 mr-2 text-primary" />
              Frequently Asked Questions
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Got Questions? We've Got{" "}
            <span className="gradient-text">Answers</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl border border-glass-border overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem 
                    value={`item-${index}`} 
                    className="border-b border-glass-border last:border-b-0"
                  >
                    <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-primary/5 transition-colors group">
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                          <Plus className="w-4 h-4 text-white group-data-[state=open]:rotate-45 transition-transform duration-200" />
                        </div>
                        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="pl-12">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl border border-primary/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Get in touch and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card border-primary/30 hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Book a Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;