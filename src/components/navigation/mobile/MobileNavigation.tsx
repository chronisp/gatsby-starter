import React from 'react';
import Link from 'gatsby-link';
import { withStyles } from '@material-ui/styles';
import { FaBars } from 'react-icons/fa';

import styles from './style';

interface Props {
  classes: any;
  options: Array<any>;
  open: boolean;
  onClick: () => void;
};

const MobileNavigation = ({ classes, options, onClick, open }: Props) => (
  <>
    <FaBars className={classes.menuIcon} onClick={onClick} />
    {open && (
      <div className={classes.menuContainer}>
        {options.map((link, i) => (
          <div key={i}>
            <Link
              to={link.to}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}>
              <span>{link.text}</span>
            </Link>
          </div>
        ))}
      </div>
    )}
  </>
);

export default withStyles(styles)(MobileNavigation);
