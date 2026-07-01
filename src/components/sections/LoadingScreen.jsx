import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#050816] px-6">
      <h1 className="mb-8 text-5xl">❤️</h1>

      <p className="mb-6 text-center text-lg text-white">
        Preparing a little surprise for...
      </p>

      <h2 className="mb-8 text-5xl text-pink-400">
        Januu
      </h2>

      <div className="h-2 w-72 overflow-hidden rounded-full bg-white/20">
        <div
          className="h-full rounded-full bg-pink-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-sm text-gray-400">
        {progress}%
      </p>
    </section>
  );
};

export default LoadingScreen;