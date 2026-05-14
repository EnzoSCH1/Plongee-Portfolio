import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type MediaItem = { type: 'image'; src: string } | { type: 'video'; src: string };

const media: MediaItem[] = [
  { type: 'image', src: '/videos/mr.jpeg' },
  { type: 'image', src: '/videos/mr1.jpeg' },
  { type: 'image', src: '/videos/mr2.jpeg' },
  { type: 'image', src: '/videos/mr3.jpeg' },
  { type: 'image', src: '/videos/mr4.jpeg' },
  { type: 'video', src: '/videos/mr5.mp4' },
];

const GalerieMerRouge = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen ocean-base-gradient px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <button
          onClick={() => navigate(-1)}
          className="mb-10 text-foreground/50 hover:text-foreground/90 text-sm font-body tracking-widest uppercase transition-colors"
        >
          ← Retour
        </button>

        <h1 className="font-display text-4xl md:text-6xl text-foreground font-light mb-3">
          Mer Rouge
        </h1>
        <p className="font-body text-foreground/60 text-base md:text-lg mb-12 max-w-xl leading-relaxed">
          La Mer Rouge est l'un des écosystèmes marins les plus riches au monde. Des coraux en pleine santé, des bancs de poissons tropicaux, et une visibilité qui dépasse souvent les 30 mètres.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {media.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-sm aspect-[4/3] bg-white/5">
              {item.type === 'video' ? (
                <video
                  controls
                  className="w-full h-full object-cover"
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={`Plongée Mer Rouge ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              )}
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

export default GalerieMerRouge;
