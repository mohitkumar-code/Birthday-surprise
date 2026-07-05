import { useState, useRef } from "react";
import LoadingScreen from "./components/sections/LoadingScreen";
import Hero from "./components/sections/Hero";
import Envelope from "./components/sections/Envelope";
import WillYouBeMine from "./components/sections/WillYouBeMine";
import song from "./assets/audio/until-i-found-you.mp3";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);

  return isLoading ? (
    <LoadingScreen onComplete={() => setIsLoading(false)} />
  ) : (
    <>
      <audio ref={audioRef} src={song} loop />

      <Hero audioRef={audioRef} />
      <Envelope />
      <WillYouBeMine />
    </>
  );
};

export default App;