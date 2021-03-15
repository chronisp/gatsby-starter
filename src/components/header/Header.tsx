import { Link } from 'gatsby';
import React from 'react';
import { withStyles } from '@material-ui/styles';

import { Avatar, Navigation, Animated } from 'components';

import styles from './style';

const Header = ({ classes }) => (
  <header className={classes.container}>
    <Link to='/' className={classes.logo}>
      <Animated>
        <Avatar />
      </Animated>
    </Link>
    <div className={classes.navigation}>
      <Navigation />
    </div>
  </header>
);

export default withStyles(styles)(Header);
