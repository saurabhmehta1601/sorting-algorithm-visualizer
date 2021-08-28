// copied from Blog by Dan  Abramov
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/

import React, { useEffect, useRef } from 'react';

export default function useInterval(callback: () => void, delay: number): any {
  const savedCallback = useRef<() => void>() ;
 
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
        if(savedCallback.current){
            savedCallback.current();
        }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}