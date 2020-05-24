import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import Nav from './nav';

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

  const { author } = data.site.siteMetadata;
  return (
    <div className="col bio">
      <div className="row">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          className="avatar"
        />
        <div className="col justify-center">
          <p>
            Brighton based full-stack engineer building web apps at American Express.
          </p>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Bio;
