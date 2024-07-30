import { useEffect, RefObject } from 'react';

type Callback = (...args: unknown[]) => void;

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Callback) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback?.();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
};

export default useOutsideClick;
