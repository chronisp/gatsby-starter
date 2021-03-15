import React from 'react';
import { withStyles } from '@material-ui/styles';

import styles from './style';

interface Props {
  classes: any;
  links: Array<any>;
};

const LinkList = ({ classes, links }: Props) => (
  <div>
    <ul className={classes.container}>
      {links.map(({ Icon, to, newTab, text }, index) => (
        <li key={index}>
          <a
            href={to}
            target={newTab ? '_blank' : '_self'}
            rel={'noreferrer'}
            className={classes.link}>
            <Icon />
            <span className={classes.linkText}>{text}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default withStyles(styles)(LinkList);
