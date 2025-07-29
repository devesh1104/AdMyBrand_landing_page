import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      id: 1,
      content: "ADmyBRAND AI Suite completely transformed our marketing approach. We've seen a 300% increase in engagement and our content creation time has been cut by 80%. The AI-generated campaigns perform better than anything we created manually.",
      author: "Sarah Chen",
      role: "CMO",
      company: "TechFlow Solutions",
      rating: 5,
      avatar: "SC",
    },
    {
      id: 2,
      content: "The automation features are incredible. Our team can now focus on strategy while the AI handles the execution. We've launched 50+ campaigns this quarter with remarkable consistency and quality. ROI increased by 250%.",
      author: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "Growth Dynamics",
      rating: 5,
      avatar: "MR",
    },
    {
      id: 3,
      content: "As a small business owner, I never thought we could compete with larger companies. ADmyBRAND AI Suite leveled the playing field. Our social media presence exploded and we're generating leads we never imagined possible.",
      author: "Emily Watson",
      role: "Founder",
      company: "Local Craft Co.",
      rating: 5,
      avatar: "EW",
    },
    {
      id: 4,
      content: "The AI insights are game-changing. It predicted market trends that our analysts missed and helped us pivot our campaigns before our competitors. The predictive analytics feature alone paid for the entire subscription.",
      author: "James Liu",
      role: "VP of Marketing",
      company: "InnovateCorp",
      rating: 5,
      avatar: "JL",
    },
    {
      id: 5,
      content: "Customer journey mapping with AI has revolutionized how we understand our audience. We can now personalize experiences at scale and our customer lifetime value has increased by 180%. Best investment we've made.",
      author: "Anna Kowalski",
      role: "Head of Digital",
      company: "RetailMax",
      rating: 5,
      avatar: "AK",
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

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
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
              <Star className="w-4 h-4 mr-2 text-primary" />
              Customer Stories
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Loved by{" "}
            <span className="gradient-text">10,000+</span> Marketers
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            See how businesses of all sizes are transforming their marketing 
            with our AI-powered suite and achieving remarkable results.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/30 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {/* Rating Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl leading-relaxed mb-8 text-foreground">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="glass-card border-primary/30 hover:bg-primary/10"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="glass-card border-primary/30 hover:bg-primary/10"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "250%", label: "Average ROI Increase" },
            { value: "50M+", label: "Campaigns Created" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center glass-card p-6 rounded-xl border border-glass-border"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;