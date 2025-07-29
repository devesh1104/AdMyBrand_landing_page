import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, X, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: { monthly: 29, annual: 25 },
      description: "Perfect for small businesses getting started with AI marketing",
      features: [
        "AI Content Generation (50 pieces/month)",
        "Basic Analytics Dashboard",
        "Email Campaign Automation",
        "Social Media Scheduling",
        "Template Library Access",
        "Email Support",
      ],
      limitations: [
        "Advanced AI Features",
        "Custom Integrations",
        "Priority Support",
      ],
      popular: false,
      gradient: "gradient-accent",
    },
    {
      name: "Professional",
      icon: Crown,
      price: { monthly: 79, annual: 65 },
      description: "Ideal for growing businesses that need advanced AI capabilities",
      features: [
        "Everything in Starter",
        "AI Content Generation (500 pieces/month)",
        "Advanced Analytics & Insights",
        "A/B Testing Automation",
        "Custom AI Model Training",
        "Multi-channel Campaigns",
        "API Access",
        "Priority Support",
      ],
      limitations: [
        "White-label Options",
        "Dedicated Account Manager",
      ],
      popular: true,
      gradient: "gradient-primary",
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: { monthly: 199, annual: 165 },
      description: "For large organizations requiring maximum AI power and customization",
      features: [
        "Everything in Professional",
        "Unlimited AI Content Generation",
        "Custom AI Model Development",
        "Advanced Integrations (CRM, ERP)",
        "White-label Solutions",
        "Dedicated Account Manager",
        "Custom Training & Onboarding",
        "24/7 Phone Support",
        "SLA Guarantee",
      ],
      limitations: [],
      popular: false,
      gradient: "gradient-accent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <section id="pricing" className="py-20 relative overflow-hidden">
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
              <Crown className="w-4 h-4 mr-2 text-primary" />
              Flexible Pricing
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Choose Your{" "}
            <span className="gradient-text">AI Marketing</span> Plan
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Scale your marketing efforts with plans designed for every business size. 
            Start free and upgrade as you grow.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-4 mb-12"
          >
            <span className={`text-sm ${!isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm ${isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
              Annual
            </span>
            <Badge className="bg-accent/20 text-accent border-accent/30">
              Save 20%
            </Badge>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`relative group ${plan.popular ? 'order-first lg:order-none' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-primary text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className={`glass-card p-8 rounded-2xl border h-full ${
                plan.popular 
                  ? 'border-primary/50 shadow-glow' 
                  : 'border-glass-border hover:border-primary/30'
              } transition-all duration-300`}>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-${plan.gradient} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-glow transition-all duration-300`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  
                  {isAnnual && (
                    <p className="text-accent text-sm mt-1">
                      Billed annually (${(isAnnual ? plan.price.annual : plan.price.monthly) * 12})
                    </p>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, limitationIndex) => (
                    <div key={limitationIndex} className="flex items-start space-x-3 opacity-50">
                      <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary hover:shadow-glow' 
                      : 'bg-gradient-accent hover:shadow-glow'
                  } transition-all duration-300`}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl border border-primary/30 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Not sure which plan is right for you?
            </h3>
            <p className="text-muted-foreground mb-6">
              Try our AI-powered recommendation tool or speak with our experts to find your perfect plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="glass-card border-primary/30">
                Get Recommendation
              </Button>
              <Button className="bg-gradient-primary">
                Book Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;