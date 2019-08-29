import React from 'react';

import Layout from 'components/layout';
import SEO from 'components/seo';
import About from 'containers/about';

const AboutPage = () => (
  <Layout>
    <SEO title='About' />
    <About />
  </Layout>
);

export default AboutPage;
