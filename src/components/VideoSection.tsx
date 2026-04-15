import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Bubbles from './Bubbles';
import LightRays from './LightRays';

const VideoSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-[150vh] overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/profondeur_marine.webm" type="video/webm" />
        </video>

        {/* Blue tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsla(220,100%,6%,0.7)] via-[hsla(215,95%,12%,0.4)] to-[hsla(210,90%,20%,0.5)]" />

        <LightRays />
        <Bubbles />

        {/* Content overlay */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6"
        >
          <h2 className="font-display text-3xl md:text-5xl text-foreground text-center mb-4 font-semibold">
            Hyundai & Healthy Seas
          </h2>
          <p className="font-body text-foreground/70 text-base md:text-lg text-center max-w-2xl leading-relaxed">
            Hyundai announced its partnership with Healthy Seas in 2021 as a way of fostering a more sustainable future. With Hyundai's commitment to developing emission-free mobility solutions, and Healthy Seas' expertise in protecting marine ecosystems, the two organisations hold a shared vision for shaping sustainable communities.
          </p>
        </motion.div>

        {/* Coral reef at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <img
            src="/images/Reef-fish-2.webp"
            alt="Coral reef"
            className="w-full object-cover object-top opacity-60"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
