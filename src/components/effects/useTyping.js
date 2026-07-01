import { useEffect, useState } from "react";

export const useTyping = (text, trigger) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!trigger) return;

    let i = 0;
    setOutput("");

    const interval = setInterval(() => {
      setOutput(text.slice(0, i));
      i++;

      if (i > text.length) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, [text, trigger]);

  return output;
};