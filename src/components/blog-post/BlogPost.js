import React from 'react';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Img from 'gatsby-image';

import styles from './style';

type Props = {
  classes: Object,
  data: Object,
};

const BlogPost = ({ classes, data }: Props) => (
  <div className={classes.container}>
    {data.heroImage ? <Img fluid={data.heroImage.fluid} /> : null}
    <Typography variant='h2' color='textPrimary'>
      {data.title}
    </Typography>
    <Typography
      variant='body1'
      dangerouslySetInnerHTML={{
        __html: data.body.childMarkdownRemark.html,
      }}
    />
  </div>
);

export default withStyles(styles)(BlogPost);
