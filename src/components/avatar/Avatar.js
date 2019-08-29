import React from 'react';
import avatarIcon from 'images/website-icon.png';
import { withStyles } from '@material-ui/styles';

import styles from './style';

type Props = {
  classes: Object,
};

const Avatar = ({ classes }: Props) => (
  <div className={classes.container}>
    <img src={avatarIcon} className={classes.avatar} alt='avatar' />
  </div>
);

export default withStyles(styles)(Avatar);
