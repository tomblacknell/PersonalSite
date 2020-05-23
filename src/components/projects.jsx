import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Thumbnail from './thumbnail';

const Projects = () => {
  const { allMarkdownRemark: { edges: projects } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(projects)/"  }}, sort: { fields: [frontmatter___date], order: DESC }) {
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
    <div className="row wrap justify-center">
      {projects.map(({ node }) => (
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

export default Projects;
