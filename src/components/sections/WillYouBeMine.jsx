import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WillYouBeMine = () => {
  const [step, setStep] = useState(1);
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);
  const [endScreen, setEndScreen] = useState(false);

  const handleNo = () => {
    setNoCount(noCount + 1);

    if (noCount === 0) {
      setStep(2);
    }
  };

  const handleYes = () => {
    setYesClicked(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050816] text-center px-6">

      <AnimatePresence mode="wait">

        {/* STEP 1 */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white"
          >
            <h1 className="text-3xl font-bold text-pink-400">
              I want to ask you something 😛
            </h1>

            <p className="mt-4 text-gray-300">
              But I already know your answer ❤️
            </p>

            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-pink-500 rounded-full"
              >
                No you don't 🤨
              </button>

              <button
                onClick={() => setStep(2)}
                className="px-6 py-2 bg-purple-500 rounded-full"
              >
                Maybe 🤔
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && !yesClicked && (
          <motion.div
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white"
          >
            <h1 className="text-3xl font-bold text-pink-400">
              Wanna be mine? ❤️
            </h1>

            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={handleYes}
                className="px-6 py-2 bg-green-500 rounded-full"
              >
                Yes ❤️
              </button>

              <button
                onClick={handleNo}
                className="px-6 py-2 bg-red-500 rounded-full"
              >
                No 😏
              </button>
            </div>

            {noCount === 1 && (
              <p className="mt-4 text-yellow-300">
                This button is not working 😅 try YES
              </p>
            )}

            {noCount === 2 && (
              <p className="mt-4 text-yellow-300">
                I told you 😏 click YES instead
              </p>
            )}

            {noCount >= 3 && (
              <p className="mt-4 text-red-400">
                Bro... just click YES 😭
              </p>
            )}
          </motion.div>
        )}

        {/* FINAL YES SCREEN */}
        {yesClicked && !endScreen && (
          <motion.div
            key="final"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl font-bold text-pink-400">
              Ohh I knew it ❤️
            </h1>

            <p className="mt-4 text-gray-300">
              I already knew your answer 😎
            </p>

            <button
              onClick={() => setEndScreen(true)}
              className="mt-6 px-6 py-3 bg-white text-black rounded-full font-semibold"
            >
              Click to end
            </button>
          </motion.div>
        )}

        {/* BLACK SCREEN ENDING */}
        {endScreen && (
          <motion.div
            key="end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black flex items-center justify-center"
          >
            <h1 className="text-white text-xl text-center px-6">
              BTW, It’s a little joke, don’t overthink it 😄❤️
            </h1>
          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
};

export default WillYouBeMine;