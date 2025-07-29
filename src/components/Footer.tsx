import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Youtube,
  ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "API Documentation", href: "#" },
        { name: "Integrations", href: "#" },
        { name: "Changelog", href: "#" },
        { name: "Roadmap", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press Kit", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Partners", href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Community", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Webinars", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Best Practices", href: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR Compliance", href: "#" },
        { name: "Security", href: "#" },
        { name: "DPA", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
    <footer className="relative bg-background border-t border-glass-border">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4" ref={ref}>
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Zap className="h-8 w-8 text-primary animate-glow-pulse" />
                  <div className="absolute inset-0 h-8 w-8 bg-primary/20 rounded-full blur-md animate-pulse" />
                </div>
                <span className="text-xl font-bold gradient-text">
                  ADmyBRAND
                </span>
                <span className="text-sm text-accent font-medium">AI Suite</span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform your marketing with the power of artificial intelligence. 
                Create, optimize, and scale your campaigns with unprecedented efficiency 
                and precision.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">hello@admybrand.ai</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-glass border border-glass-border rounded-lg flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section, sectionIndex) => (
                  <motion.div key={sectionIndex} variants={itemVariants}>
                    <h3 className="font-semibold text-foreground mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                          >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-8 border-t border-glass-border"
        >
          <div className="glass-card p-8 rounded-2xl border border-primary/30">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Stay ahead of the AI marketing curve
                </h3>
                <p className="text-muted-foreground">
                  Get the latest insights, tips, and updates delivered to your inbox.
                </p>
              </div>
              <div className="flex space-x-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="glass-card border border-glass-border rounded-lg px-4 py-2 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 flex-1 md:w-64"
                />
                <Button className="bg-gradient-primary hover:shadow-glow whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-8 border-t border-glass-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 ADmyBRAND AI Suite. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-sm text-muted-foreground">
                Made with ❤️ for marketers worldwide
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Back to top
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;