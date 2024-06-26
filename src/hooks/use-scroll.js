// implement use scroll hook
import { useCallback, useEffect, useState } from 'react';

function useScroll(threshold) {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    const isScrolled = window.scrollY > threshold;
    setScrolled(isScrolled);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return scrolled;
}

export default useScroll;
