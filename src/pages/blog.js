import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';
import BlogPostList from 'containers/blog-post-list';

const BlogPage = () => (
  <Layout noBackground>
    <SEO title='Blog' />
    <BlogPostList />
  </Layout>
);

export default BlogPage;
