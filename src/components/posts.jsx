import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Thumbnail from './thumbnail';

const Posts = () => {
  const { allMarkdownRemark: { edges: posts } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(blog)/"  }}, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `,
  );

  return (
    <div className="row wrap justify-around">
      {posts.map(({ node }) => (
        <Thumbnail
          slug={node.fields.slug}
          title={node.frontmatter.title || node.fields.slug}
          description={node.frontmatter.description || node.excerpt}
          date={node.frontmatter.date}
        />
      ))}
    </div>
  );
};

export default Posts;
