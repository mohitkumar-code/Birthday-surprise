import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useTyping } from "../effects/useTyping.js";
import HeartBalloons from "../effects/HeartBalloons.jsx";

const Envelope = () => {
  const [open, setOpen] = useState(false);
  const [shake, setShake] = useState(false);

  const message = `
Happy Birthday ❤️

Distance means nothing when someone means everything.

You are truly special to me.

I hope your day is full of happiness ✨
`;

  const typedText = useTyping(message, open);

  const handleOpen = () => {
    setShake(true);

    setTimeout(() => {
      setOpen(true);

      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
      });

      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 100,
          shapes: ["circle"],
          colors: ["#ff4d6d", "#ff85a2", "#ffb3c6"],
        });
      }, 300);
    }, 400);
  };

  return (
    <section
      id="envelope"
      className={`relative flex min-h-screen items-center justify-center px-6 overflow-hidden transition-all duration-700 ${
        open
          ? "bg-gradient-to-b from-[#050816] via-[#1a0b2e] to-[#050816]"
          : "bg-[#050816]"
      }`}
    >
      {/* 💖 HEART BALLOONS BACKGROUND */}
      <HeartBalloons />

      <AnimatePresence mode="wait">
        {!open ? (
          // ✉️ CLOSED ENVELOPE
          <motion.div
            key="closed"
            onClick={handleOpen}
            animate={shake ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer relative z-10 rounded-2xl border border-pink-500/30 bg-white/5 p-12 text-center backdrop-blur-xl shadow-lg shadow-pink-500/20"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-6xl"
            >
              💌
            </motion.div>

            <p className="mt-3 text-pink-200 font-semibold">
              A surprise is waiting for you...
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Click to open
            </p>
          </motion.div>
        ) : (
          // 💌 LETTER
          <motion.div
            key="open"
            initial={{ opacity: 0, scale: 0.8, y: 80 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-2xl rounded-2xl border border-pink-500/30 bg-white/5 p-8 text-center backdrop-blur-xl shadow-xl shadow-pink-500/10"
          >
            <h2 className="mb-6 text-3xl font-bold text-pink-400">
              💌 My Letter For You
            </h2>

            <motion.p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {typedText}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-pink-400 font-semibold"
            >
              — Mohit
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-10 flex flex-col items-center text-gray-400"
            >
              <p className="text-sm">Scroll for more</p>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-2xl text-pink-400"
              >
                ↓
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Envelope;