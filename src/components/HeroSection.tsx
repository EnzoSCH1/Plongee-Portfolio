import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import LightRays from './LightRays';

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const displacementRef = useRef<SVGFEDisplacementMapElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const reefY = useTransform(scrollYProgress, [0, 0.6], [0, 40]);
  const fish1X = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fish2X = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const schoolY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // scrollYProgress 0→1 = hero visible (section 200vh, viewport 100vh, sticky 100vh)
  const filterScale = useTransform(scrollYProgress, [0, 0.2, 0.65, 1], [8, 55, 160, 300]);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.9], [1, 0]);

  useMotionValueEvent(filterScale, 'change', (v) => {
    if (displacementRef.current) {
      displacementRef.current.setAttribute('scale', String(v));
    }
  });

  useMotionValueEvent(titleOpacity, 'change', (v) => {
    if (titleRef.current) {
      titleRef.current.style.opacity = String(v);
    }
  });

  return (
    <section ref={ref} className="relative h-screen">
      {/* Video background */}
      <div className="relative h-full w-full overflow-hidden">

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


        <LightRays hero />

        {/* SVG liquid filter pour le titre */}
        <svg style={{ display: 'none' }} aria-hidden="true">
          <defs>
            <filter id="liquid-text-filter" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.012 0.008"
                numOctaves="4"
                seed="5"
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="18s"
                  values="0.012 0.008;0.018 0.010;0.010 0.006;0.016 0.012;0.012 0.008"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                ref={displacementRef}
                in="SourceGraphic"
                in2="noise"
                scale="8"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        {/* Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl text-foreground mb-4"
            style={{ filter: 'url(#liquid-text-filter)', fontFamily: '"Comic Sans MS", "Comic Sans", cursive', letterSpacing: '0.05em' }}
          >
            Carnet de plongée
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
        </div>

        {/* Poisson milieu droit */}
        <motion.img
          src="/images/fish-2.webp"
          alt="Poisson"
          className="absolute right-[10%] top-[79%] w-[35px] md:w-[52px] float-fish opacity-85"
          style={{ '--fish-duration': '9s', '--fish-delay': '0.5s' } as any}
          loading="lazy"
        />

        {/* Poisson centre */}
        <motion.img
          src="/images/fish-4.webp"
          alt="Poisson"
          className="absolute left-1/2 -translate-x-1/2 top-[78%] w-[30px] md:w-[45px] float-fish"
          style={{ '--fish-duration': '8s', '--fish-delay': '1.5s' } as any}
          loading="lazy"
        />

        {/* Banc de poissons bas gauche - parallax doux */}
        <motion.img
          src="/images/school-1-left.webp"
          alt="Banc de poissons"
          style={{ y: schoolY }}
          className="absolute left-[12%] top-[71%] w-[80px] md:w-[130px] opacity-70 float-fish"
          loading="lazy"
        />

        {/* Poisson fond droite */}
        <motion.img
          src="/images/left-fish-3_1.webp"
          alt="Poisson"
          className="absolute right-[25%] top-[74%] w-[38px] md:w-[55px] opacity-65 float-fish"
          style={{ '--fish-duration': '7s', '--fish-delay': '3s' } as any}
          loading="lazy"
        />

        {/* Coral reef at bottom */}
        <motion.div
          style={{ y: reefY }}
          className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        >
          <img
            src="/images/Reef-fish-2.webp"
            alt="Coral reef"
            className="w-[75%] object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
