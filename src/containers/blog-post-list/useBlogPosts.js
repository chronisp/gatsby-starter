import { useStaticQuery, graphql } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { order: DESC, fields: publishDate }) {
          edges {
            node {
              title
              author {
                name
              }
              publishDate
              body {
                childMarkdownRemark {
                  html
                }
              }
              heroImage {
                fluid(maxWidth: 960) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  );
  return data;
};

export default useBlogPosts;
