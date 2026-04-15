const LightRays = () => {
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
