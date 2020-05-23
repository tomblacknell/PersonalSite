import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginBottom: 0,
          minWidth: 100,
          borderRadius: '100%',
        }}
        imgStyle={{
          borderRadius: '50%',
        }}
      />
      <p>
        <strong>{author}</strong>
        {' '}
        Brighton based Software Engineer building web apps at American Express. Find me on
        {' '}
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        {', '}
        <a href={`https://github.com/${social.github}`}>
          GitHub
        </a>
        {' and '}
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
};

export default Bio;
