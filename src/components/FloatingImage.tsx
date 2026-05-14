import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingImageProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  parallaxSpeed?: number;
  floatDuration?: number;
  floatDelay?: number;
  rotate?: number;
  flipX?: boolean;
}

const FloatingImage = ({
  src,
  alt = '',
  className = '',
  width = 100,
  parallaxSpeed = 0.2,
  floatDuration = 8,
  floatDelay = 0,
  rotate = 0,
  flipX = false,
}: FloatingImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * parallaxSpeed, -100 * parallaxSpeed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`absolute float-fish ${className}`}
      initial={{ '--fish-rotate': `${rotate}deg`, '--fish-duration': `${floatDuration}s`, '--fish-delay': `${floatDelay}s` } as any}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        className="select-none"
        style={flipX ? { transform: 'scaleX(-1)' } : undefined}
        loading="lazy"
      />
    </motion.div>
  );
};

export default FloatingImage;
