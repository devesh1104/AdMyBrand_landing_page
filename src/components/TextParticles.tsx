import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";

interface TextParticlesProps {
  text: string;
  className?: string;
}

const TextParticles = ({ text, className = "" }: TextParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    char: string;
    x: number;
    y: number;
    originalX: number;
    originalY: number;
  }>>([]);
  const [charWidths, setCharWidths] = useState<number[]>([]);

  // Measure character widths after mount or text change
  useLayoutEffect(() => {
    if (!measureRef.current) return;
    const spans = Array.from(measureRef.current.children) as HTMLSpanElement[];
    const widths = spans.map(span => span.offsetWidth);
    setCharWidths(widths);
  }, [text]);

  useEffect(() => {
    if (!containerRef.current || charWidths.length === 0) return;

    const chars = text.split('');
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate x positions based on measured widths
    let xOffset = 0;
    const totalWidth = charWidths.reduce((a, b) => a + b, 0);
    const startX = centerX - totalWidth / 2;

    const newParticles = chars.map((char, index) => {
      const x = startX + xOffset;
      const y = centerY - 15; // keep y centered
      const particle = {
        id: index,
        char,
        x,
        y,
        originalX: x,
        originalY: y,
      };
      xOffset += charWidths[index] || 0;
      return particle;
    });

    setParticles(newParticles);
  }, [text, charWidths]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isHovered || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setParticles(prev => prev.map(particle => {
      const distance = Math.sqrt(
        Math.pow(mouseX - particle.originalX, 2) + 
        Math.pow(mouseY - particle.originalY, 2)
      );

      if (distance < 100) {
        const angle = Math.atan2(
          particle.originalY - mouseY,
          particle.originalX - mouseX
        );
        const force = (100 - distance) * 0.5;
        
        return {
          ...particle,
          x: particle.originalX + Math.cos(angle) * force,
          y: particle.originalY + Math.sin(angle) * force,
        };
      }

      return particle;
    }));
  };

  const resetParticles = () => {
    setParticles(prev => prev.map(particle => ({
      ...particle,
      x: particle.originalX,
      y: particle.originalY,
    })));
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetParticles();
      }}
      onMouseMove={handleMouseMove}
      style={{ minHeight: '100px', position: 'relative' }}
    >
      {/* Invisible text for layout */}
      <span className="invisible">{text}</span>
      {/* Hidden measure spans for each character */}
      <div ref={measureRef} className="absolute left-0 top-0 opacity-0 pointer-events-none select-none whitespace-pre" aria-hidden="true">
        {text.split('').map((char, i) => (
          <span key={i} className="inline-block">{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </div>
      {/* Particle characters */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute text-inherit font-inherit"
            animate={{
              x: Math.round(particle.x),
              y: Math.round(particle.y),
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              mass: 0.5,
            }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transformOrigin: 'center',
            }}
          >
            {particle.char === ' ' ? '\u00A0' : particle.char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TextParticles;