import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import withWidth from '@material-ui/core/withWidth';

import { compose, isMobileView } from 'utils';

import MainNavigation from './main';
import MobileNavigation from './mobile';
import options from './content';
import styles from './style';

interface Props {
  classes: any;
  width: string;
};

const Navigation = ({ classes, width }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.container}>
      {isMobileView(width) ? (
        <MobileNavigation
          options={options}
          open={open}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <MainNavigation options={options} />
      )}
    </div>
  );
};

export default compose(
  withWidth(),
  withStyles(styles)
)(Navigation);
