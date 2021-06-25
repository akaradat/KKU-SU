/* eslint-disable */
import React, { FunctionComponent, ReactElement } from 'react';
import tw from 'twin.macro';

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import { motion } from 'framer-motion';
// import useInView from '@owaiswiz/use-in-view';

const useInView = require('@owaiswiz/use-in-view');

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

type AnimationRevealProps = {
  disabled: boolean;
  children: React.ReactNodeArray;
};

const AnimationReveal: FunctionComponent<AnimationRevealProps> = function ({
  disabled,
  children,
}: AnimationRevealProps) {
  if (disabled) {
    return <>{children}</>;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ['left', 'right'];
  const childrenWithAnimation = children.map((child, i) => {
    return (
      <AnimatedSlideInComponent
        key={i}
        direction={directions[i % directions.length]}
      >
        {child}
      </AnimatedSlideInComponent>
    );
  });
  return <>{childrenWithAnimation}</>;
};

function AnimatedSlideInComponent({ direction = 'left', children }) {
  const [ref, inView] = useInView(30);

  const x = { target: '0%', initial: '' };

  if (direction === 'left') x.initial = '-150%';
  else x.initial = '150%';

  return (
    <motion.section
      initial={{ x: x.initial }}
      animate={{
        x: inView && x.target,
        transitionEnd: {
          x: inView && 0,
        },
      }}
      transition={{ type: 'spring', damping: 19 }}
      ref={ref}
    >
      {children}
    </motion.section>
  );
}

export default (props): ReactElement => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);
