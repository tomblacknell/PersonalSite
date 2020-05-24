import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
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
  const { social } = data.site.siteMetadata;
  return (
    <div>
      <ul>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Blog</li>
        <li className="nav-item"><a href={`https://github.com/${social.github}`}>GitHub</a></li>
        <li className="nav-item"><a href={`https://twitter.com/${social.twitter}`}>Twitter</a></li>
        <li className="nav-item"><a href={`https://www.linkedin.com/in/${social.linkedin}`}>LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default Nav;
