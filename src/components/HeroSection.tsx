import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TextParticles from "@/components/TextParticles";

const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="glass-card border-primary/30 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Powered by Advanced AI Technology
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <TextParticles
              text="Transform Your Marketing with AI Excellence"
              className="block text-accent" // or your preferred classes
            />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            <TextParticles
              text="Unlock the power of artificial intelligence to revolutionize your marketing campaigns. Create, optimize, and scale your brand presence with our comprehensive AI suite."
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            />
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="glass-card border-primary/30 hover:bg-primary/10 text-lg px-8 py-6 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* AI Dashboard Preview */}
                <motion.div
                  className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Content Generator</h3>
                  <p className="text-sm text-muted-foreground">
                    Create compelling copy in seconds
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-accent/10 rounded-lg p-6 border border-accent/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg mb-4 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Smart Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered insights and recommendations
                  </p>
                </motion.div>

                <motion.div
                  className="bg-gradient-primary/10 rounded-lg p-6 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Automated Campaigns</h3>
                  <p className="text-sm text-muted-foreground">
                    Set it and forget it marketing
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 glass-card p-4 rounded-lg border border-primary/30"
            >
              <div className="text-2xl font-bold text-primary">10M+</div>
              <div className="text-sm text-muted-foreground">Campaigns Created</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute -top-6 -right-6 glass-card p-4 rounded-lg border border-accent/30"
            >
              <div className="text-2xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;