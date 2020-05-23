import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const Posts = () => {
  const { allMarkdownRemark: { edges: posts } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

  return posts.map(({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    return (
      <article key={node.fields.slug}>
        <header>
          <h3>
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: node.frontmatter.description || node.excerpt,
            }}
          />
        </section>
      </article>
    );
  });
};

export default Posts;
