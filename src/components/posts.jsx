import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
    <div className="container">
      <h4>Posts</h4>
      {posts.map(({ node }) => (
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

export default Posts;
