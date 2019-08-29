import React from 'react';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

import Animated from 'components/animated';
import LinkList from 'components/link-list';

import content from './content';

const { title, subtitle, links } = content;

const About = () => (
  <>
    <Fade in timeout={1000}>
      <Typography variant='h1' color='textPrimary'>
        <Animated>{title}</Animated>
      </Typography>
    </Fade>
    <Typography variant='h3' color='textPrimary'>
      {subtitle}
    </Typography>
    <LinkList links={links} />
  </>
);

export default About;
