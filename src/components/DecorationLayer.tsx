import FloatingImage from './FloatingImage';

interface DecorationLayerProps {
  variant: 'surface' | 'mid' | 'deep' | 'abyss' | 'footer';
}

const DecorationLayer = ({ variant }: DecorationLayerProps) => {
  if (variant === 'surface') {
    return (
      <>
        {/* Fish scattered */}
        <FloatingImage src="/images/left-fish-1.webp" className="left-[2%] top-[15%]" width={55} parallaxSpeed={0.3} floatDuration={7} rotate={5} />
        <FloatingImage src="/images/fish-2.webp" className="right-[5%] top-[25%]" width={40} parallaxSpeed={0.2} floatDuration={9} floatDelay={2} rotate={-8} />
        <FloatingImage src="/images/school01.webp" className="left-[10%] top-[55%]" width={110} parallaxSpeed={0.15} floatDuration={12} floatDelay={1} />
        <FloatingImage src="/images/fish-3.webp" className="right-[12%] top-[70%]" width={35} parallaxSpeed={0.25} floatDuration={8} floatDelay={3} rotate={10} />
        {/* Fishing net right edge */}
        <img src="/images/fishingnet02-right-2x.webp" alt="" className="absolute right-0 top-[30%] w-[120px] md:w-[220px] opacity-30 pointer-events-none" />
      </>
    );
  }

  if (variant === 'mid') {
    return (
      <>
        {/* Fishing net left edge */}
        <img src="/images/fishingnet02-left-2x.webp" alt="" className="absolute left-0 top-[10%] w-[120px] md:w-[220px] opacity-30 pointer-events-none" />
        <FloatingImage src="/images/turtle.webp" className="right-[3%] top-[25%]" width={140} parallaxSpeed={0.25} floatDuration={10} rotate={-5} />
        <FloatingImage src="/images/left-fish-3.webp" className="left-[5%] top-[65%]" width={45} parallaxSpeed={0.35} floatDuration={6} floatDelay={3} rotate={10} />
        <FloatingImage src="/images/fish-2.webp" className="right-[15%] top-[75%]" width={30} parallaxSpeed={0.3} floatDuration={7} floatDelay={1} rotate={-5} />
        <FloatingImage src="/images/fish-3.webp" className="left-[20%] top-[40%]" width={28} parallaxSpeed={0.2} floatDuration={9} floatDelay={4} rotate={8} />
      </>
    );
  }

  if (variant === 'deep') {
    return (
      <>
        <FloatingImage src="/images/StingRay.webp" className="left-[0%] top-[20%]" width={200} parallaxSpeed={0.2} floatDuration={11} rotate={-3} />
        {/* Fishing net right edge */}
        <img src="/images/fishingnet02-right-2x.webp" alt="" className="absolute right-0 top-[50%] w-[100px] md:w-[180px] opacity-25 pointer-events-none" />
        <FloatingImage src="/images/left-fish-1.webp" className="right-[8%] top-[60%]" width={40} parallaxSpeed={0.4} floatDuration={7} floatDelay={4} rotate={12} />
        {/* Bolt debris */}
        <img src="/images/bolt.webp" alt="" className="absolute left-[8%] top-[80%] w-[30px] md:w-[50px] opacity-20 pointer-events-none" />
        <img src="/images/bolt.webp" alt="" className="absolute right-[20%] top-[85%] w-[25px] md:w-[40px] opacity-15 pointer-events-none rotate-45" />
        {/* Coral at edges */}
        <img src="/images/decor-coral.webp" alt="" className="absolute right-0 bottom-0 w-[150px] md:w-[280px] opacity-40 pointer-events-none" />
      </>
    );
  }

  if (variant === 'abyss') {
    return (
      <>
        {/* Fishing net left edge */}
        <img src="/images/fishingnet02-left-2x.webp" alt="" className="absolute left-0 top-[5%] w-[100px] md:w-[180px] opacity-20 pointer-events-none" />
        <FloatingImage src="/images/school-1-left.webp" className="left-[5%] top-[30%]" width={90} parallaxSpeed={0.15} floatDuration={10} floatDelay={2} />
        <FloatingImage src="/images/left-fish-3.webp" className="right-[6%] top-[50%]" width={35} parallaxSpeed={0.3} floatDuration={8} floatDelay={1} rotate={-10} />
        {/* Bolts scattered */}
        <img src="/images/boltx3.webp" alt="" className="absolute right-[5%] top-[70%] w-[60px] md:w-[100px] opacity-20 pointer-events-none" />
        {/* Coral at left edge */}
        <img src="/images/decor-coral.webp" alt="" className="absolute left-0 bottom-[10%] w-[120px] md:w-[220px] opacity-30 pointer-events-none scale-x-[-1]" />
      </>
    );
  }

  // footer
  return (
    <>
      <FloatingImage src="/images/school01-2.webp" className="left-[8%] top-[20%]" width={100} parallaxSpeed={0.15} floatDuration={11} floatDelay={1} />
      <FloatingImage src="/images/fish-2.webp" className="right-[10%] top-[40%]" width={35} parallaxSpeed={0.25} floatDuration={8} floatDelay={3} rotate={5} />
      <FloatingImage src="/images/left-fish-1.webp" className="left-[15%] top-[60%]" width={45} parallaxSpeed={0.3} floatDuration={7} floatDelay={2} rotate={-8} />
      <FloatingImage src="/images/school-1-left.webp" className="right-[3%] top-[70%]" width={80} parallaxSpeed={0.2} floatDuration={12} />
    </>
  );
};

export default DecorationLayer;
