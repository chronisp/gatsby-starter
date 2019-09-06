import { useState, useEffect } from 'react';

const useActiveAnimation = timeout => {
  const [activeAnimation, setActiveAnimation] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setActiveAnimation(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [activeAnimation, timeout]);

  return [activeAnimation, setActiveAnimation];
};

export default useActiveAnimation;
