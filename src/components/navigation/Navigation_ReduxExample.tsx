import React from 'react';
import { withStyles } from '@material-ui/styles';
import withWidth from '@material-ui/core/withWidth';

import { compose, isMobileView } from 'utils';
import { connectProps, open, toggleMenu } from 'state';

import MainNavigation from './main';
import MobileNavigation from './mobile';
import options from './content';
import styles from './style';

interface Props {
  classes: any;
  width: string;
  open: boolean;
  toggleMenu: () => void;
};

const Navigation = ({ classes, width, open, toggleMenu }: Props) => (
  <div className={classes.container}>
    {isMobileView(width) ? (
      <MobileNavigation
        options={options}
        open={open}
        onClick={() => toggleMenu()}
      />
    ) : (
      <MainNavigation options={options} />
    )}
  </div>
);

export default compose(
  connectProps(open, toggleMenu),
  withWidth(),
  withStyles(styles)
)(Navigation);
