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
  const fish1X = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fish2X = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const schoolY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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

        {/* Poisson milieu droit */}
        <motion.img
          src="/images/fish-2.webp"
          alt="Poisson"
          className="absolute right-[10%] top-[60%] w-[35px] md:w-[52px] float-fish opacity-85"
          style={{ '--fish-duration': '9s', '--fish-delay': '0.5s' } as any}
          loading="lazy"
        />

        {/* Poisson centre */}
        <motion.img
          src="/images/fish-4.webp"
          alt="Poisson"
          className="absolute left-1/2 -translate-x-1/2 top-[70%] w-[30px] md:w-[45px] float-fish"
          style={{ '--fish-duration': '8s', '--fish-delay': '1.5s' } as any}
          loading="lazy"
        />

        {/* Banc de poissons bas gauche - parallax doux */}
        <motion.img
          src="/images/school-1-left.webp"
          alt="Banc de poissons"
          style={{ y: schoolY }}
          className="absolute left-[12%] top-[68%] w-[80px] md:w-[130px] opacity-70 float-fish"
          loading="lazy"
        />

        {/* Poisson fond droite */}
        <motion.img
          src="/images/left-fish-3.webp"
          alt="Poisson"
          className="absolute right-[25%] top-[72%] w-[38px] md:w-[55px] float-fish"
          style={{ '--fish-duration': '7s', '--fish-delay': '3s' } as any}
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
      </div>
    </section>
  );
};

export default HeroSection;
