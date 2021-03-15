import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';

import styles from './style';

interface Props {
  classes: any;
  options: Array<any>;
};

const MainNavigation = ({ classes, options }: Props) => (
  <ul>
    {options.map((link, i) => (
      <li className={classes.menuContainer} key={i}>
        <Link
          to={link.to}
          className={classes.navLink}
          activeClassName={classes.navLinkActive}>
          <span>{link.text}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default withStyles(styles)(MainNavigation);
