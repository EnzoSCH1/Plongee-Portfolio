import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import FloatingImage from './FloatingImage';

interface DecorationLayerProps {
  variant: 'surface' | 'mid' | 'deep' | 'abyss' | 'footer';
}

const DecorationLayer = ({ variant }: DecorationLayerProps) => {
  const turtleRef = useRef<HTMLDivElement>(null);
  const turtleInView = useInView(turtleRef, { once: false, margin: '-10% 0px' });
  const [turtleKey, setTurtleKey] = useState(0);
  useEffect(() => {
    if (turtleInView) setTurtleKey(k => k + 1);
  }, [turtleInView]);

  const rayRef = useRef<HTMLDivElement>(null);
  const rayInView = useInView(rayRef, { once: false, margin: '0px' });
  const [rayKey, setRayKey] = useState(0);
  useEffect(() => {
    if (rayInView) setRayKey(k => k + 1);
  }, [rayInView]);

  const boltRef = useRef<HTMLDivElement>(null);
  const boltInView = useInView(boltRef, { once: false, margin: '0px' });
  const [boltKey, setBoltKey] = useState(0);
  useEffect(() => {
    if (boltInView) setBoltKey(k => k + 1);
  }, [boltInView]);

  const bolt2Ref = useRef<HTMLDivElement>(null);
  const bolt2InView = useInView(bolt2Ref, { once: false, margin: '0px' });
  const [bolt2Key, setBolt2Key] = useState(0);
  useEffect(() => {
    if (bolt2InView) setBolt2Key(k => k + 1);
  }, [bolt2InView]);

  const abyssBoltRef = useRef<HTMLDivElement>(null);
  const abyssBoltInView = useInView(abyssBoltRef, { once: false, margin: '0px' });
  const [abyssBoltKey, setAbyssBoltKey] = useState(0);
  useEffect(() => {
    if (abyssBoltInView) setAbyssBoltKey(k => k + 1);
  }, [abyssBoltInView]);

  const propRef = useRef<HTMLDivElement>(null);
  const propInView = useInView(propRef, { once: false, margin: '0px' });
  const [propKey, setPropKey] = useState(0);
  useEffect(() => {
    if (propInView) setPropKey(k => k + 1);
  }, [propInView]);

  const sharkRef = useRef<HTMLDivElement>(null);
  const sharkInView = useInView(sharkRef, { once: false, margin: '0px' });
  const [sharkKey, setSharkKey] = useState(0);
  useEffect(() => {
    if (sharkInView) setSharkKey(k => k + 1);
  }, [sharkInView]);

  const footerCoralRef = useRef<HTMLDivElement>(null);
  const footerCoralInView = useInView(footerCoralRef, { once: false, margin: '0px' });
  const { scrollY } = useScroll();
  const coralParallaxY = useTransform(scrollY, [0, 3000], [0, -80]);

  if (variant === 'surface') {
    return (
      <>
        {/* fillet droit haut */}
        <img src="/images/fillet.webp" alt="" className="absolute right-0 top-[18%] w-[440px] md:w-[760px] opacity-70 pointer-events-none float-fillet" />
        {/* fillet_1 gauche — aligné avec la citation "It smelled toxic" */}
        <img src="/images/fillet 1.webp" alt="" className="absolute left-0 top-[62%] w-[440px] md:w-[700px] opacity-70 pointer-events-none float-fillet-delayed" />

        {/* LEFT side — left-fish-* */}
        <FloatingImage src="/images/left-fish-3_1.webp" className="left-[6%] top-[15%] opacity-65" width={70} parallaxSpeed={0.3} floatDuration={8} floatDelay={1} rotate={4} />
        <FloatingImage src="/images/left-fish-1.webp" className="left-[4%] top-[38%]" width={70} parallaxSpeed={0.2} floatDuration={11} floatDelay={3} rotate={6} />
        <FloatingImage src="/images/left-fish-3_1.webp" className="left-[3%] top-[62%] opacity-45" width={65} parallaxSpeed={0.25} floatDuration={9} floatDelay={2} rotate={-6} />
        <FloatingImage src="/images/left-fish-1.webp" className="left-[5%] top-[82%]" width={70} parallaxSpeed={0.35} floatDuration={8} floatDelay={5} rotate={3} />

        {/* poissons — droite */}
        <FloatingImage src="/images/fish-2.webp" className="right-[5%] top-[48%]" width={65} parallaxSpeed={0.2} floatDuration={8} floatDelay={0} rotate={-4} />

        {/* RIGHT side — fish-* */}
        <FloatingImage src="/images/fish-1.webp" className="right-[6%] top-[18%]" width={80} parallaxSpeed={0.2} floatDuration={10} floatDelay={2} rotate={3} />
        <FloatingImage src="/images/fish-2.webp" className="right-[10%] top-[38%]" width={70} parallaxSpeed={0.2} floatDuration={9} floatDelay={1} rotate={-8} />
        <FloatingImage src="/images/left-fish-3_1.webp" className="right-[8%] top-[62%] opacity-45 z-[3]" width={60} parallaxSpeed={0.3} floatDuration={7} floatDelay={4} rotate={-6} flipX/>
        <FloatingImage src="/images/left-fish-3_1.webp" className="right-[8%] top-[65%] opacity-45 z-[3]" width={50} parallaxSpeed={0.3} floatDuration={7} floatDelay={4} rotate={-6} flipX />
        <FloatingImage src="/images/fish-2.webp" className="right-[12%] top-[75%] opacity-65" width={55} parallaxSpeed={0.25} floatDuration={8} floatDelay={3} rotate={5} />
        <FloatingImage src="/images/fish-4.webp" className="right-[7%] top-[88%]" width={45} parallaxSpeed={0.15} floatDuration={10} floatDelay={2} rotate={8} />

        {/* Corail gauche — aligné avec la citation "En Méditerranée, mon berceau" */}
        <img
          src="/images/decor-diver-coral.webp"
          alt=""
          className="absolute left-0 top-[10%] w-[100px] md:w-[150px] pointer-events-none z-[2] brightness-51 opacity-85 rotate-180"
          style={{ transform: 'translateX(-10%) rotate(180deg)' }}
        />

        {/* Reef-fish vertical — à droite de la citation "En Mer Rouge" */}
        <img
          src="/images/Reef-fish-2.webp"
          alt=""
          className="absolute right-0 pointer-events-none z-[2] brightness-50 opacity-70 origin-right"
          style={{
            top: '55%',
            width: '940px',
            transform: 'translateX(-10%) rotate(-90deg)',
            transformOrigin: 'right center',
          }}
        />
      </>
    );
  }

  if (variant === 'mid') {
    return (
      <>
        {/* Fishing net right edge */}
        <img src="/images/fishingnet02-right-2x.webp" alt="" className="absolute right-0 top-[10%] w-[120px] md:w-[220px] opacity-60 pointer-events-none z-[3] float-fillet" />

        {/* Tortue — traverse l'écran de gauche à droite à l'entrée de la section */}
        <div ref={turtleRef} className="absolute top-[25%] left-0 right-0 pointer-events-none h-[200px] z-[1]">
          <motion.img
            key={turtleKey}
            src="/images/turtle.webp"
            alt="Tortue"
            width={165}
            className="absolute top-0 select-none"
            initial={{ x: '-165px', opacity: 0 }}
            animate={{ x: 'calc(100vw + 165px)', opacity: [0, 1, 1, 0.8, 0] }}
            transition={{ duration: 10, ease: 'easeInOut', opacity: { duration: 10, times: [0, 0.08, 0.7, 0.92, 1] } }}
          />
        </div>

        <FloatingImage src="/images/left-fish-3.webp" className="left-[5%] top-[65%] opacity-50" width={50} parallaxSpeed={0.35} floatDuration={6} floatDelay={3} rotate={10} />
        <FloatingImage src="/images/fish-2.webp" className="right-[15%] top-[75%] opacity-50" width={50} parallaxSpeed={0.3} floatDuration={7} floatDelay={1} rotate={-5} />
        <FloatingImage src="/images/fish-3.webp" className="right-[10%] top-[40%] z-[4]" width={50} parallaxSpeed={0.2} floatDuration={9} floatDelay={4} rotate={8} />
        <FloatingImage src="/images/fish-3.webp" className="right-[3%] top-[42%] z-[4]" width={45} parallaxSpeed={0.2} floatDuration={9} floatDelay={4} rotate={8} />
        <FloatingImage src="/images/fish-3.webp" className="right-[10%] top-[45%] z-[4]" width={45} parallaxSpeed={0.3} floatDuration={9} floatDelay={4} rotate={8} />
      </>
    );
  }

  if (variant === 'deep') {
    return (
      <>
        {/* Raie — traverse en diagonale bas-gauche → haut-droit */}
        <div ref={rayRef} className="absolute top-[50%] left-0 right-0 pointer-events-none h-[250px] z-[2]">
          <motion.img
            key={rayKey}
            src="/images/StingRay.webp"
            alt="Raie"
            width={220}
            className="absolute top-[120px] select-none"
            initial={{ x: '-220px', y: 0, opacity: 0 }}
            animate={{ x: 'calc(100vw + 220px)', y: -740, opacity: [0, 1, 1, 0.8, 0] }}
            transition={{ duration: 10, ease: 'easeInOut', opacity: { duration: 10, times: [0, 0.08, 0.7, 0.92, 1] } }}
          />
        </div>
        {/* Fishing net right edge */}
        <img src="/images/fishingnet02-right-2x.webp" alt="" className="absolute left-0 top-[-15%] w-[100px] md:w-[180px] opacity-50 pointer-events-none float-fillet-flipped" />
         <FloatingImage src="/images/school-1-left.webp" className="left-[8%] top-[5%] opacity-50" width={150} parallaxSpeed={0.4} floatDuration={7} floatDelay={4} rotate={12} />
        <FloatingImage src="/images/left-fish-3.webp" className="left-[8%] top-[60%] opacity-50" width={55} parallaxSpeed={0.4} floatDuration={7} floatDelay={4} rotate={12} />
         <FloatingImage src="/images/fish-1 right.webp" className="right-[8%] top-[30%] opacity-50" width={55} parallaxSpeed={0.4} floatDuration={7} floatDelay={4} rotate={12} />
          <FloatingImage src="/images/left-fish-3.webp" className="left-[8%] top-[40%] opacity-50" width={55} parallaxSpeed={0.4} floatDuration={7} floatDelay={4} rotate={12} />
           <FloatingImage src="/images/fish-3 right.webp" className="right-[8%] top-[85%] opacity-50 z-[3]" width={55} parallaxSpeed={0.4} floatDuration={7} floatDelay={4} rotate={12} />
            <FloatingImage src="/images/fish-3 right.webp" className="right-[8%] top-[80%] opacity-50 z-[3]" width={55} parallaxSpeed={0.4} floatDuration={7} floatDelay={4} rotate={12} />
             <FloatingImage src="/images/left-fish-1.webp" className="left-[8%] top-[90%] opacity-50" width={55} parallaxSpeed={0.4} floatDuration={7} floatDelay={4} rotate={12} />
        {/* Bolt debris — chute avec apparition progressive */}
        <div ref={boltRef} className="absolute left-[8%] top-[75%] w-full pointer-events-none">
          <motion.img
            key={boltKey}
            src="/images/bolt.webp"
            alt=""
            className="absolute w-[30px] md:w-[50px] select-none opacity-80 -rotate-12"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 200, opacity: [0, 0.2, 0.8, 0] }}
            transition={{ duration: 6, ease: 'easeIn', opacity: { duration: 6, times: [0, 0.1, 0.75, 1] } }}
          />
          <motion.img
            key={boltKey + 100}
            src="/images/bolt.webp"
            alt=""
            className="absolute left-[160px] w-[25px] md:w-[40px] select-none rotate-45"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 200, opacity: [0, 0.2, 0.8, 0] }}
            transition={{ duration: 7, ease: 'easeIn', delay: 1, opacity: { duration: 7, times: [0, 0.1, 0.75, 1] } }}
          />
        </div>
        {/* Bolt droit — niveau "The scale of ocean garbage" */}
        <div ref={bolt2Ref} className="absolute right-[12%] top-[8%] w-[50px] h-[50px] pointer-events-none">
          <motion.img
            key={bolt2Key}
            src="/images/bolt.webp"
            alt=""
            className="absolute w-[28px] md:w-[45px] select-none -rotate-12"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 200, opacity: [0, 0.2, 0.8, 0] }}
            transition={{ duration: 6.5, ease: 'easeIn', delay: 0.4, opacity: { duration: 6.5, times: [0, 0.1, 0.75, 1] } }}
          />
        </div>
        {/* Coral at edges */}
        <img src="/images/decor-coral.webp" alt="" className="absolute right-0 bottom-0 w-[150px] md:w-[280px] opacity-40 pointer-events-none" />
        <img src="/images/decor-coral.webp" alt="" className="absolute left-0 bottom-[30%] w-[150px] md:w-[150px] opacity-40 pointer-events-none rotate-180" />
        <img src="/images/decor-coral.webp" alt="" className="absolute left-0 bottom-0 w-[150px] md:w-[100px] opacity-40 pointer-events-none rotate-180" />
      </>
    );
  }

  if (variant === 'abyss') {
    return (
      <>
        {/* Fishing net left edge */}
        <img src="/images/fishingnet02-left-2x.webp" alt="" className="absolute left-0 top-[25%] w-[150px] md:w-[180px] opacity-20 pointer-events-none" />

        {/* LEFT side */}
        <FloatingImage src="/images/school-1-left.webp" className="left-[3%] top-[15%] opacity-50" width={110} parallaxSpeed={0.15} floatDuration={10} floatDelay={2} />
        <FloatingImage src="/images/left-fish-1.webp" className="left-[2%] top-[38%] opacity-50" width={65} parallaxSpeed={0.25} floatDuration={9} floatDelay={1} rotate={5} />
        <FloatingImage src="/images/left-fish-3.webp" className="left-[4%] top-[60%] opacity-50" width={55} parallaxSpeed={0.3} floatDuration={8} floatDelay={3} rotate={-4} />
        <FloatingImage src="/images/left-fish-1.webp" className="left-[3%] top-[80%] opacity-50" width={60} parallaxSpeed={0.2} floatDuration={11} floatDelay={4} rotate={7} />

        {/* RIGHT side */}
        <FloatingImage src="/images/left-fish-3.webp" className="right-[4%] top-[20%] opacity-50" width={55} parallaxSpeed={0.3} floatDuration={8} floatDelay={1} rotate={-10} />
        <FloatingImage src="/images/fish-2.webp" className="right-[6%] top-[42%] opacity-50" width={60} parallaxSpeed={0.2} floatDuration={9} floatDelay={2} rotate={-5} />
        <FloatingImage src="/images/fish-4.webp" className="right-[5%] top-[62%] opacity-50" width={45} parallaxSpeed={0.25} floatDuration={10} floatDelay={0} rotate={6} />
        <FloatingImage src="/images/fish-2.webp" className="right-[8%] top-[78%] opacity-50" width={50} parallaxSpeed={0.3} floatDuration={7} floatDelay={3} rotate={3} />

        {/* Boltx3 — chute abyss */}
        <div ref={abyssBoltRef} className="absolute right-[5%] top-[65%] w-[60px] h-[60px] pointer-events-none">
          <motion.img
            key={abyssBoltKey}
            src="/images/boltx3.webp"
            alt=""
            className="absolute w-[120px] md:w-[200px] select-none"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 500, opacity: [0, 0.2, 0.8, 0] }}
            transition={{ duration: 9, ease: 'easeIn', opacity: { duration: 9, times: [0, 0.1, 0.75, 1] } }}
          />
        </div>
        {/* Grate — fond à droite du prop */}
        <img src="/images/grate.webp" alt="" className="absolute left-[68%] top-[3%] w-[280px] md:w-[400px] opacity-45 pointer-events-none rotate-45 z-[0]" />
        {/* Prop — chute abyss */}
        <div ref={propRef} className="absolute left-[20%] top-[5%] w-[260px] h-[360px] pointer-events-none">
          <motion.img
            key={propKey}
            src="/images/prop.webp"
            alt=""
            className="absolute w-[150px] md:w-[240px] select-none rotate-12"
            initial={{ y: 0, opacity: 0.8, rotate: 0 }}
            animate={{ y: 500, rotate: 360, opacity: [0.8, 0.8, 0.8, 0] }}
            transition={{ duration: 9.5, ease: 'easeIn', delay: 0.5, opacity: { duration: 9.5, times: [0, 0.1, 0.75, 1] } }}
          />
        </div>
        {/* Shark — traversée gauche→droite en fond */}
        <div ref={sharkRef} className="absolute left-0 top-[35%] w-full h-[200px] pointer-events-none z-[0]">
          <motion.img
            key={sharkKey}
            src="/images/shark.webp"
            alt=""
            className="absolute h-[180px] md:h-[260px] select-none"
            style={{ left: '-300px' }}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 'calc(100vw + 150px)', opacity: [0, 0.1, 0.2, 0.1, 0] }}
            transition={{ duration: 14, ease: 'easeInOut', opacity: { duration: 14, times: [0, 0.1, 0.5, 0.9, 1] } }}
          />
        </div>
        {/* Chains — balancement en fond */}
        <img src="/images/chain03-2x.webp" alt="" className="absolute left-[-8%] top-[35%] w-[600px] md:w-[700px] opacity-45 pointer-events-none z-[0] float-chain" />
        <img src="/images/chain05-2x.webp" alt="" className="absolute right-[-2%] top-[50%] w-[500px] md:w-[600px] opacity-25 pointer-events-none z-[0] float-chain-delayed" />
        {/* Coral at left edge */}
        <img src="/images/decor-coral.webp" alt="" className="absolute left-0 bottom-[15%] w-[90px] md:w-[120px] opacity-30 pointer-events-none scale-x-[-1]" />
      </>
    );
  }

  // footer
  return (
    <>
      {/* Corail sombre — base toujours visible, monté */}
      <motion.div ref={footerCoralRef} className="absolute left-0 top-[-5%] h-[55%] pointer-events-none z-[2]" style={{ y: coralParallaxY }}>
        <img
          src="/images/decor-diver-coral.webp"
          alt=""
          className="h-full w-auto rotate-180"
          style={{ filter: 'brightness(0.08)' }}
        />
      </motion.div>

      {/* 3 poissons sombres près du corail gauche */}
      <img src="/images/left-fish-2_1.webp" alt="" className="absolute pointer-events-none select-none z-[4]" style={{ top: '-9%', left: '6%', width: '55px', filter: 'brightness(0.05)', transform: 'scaleX(1) rotate(5deg)' }} />
      <img src="/images/left-fish-4_1.webp" alt="" className="absolute pointer-events-none select-none z-[4]" style={{ top: '8%', left: '12%', width: '45px', filter: 'brightness(1.5)', transform: 'rotate(-8deg)' }} />
      <img src="/images/left-fish-1.webp" alt="" className="absolute pointer-events-none select-none z-[4]" style={{ top: '20%', left: '6%', width: '79px', filter: 'brightness(2)', transform: 'scaleX(1) rotate(-5deg)' }} />
      <img src="/images/fish-3.webp" alt="" className="absolute pointer-events-none select-none z-[4]" style={{ top: '32%', left: '10%', width: '35px', filter: 'brightness(0.29)', transform: 'scaleX(-1) rotate(10deg)' }} />

      {/* Zone illuminée — masque radial doux (ellipse) = couleurs naturelles, même parallax */}
      <motion.div
        className="absolute left-0 top-[-5%] h-[55%] pointer-events-none z-[3]"
        style={{
          y: coralParallaxY,
          maskImage: 'radial-gradient(ellipse 70% 40% at 35% 60%, white 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse 250% 50% at 35% 60%, white 20%, transparent 70%)',
        }}
      >
        <img
          src="/images/decor-diver-coral.webp"
          alt=""
          className="h-full w-auto rotate-180"
        />
      </motion.div>

      {/* Faisceau — overlay + sway */}
      <img
        src="/images/torchBeam2-desktop.webp"
        alt=""
        className="absolute right-[30%] top-[-10%] w-full pointer-events-none z-[4] faisceau-lumineux"
        style={{
          transformOrigin: 'top right',
          transform: 'rotate(-250deg)',
        }}
      />
      {/* Plongeur — source du faisceau */}
      <img
        src="/images/diver-swimming.webp"
        alt=""
        className="absolute right-[12%] top-[-11%] w-[240px] md:w-[320px] pointer-events-none z-[3] select-none"
        style={{ filter: 'brightness(0.35)' }}
      />
      <FloatingImage src="/images/fish-2.webp" className="right-[35%] top-[55%] opacity-25 brightness-0.08 z-[30]" width={35} parallaxSpeed={0.25} floatDuration={8} floatDelay={3} rotate={5} />
      <FloatingImage src="/images/left-fish-1.webp" className="left-[15%] top-[60%] opacity-25 brightness-1 z-[30]" width={45} parallaxSpeed={0.3} floatDuration={7} floatDelay={2} rotate={-8} />
      <FloatingImage src="/images/school-1-left.webp" className="right-[55%] top-[60%] opacity-25 brightness-1 z-[30]" width={80} parallaxSpeed={0.2} floatDuration={12} />
    </>
  );
};

export default DecorationLayer;
