interface LightRaysProps {
  hero?: boolean;
}

const LightRays = ({ hero = false }: LightRaysProps) => {
  if (hero) {
    const heroRays = [
      { deg: 0.168, thickness: 8.97,  length: -46.86, duration: 2.11, delay: 2.14, rotate: 2.08  },
      { deg: 0.560, thickness: 22.72, length:  15.36, duration: 1.13, delay: 2.82, rotate: -0.75 },
      { deg: 0.660, thickness: 11.45, length:  29.99, duration: 2.44, delay: 2.99, rotate: -0.44 },
      { deg: 0.484, thickness: 24.62, length:  23.98, duration: 2.23, delay: 2.84, rotate:  3.43 },
      { deg: 0.680, thickness:  8.34, length: -29.48, duration: 2.11, delay: 2.78, rotate: -1.80 },
      { deg: 0.651, thickness: 13.28, length: -24.98, duration: 1.66, delay: 2.45, rotate:  1.30 },
      { deg: 0.593, thickness: 23.54, length: -30.66, duration: 1.62, delay: 2.30, rotate: -3.31 },
      { deg: 0.784, thickness: 20.13, length:  48.95, duration: 1.79, delay: 3.00, rotate: -2.75 },
      { deg: 0.474, thickness: 25.46, length: -38.94, duration: 2.20, delay: 2.29, rotate:  3.48 },
      { deg: 0.327, thickness: 26.05, length:   6.60, duration: 1.62, delay: 2.15, rotate: -3.82 },
      { deg: 0.586, thickness: 21.05, length:  38.18, duration: 1.71, delay: 2.50, rotate:  3.08 },
      { deg: 0.391, thickness: 26.16, length:  27.10, duration: 1.40, delay: 2.18, rotate: -0.50 },
      { deg: 0.991, thickness: 22.76, length:   6.13, duration: 1.89, delay: 2.82, rotate:  1.25 },
      { deg: 0.449, thickness: 23.61, length:  -7.04, duration: 1.33, delay: 2.20, rotate:  1.25 },
      { deg: 0.048, thickness: 32.44, length:  12.51, duration: 2.29, delay: 2.84, rotate: -3.21 },
      { deg: 0.675, thickness: 16.61, length:  25.47, duration: 1.50, delay: 2.65, rotate:  2.18 },
      { deg: 0.279, thickness: 20.39, length:  38.13, duration: 1.24, delay: 2.85, rotate:  2.92 },
      { deg: 0.772, thickness: 10.76, length:   9.89, duration: 1.51, delay: 2.17, rotate: -0.27 },
      { deg: 0.648, thickness: 16.18, length:  12.48, duration: 1.66, delay: 2.66, rotate:  1.91 },
      { deg: 0.941, thickness: 10.24, length:  40.96, duration: 1.26, delay: 2.39, rotate:  3.65 },
      { deg: 0.187, thickness: 19.51, length:  29.05, duration: 1.04, delay: 2.78, rotate:  3.11 },
      { deg: 0.885, thickness: 22.71, length:  25.79, duration: 2.20, delay: 2.47, rotate: -1.95 },
      { deg: 0.508, thickness: 32.70, length:   4.16, duration: 2.01, delay: 2.20, rotate:  0.66 },
      { deg: 0.957, thickness: 13.03, length: -16.99, duration: 1.56, delay: 2.63, rotate: -0.13 },
      { deg: 0.495, thickness: 17.87, length: -22.69, duration: 1.96, delay: 2.33, rotate:  3.86 },
      { deg: 0.059, thickness: 32.43, length:  24.22, duration: 1.85, delay: 2.85, rotate:  0.12 },
      { deg: 0.684, thickness: 26.07, length:  32.35, duration: 1.27, delay: 2.86, rotate:  1.95 },
      { deg: 0.680, thickness: 14.20, length:  13.76, duration: 1.41, delay: 2.94, rotate:  0.12 },
      { deg: 0.685, thickness: 12.38, length:  20.82, duration: 2.11, delay: 2.88, rotate: -0.42 },
      { deg: 0.363, thickness: 21.31, length:  49.07, duration: 2.14, delay: 2.48, rotate: -2.03 },
      { deg: 0.074, thickness: 20.96, length:  33.81, duration: 1.99, delay: 2.71, rotate:  1.47 },
      { deg: 0.565, thickness: 10.90, length: -21.40, duration: 2.07, delay: 2.32, rotate:  3.26 },
    ];
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none lrh-wrap">
        {heroRays.map((ray, i) => (
          <div
            key={i}
            className="lrh-ray"
            style={{
              '--deg': ray.deg,
              '--thickness': `${ray.thickness}px`,
              '--length': `${ray.length}px`,
              '--duration': `${ray.duration}s`,
              '--delay': `${ray.delay}s`,
              '--rotate': `${ray.rotate}deg`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    );
  }

  // Mode standard (mid-depth)
  const rays = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 4.5)}%`,
    angle: -15 + Math.random() * 30,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 5,
    width: 1 + Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {rays.map((ray) => (
        <div
          key={ray.id}
          className="light-ray"
          style={{
            left: ray.left,
            '--ray-angle': `${ray.angle}deg`,
            '--ray-duration': `${ray.duration}s`,
            '--ray-delay': `${ray.delay}s`,
            width: `${ray.width}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default LightRays;
