import { useState, useRef } from "react";
import LoadingScreen from "./components/sections/LoadingScreen";
import Hero from "./components/sections/Hero";
import Envelope from "./components/sections/Envelope";
import WillYouBeMine from "./components/sections/WillYouBeMine";
import song from "./assets/audio/until-i-found-you.mp3";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.8;
        audioRef.current.play().catch((err) => console.log(err));
      }
    }, 300);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div>
          <Hero />
          <Envelope />
          <WillYouBeMine />
        </div>
      )}

      <audio ref={audioRef} src={song} loop />
    </>
  );
};

export default App;