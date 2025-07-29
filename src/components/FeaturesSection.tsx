import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Brain, 
  Target, 
  Zap, 
  BarChart, 
  Users, 
  Rocket,
  Sparkles,
  TrendingUp
} from "lucide-react";

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Create compelling marketing copy, social media posts, and email campaigns with our advanced AI engine.",
      gradient: "gradient-primary",
    },
    {
      icon: Target,
      title: "Smart Audience Targeting",
      description: "Identify and reach your ideal customers with precision using AI-powered audience analysis.",
      gradient: "gradient-accent",
    },
    {
      icon: Zap,
      title: "Automated Campaigns",
      description: "Set up and run marketing campaigns that optimize themselves in real-time for maximum ROI.",
      gradient: "gradient-primary",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Get deep insights into campaign performance with AI-driven analytics and predictive modeling.",
      gradient: "gradient-accent",
    },
    {
      icon: Users,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize every touchpoint in your customer's journey with AI assistance.",
      gradient: "gradient-primary",
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Continuously improve your marketing performance with AI recommendations and auto-adjustments.",
      gradient: "gradient-accent",
    },
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
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <div className="inline-flex items-center glass-card px-4 py-2 rounded-full border border-primary/30">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium">Powerful Features</span>
            </div>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Dominate</span> Your Market
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Our comprehensive AI suite provides all the tools you need to create, 
            manage, and optimize your marketing campaigns with unprecedented efficiency.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="glass-card p-8 rounded-2xl border border-glass-border hover:border-primary/30 transition-all duration-300 h-full">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-${feature.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Floating Decoration */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-pulse" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
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
              Ready to Experience the Future of Marketing?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of businesses already using ADmyBRAND AI Suite to scale their marketing efforts.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300"
            >
              Start Your Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;