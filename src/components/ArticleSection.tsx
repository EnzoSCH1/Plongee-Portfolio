import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ArticleSectionProps {
  title: string;
  subtitle?: string;
  paragraphs: string[];
  gradientClass?: string;
}

const ArticleSection = ({ title, subtitle, paragraphs, gradientClass = '' }: ArticleSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  return (
    <div ref={ref} className={`relative ${gradientClass} py-24 md:py-40 px-6`}>
      <motion.div
        style={{ opacity }}
        className="max-w-3xl mx-auto"
      >
        {title && (
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 font-semibold">
            {title}
          </h2>
        )}
        {subtitle && (
          <h3 className="font-display text-xl md:text-2xl text-foreground/90 mb-8 italic leading-relaxed">
            {subtitle}
          </h3>
        )}
        {paragraphs.map((p, i) => (
          <p key={i} className="font-body text-foreground/75 text-base md:text-lg leading-relaxed mb-6">
            {p}
          </p>
        ))}
      </motion.div>
    </div>
  );
};

export default ArticleSection;
