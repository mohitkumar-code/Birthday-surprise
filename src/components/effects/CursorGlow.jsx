import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 h-52 w-52 rounded-full bg-pink-500/20 blur-3xl transition-all duration-150"
      style={{
        left: position.x - 100,
        top: position.y - 100,
      }}
    />
  );
};

export default CursorGlow;