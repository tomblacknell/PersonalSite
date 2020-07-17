import React, { Fragment } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

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
    <Fragment>
      <div
        className="row section-head"
        style={{
          alignItems: 'center', marginBottom: 10, display: 'flex', justifyContent: 'space-between',
        }}
      >
        <h3 id="projects">
          PROJECTS
        </h3>
        <FontAwesomeIcon className="icon-nav" icon={faProjectDiagram} />
      </div>
      <div className="row wrap justify-around thumbnail-container">
        {projects.map(({ node }) => (
          <Thumbnail
            slug={node.fields.slug}
            title={node.frontmatter.title || node.fields.slug}
            description={node.frontmatter.description || node.excerpt}
            date={node.frontmatter.date}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
