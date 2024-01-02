import { useRef, useState } from "react";

function useTimer() {
  const [timer, setTimer] = useState(0);
  const interval = useRef(null);

  const startTimer = () => {
    interval.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  return { timer, startTimer, stopTimer, resetTimer };
}

export { useTimer };
