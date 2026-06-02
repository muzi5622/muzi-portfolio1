import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const phrase = "Initializing...";
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let textIndex = 0;
    let progressValue = 0;
    const totalSteps = phrase.length;

    const interval = setInterval(() => {
      setText(phrase.substring(0, textIndex + 1));
      setProgress(((textIndex + 1) / totalSteps) * 100);
      textIndex++;

      if (textIndex >= totalSteps) {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          onComplete();
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return show ? (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="mb-4 text-4xl font-mono font-bold animate-glitch">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  ) : null;
};
