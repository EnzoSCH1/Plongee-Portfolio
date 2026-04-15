import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import LightRays from './LightRays';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);
  const reefY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const stingrayX = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const stingrayY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const turtleX = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      {/* Video background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/video_fond_marin.webm" type="video/webm" />
        </video>
        {/* Overlay gradient for smooth transition */}
        <div className="hero-video-gradient" />


        <LightRays />

        {/* Title */}
        <motion.div
          style={{ opacity: titleOpacity, scale: titleScale }}
          className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
        >
          <h1 className="wavy-text text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-4 tracking-widest">
           carnet de plongée
          </h1>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground font-light text-center max-w-3xl">
            Enzo SCHNEIDER
          </h2>
          <p className="mt-8 text-foreground/80 text-sm md:text-base max-w-xl text-center font-body leading-relaxed">
            ici mon carnet de plongée digital ou vous verrez les différentes plongées que j'ai pu faire, les espèces que j'ai pu voir et les différentes anecdotes qui vont avec
          </p>
          <p className="mt-6 text-foreground/50 text-xs tracking-widest uppercase animate-bounce">
            descendez pour explorer les profondeurs
          </p>
        </motion.div>

        {/* Stingray - left */}
        <motion.img
          src="/images/StingRay.webp"
          alt="Stingray"
          style={{ x: stingrayX, y: stingrayY }}
          className="absolute left-0 top-[15%] w-[200px] md:w-[320px] opacity-90 float-fish"
          loading="lazy"
        />

        {/* Turtle - right */}
        <motion.img
          src="/images/turtle.webp"
          alt="Turtle"
          style={{ x: turtleX }}
          className="absolute right-[5%] top-[55%] w-[120px] md:w-[180px] opacity-80 float-fish"
          loading="lazy"
        />

        {/* Fish - left */}
        <motion.img
          src="/images/left-fish-1.webp"
          alt="Fish"
          className="absolute left-[5%] top-[45%] w-[50px] md:w-[70px] float-fish"
          style={{ '--fish-duration': '6s', '--fish-delay': '1s' } as any}
          loading="lazy"
        />

        {/* Fish - right */}
        <motion.img
          src="/images/left-fish-3.webp"
          alt="Fish"
          className="absolute right-[15%] top-[35%] w-[45px] md:w-[65px] float-fish"
          style={{ '--fish-duration': '7s', '--fish-delay': '2s' } as any}
          loading="lazy"
        />

        {/* Coral reef at bottom */}
        <motion.div
          style={{ y: reefY }}
          className="absolute bottom-0 left-0 right-0 z-20"
        >
          <img
            src="/images/Reef-fish-2.webp"
            alt="Coral reef"
            className="w-full object-cover object-top"
          />
        </motion.div>

        {/* School of fish */}
        <motion.img
          src="/images/school01.webp"
          alt="School of fish"
          className="absolute left-[10%] top-[70%] w-[80px] md:w-[120px] float-fish opacity-70"
          style={{ '--fish-duration': '10s', '--fish-delay': '3s' } as any}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default HeroSection;
