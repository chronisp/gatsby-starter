import React, { ReactElement } from 'react';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';
import isString from 'lodash/isString';

import { AnimatedWord } from './components';
import styles from './style';
import { useActiveAnimation } from './hooks';

interface Props {
  children: ReactElement;
  classes: any;
  animateWord: boolean;
  animation: string;
  timeout: number;
};

const Animated = ({
  children,
  classes,
  animateWord,
  animation,
  timeout,
}: Props) => {
  const [activeAnimation, setActiveAnimation] = useActiveAnimation(timeout);

  return isString(children) ? (
    children
      .split(' ')
      .map((word, index) => (
        <AnimatedWord
          word={word}
          key={`${word}-${index}`}
          animateWord={animateWord}
          timeout={timeout}
          animation={classes[animation]}
        />
      ))
  ) : (
    <span
      role={'presentation'}
      onMouseEnter={() => setActiveAnimation(true)}
      className={classNames(
        activeAnimation && classes[animation],
        classes.item
      )}>
      {children}
    </span>
  );
};

Animated.defaultProps = {
  animateWord: false,
  animation: 'rubberBand',
  timeout: 600,
};

export default withStyles(styles)(Animated);
