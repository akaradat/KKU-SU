import { useState } from 'react';
import { AnimationControls, useAnimation, useCycle } from 'framer-motion';

type useAnimatedNavTogglerReturn = {
  showNavLinks: boolean;
  animation: AnimationControls;
  toggleNavbar: () => void;
};
//Below logic is for toggling the navbar when toggleNavbar is called. It is used on mobile toggling of navbar.
export default function useAnimatedNavToggler(): useAnimatedNavTogglerReturn {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [x, cycleX] = useCycle('0%', '150%');
  const animation = useAnimation();

  const toggleNavbar = () => {
    setShowNavLinks(!showNavLinks);
    animation.start({ x: x, display: 'block' });
    cycleX();
  };

  return { showNavLinks, animation, toggleNavbar };
}
