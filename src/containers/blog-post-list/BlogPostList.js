import React from 'react';
import { withStyles } from '@material-ui/styles';

import BlogPost from 'components/blog-post';

import fetchBlogPosts from './fetchBlogPosts';
import styles from './style';

type Props = {
  classes: Object,
};

const BlogPostList = ({ classes }: Props) => {
  const { allContentfulBlogPost } = fetchBlogPosts();

  return (
    <div className={classes.container}>
      {allContentfulBlogPost.edges.map(({ node }, index) => (
        <BlogPost key={index} data={node} />
      ))}
    </div>
  );
};

export default withStyles(styles)(BlogPostList);
