import { RefObject, useEffect, useState } from 'react';

const useOutsideClick = (ref: RefObject<HTMLElement>): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  return isVisible;
};

export default useOutsideClick;
