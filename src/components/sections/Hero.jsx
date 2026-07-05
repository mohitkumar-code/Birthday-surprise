import { motion } from "framer-motion";
import Stars from "../effects/Stars";
import FloatingHearts from "../effects/FloatingHearts";
import CursorGlow from "../effects/CursorGlow";
import { Heart } from "lucide-react";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

const Hero = ({audioRef}) => {

  const [playing, setPlaying] = useState(false);

const toggleMusic = () => {
  if (!audioRef.current) return;

  if (playing) {
    audioRef.current.pause();
  } else {
    audioRef.current.volume = 0.75;
    audioRef.current.play();
  }

  setPlaying(!playing);
};


  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6 text-center">

      <div className="absolute top-6 right-6 z-50">
  <div className="absolute top-6 right-6 z-50">
  <button
    onClick={toggleMusic}
    className="flex items-center justify-center gap-3 rounded-full border border-pink-400/40 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition duration-200 hover:from-pink-400 hover:to-purple-400 min-w-[200px] md:min-w-[200px]"
  >
    {playing ? <Pause size={18} /> : <Play size={18} />}
    {playing ? "Enjoy Music ❤" : "Play Music"}
  </button>
</div>
</div>

      {/* Cursor Glow */ }
      <CursorGlow />

      {/* Background Effects */}
      <Stars />
      <FloatingHearts />

      {/* Soft Aurora Glow */}
      <div className="absolute h-[600px] w-[600px] rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        {/* Moon / Profile Image */ }
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="relative">
            <img
              src="/src/assets/images/januu.jpg"
              alt="Januu"
              className="h-40 w-40 rounded-full border-4 border-pink-400 object-cover shadow-lg shadow-pink-500/40 md:h-52 md:w-52"
            />
            <div className="absolute inset-0 animate-pulse rounded-full bg-pink-400/20 blur-xl" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-['Great_Vibes'] text-5xl text-pink-400 md:text-7xl"
        >
          Happy Birthday
        </motion.h2>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-2 text-6xl font-bold text-white md:text-8xl"
        >
          Januu ❤️
        </motion.h1>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-xl text-gray-300"
        >
          Distance means so little when someone means so much.
          Every moment reminds me how special you are.
        </motion.p>

        {/* Button */}
        <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
  document.getElementById("envelope")?.scrollIntoView({
    behavior: "smooth",
  });
}}

  className="mt-8 flex items-center gap-2 rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-pink-500/40"
>
  <Heart size={20} fill="white" />
  Click For Surprise
</motion.button>


      </div>
    </section>
  );
};

export default Hero;