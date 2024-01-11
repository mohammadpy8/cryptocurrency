import { useState, useEffect } from "react";

const SCROLLSIZE = 1800;

function useCounter(numberSchool : number) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      const scroll = window.scrollY;

      if (scroll >= SCROLLSIZE) {
        setCounter((number) => number + 1);
      }
    },0);

    if (counter === numberSchool) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [counter]);

  return [counter];
}

export default useCounter;