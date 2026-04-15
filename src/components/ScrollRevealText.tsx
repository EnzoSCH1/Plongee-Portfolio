import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollRevealTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

const ScrollRevealText = ({ children, className = '', as = 'h1' }: ScrollRevealTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.3'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 1], [8, 0, 0]);
  const filterBlur = useTransform(blur, (v) => `blur(${v}px)`);

  const Tag = motion[as];

  return (
    <div ref={ref} className="min-h-[60vh] flex items-center justify-center px-6">
      <Tag
        style={{ opacity, scale, filter: filterBlur }}
        className={`font-display text-center max-w-4xl ${className}`}
      >
        {children}
      </Tag>
    </div>
  );
};

export default ScrollRevealText;
