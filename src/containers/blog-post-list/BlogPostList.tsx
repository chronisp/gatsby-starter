import React from 'react';
import { withStyles } from '@material-ui/styles';

import { BlogPost } from 'components';

import useBlogPosts from './useBlogPosts';
import styles from './style';

interface Props {
  classes: any;
};

const BlogPostList = ({ classes }: Props) => {
  const { allContentfulBlogPost } = useBlogPosts();

  return (
    <div className={classes.container}>
      {allContentfulBlogPost.edges.map(({ node }, index) => (
        <BlogPost key={index} data={node} />
      ))}
    </div>
  );
};

export default withStyles(styles)(BlogPostList);
