import React from 'react';
import { Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import AboutTheAuthor from '../components/aboutTheAuthor';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle} fixHeader>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <div>
          <div className="project-info">
            <h2
              style={{
                marginBottom: 5,
              }}
            >
              {post.frontmatter.title}
            </h2>
            <a className="cta" rel="noreferrer noopener" target="_blank" href={post.frontmatter.url}>
              <FontAwesomeIcon className="icon-btn " icon={faPlayCircle} size="3x" />
            </a>
          </div>
          <p
            style={{
              display: 'block',
              marginBottom: 25,
            }}
          >
            {post.frontmatter.date}
          </p>
        </div>
        <section
          style={{ marginBottom: 40, padding: 10 }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <AboutTheAuthor />
      </article>

      <nav>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ←
                {' '}
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
                {' '}
                →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        url
      }
    }
  }
`;
