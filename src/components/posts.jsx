import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

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
    <div>
      <div
        className="row"
        style={{
          alignItems: 'center', marginBottom: 10, display: 'flex', justifyContent: 'space-between',
        }}
      >
        <h3 id="projects" style={{ fontWeight: 300, fontSize: '1.5rem' }}>
          Blog
        </h3>
        <FontAwesomeIcon className="icon-nav" icon={faBook} />
      </div>
      <div className="hr" />
      <p className="section-subhead">Look at all these interesting blog posts</p>
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
    </div>
  );
};

export default Posts;
