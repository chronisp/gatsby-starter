import React from 'react';

import { Layout, SEO } from 'components';
import { BlogPostList } from 'containers';

const BlogPage = () => (
  <Layout noBackground>
    <SEO title='Blog' />
    <BlogPostList />
  </Layout>
);

export default BlogPage;
