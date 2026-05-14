import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const photos = [
  '/images/med.png',
  '/images/med1.png',
  '/images/med2.png',
  '/images/med3.png',
];

const GalerieMed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ocean-base-gradient px-6 py-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 text-foreground/50 hover:text-foreground/90 text-sm font-body tracking-widest uppercase transition-colors"
        >
          ← Retour
        </button>

        <h1 className="font-display text-4xl md:text-6xl text-foreground font-light mb-3">
          Méditerranée
        </h1>
        <p className="font-body text-foreground/60 text-base md:text-lg mb-12 max-w-xl leading-relaxed">
          Quelques images de mes plongées en Méditerranée — des fonds colorés, des espèces locales, et des moments que l'on n'oublie pas.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {photos.map((src, i) => (
            <div key={i} className="overflow-hidden rounded-sm aspect-[4/3] bg-white/5">
              <img
                src={src}
                alt={`Plongée Méditerranée ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="mt-12 font-body text-foreground/30 text-xs text-center tracking-widest uppercase">
          Enzo Schneider · Plongeur niveau 2 FFESSM
        </p>
      </div>
    </div>
  );
};

export default GalerieMed;
