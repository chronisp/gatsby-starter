import React, { ReactElement } from 'react';
import { withStyles } from '@material-ui/styles';
import MUIlModal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './style';

interface Props {
  classes: any;
  children: ReactElement;
  fullScreen: boolean;
  open: boolean;
};

const Modal = ({ classes, children, fullScreen, ...rest }: Props) => (
  <MUIlModal closeAfterTransition {...rest}>
    <Fade in={rest.open} timeout={250}>
      <div
        className={
          fullScreen ? classes.fullScreenContainer : classes.centeredContainer
        }>
        <div className={classes.content}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            className={classes.scrollContainer}>
            {children}
          </Scrollbars>
        </div>
      </div>
    </Fade>
  </MUIlModal>
);

export default withStyles(styles)(Modal);
