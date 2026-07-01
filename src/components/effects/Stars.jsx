const Stars = () => {
  const stars = Array.from({ length: 120 });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((_, index) => (
        <span
          key={index}
          className="absolute animate-pulse rounded-full bg-white"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random(),
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;