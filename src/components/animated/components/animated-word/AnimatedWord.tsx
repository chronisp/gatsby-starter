import React from 'react';
import { withStyles } from '@material-ui/styles';
import classNames from 'classnames';

import { useActiveAnimation } from 'components/animated/hooks';

import { AnimatedLetter } from './components';
import styles from './style';

interface Props {
  classes: any;
  word: string;
  animateWord: boolean;
  animation: string;
  timeout: number;
};

const AnimatedWord = ({
  classes,
  word,
  animateWord,
  animation,
  timeout,
}: Props) => {
  const [activeAnimation, setActiveAnimation] = useActiveAnimation(timeout);

  return (
    <span
      role={'presentation'}
      onMouseEnter={() => animateWord && setActiveAnimation(true)}
      className={classNames(activeAnimation && animation, classes.word)}>
      {animateWord
        ? word
        : word
            .split('')
            .map((letter, index) => (
              <AnimatedLetter
                letter={letter}
                key={index}
                animation={animation}
                animateLetter={!animateWord}
                timeout={timeout}
              />
            ))}
      <span>&nbsp;</span>
    </span>
  );
};

export default withStyles(styles)(AnimatedWord);
