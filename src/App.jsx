import { useState } from "react";
import LoadingScreen from "./components/sections/LoadingScreen";
import Hero from "./components/sections/Hero";
import Envelope from "./components/sections/Envelope";
import WillYouBeMine from "./components/sections/WillYouBeMine";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <LoadingScreen onComplete={() => setIsLoading(false)} />
  ) : (
    <div>
      <Hero />
      <Envelope />
      <WillYouBeMine />
    </div>
  );
};

export default App;