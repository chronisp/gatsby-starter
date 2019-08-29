import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';
import Welcome from 'containers/welcome';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Welcome />
  </Layout>
);

export default IndexPage;
