import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import { Animated } from 'components';

import content from './content';

const { tagline, title, subtitle } = content;

const Welcome = () => (
  <>
    <Typography variant='h3' color='textPrimary'>
      {tagline}
    </Typography>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
  </>
);

export default Welcome;
