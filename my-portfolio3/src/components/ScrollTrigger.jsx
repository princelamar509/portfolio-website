import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const ScrollTrigger = ({ children }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  const styles = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    config: { tension: 200, friction: 20 } // Smoother animation
  });

  const handleScroll = () => {
    const top = ref.current.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <animated.div style={styles} ref={ref}>
      {children}
    </animated.div>
  );
};

export default ScrollTrigger;
