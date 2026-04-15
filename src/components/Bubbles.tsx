const Bubbles = () => {
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: 2 + Math.random() * 6,
    duration: 8 + Math.random() * 15,
    delay: Math.random() * 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: b.left,
            bottom: '0',
            '--bubble-size': `${b.size}px`,
            '--bubble-duration': `${b.duration}s`,
            '--bubble-delay': `${b.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Bubbles;
