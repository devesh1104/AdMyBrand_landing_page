import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Pause, Volume2, Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section className="py-20 relative overflow-hidden">
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
            <Badge className="glass-card border-primary/30 px-4 py-2 text-sm">
              <Play className="w-4 h-4 mr-2 text-primary" />
              See It In Action
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Watch{" "}
            <span className="gradient-text">ADmyBRAND</span> Transform Marketing
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            See how our AI-powered suite revolutionizes marketing workflows 
            and delivers results in just minutes, not hours.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <div className="relative glass-card rounded-2xl overflow-hidden border border-primary/30 group">
            {/* Video Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative">
              {/* Demo Video Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </motion.button>
              </div>

              {/* Mock Video Interface */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass-card p-3 rounded-lg border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-white text-sm">
                        {isPlaying ? "Playing: ADmyBRAND Demo" : "Paused: ADmyBRAND Demo"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="w-4 h-4 text-white/70" />
                      <Maximize className="w-4 h-4 text-white/70" />
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-2 w-full bg-white/20 rounded-full h-1">
                    <motion.div
                      className="bg-primary h-1 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: isPlaying ? "75%" : "30%" }}
                      transition={{ duration: 2 }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Demo Elements */}
              <motion.div
                className="absolute top-8 left-8 glass-card p-3 rounded-lg border border-primary/30"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-sm text-white">✨ AI Content Generated</div>
                <div className="text-xs text-white/70">+300% Engagement</div>
              </motion.div>

              <motion.div
                className="absolute top-8 right-8 glass-card p-3 rounded-lg border border-accent/30"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <div className="text-sm text-white">🎯 Campaign Optimized</div>
                <div className="text-xs text-white/70">ROI +250%</div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-8 glass-card p-3 rounded-lg border border-primary/30"
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <div className="text-sm text-white">📊 Real-time Analytics</div>
                <div className="text-xs text-white/70">Live Insights</div>
              </motion.div>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { label: "Demo Views", value: "50K+" },
              { label: "Average Rating", value: "4.9/5" },
              { label: "Setup Time", value: "< 5 min" },
              { label: "ROI Increase", value: "250%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center glass-card p-4 rounded-xl border border-glass-border"
              >
                <div className="text-xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              Book a Personal Demo
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              Schedule a 1-on-1 demo with our AI marketing experts
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;