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
                gatsbyImageData(layout: FULL_WIDTH)
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

//old hero data format with gatsby-image instead of gatsby-plugin-image
// heroImage {
//   fluid(maxWidth: 960) {
//     ...GatsbyContentfulFluid_withWebp
//   }
// }
