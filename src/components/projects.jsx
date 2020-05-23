import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
    <div className="container">
      <h4>Projects</h4>
      {projects.map(({ node }) => (
        <article key={node.fields.slug}>
          <div>
            <h3>
              <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                {node.frontmatter.title || node.fields.slug}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
          </div>
          <section>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </section>
        </article>
      ))}
    </div>
  );
};

export default Projects;
