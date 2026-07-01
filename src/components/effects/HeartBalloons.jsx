import { motion } from "framer-motion";

const hearts = Array.from({ length: 25 });

export default function HeartBalloons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((_, i) => {
        const size = Math.random() * 20 + 10;

        return (
          <motion.div
            key={i}
            initial={{
              y: "100vh",
              x: Math.random() * window.innerWidth,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              fontSize: size,
            }}
          >
            💖
          </motion.div>
        );
      })}
    </div>
  );
}