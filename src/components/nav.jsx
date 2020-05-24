/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from '../utils/scrollTo';

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
        <a onClick={() => scrollTo('projects')}><li className="nav-item">Projects</li></a>
        <a onClick={() => scrollTo('posts')}><li className="nav-item">Blog</li></a>
        <a href={`https://github.com/${social.github}`}><li className="nav-item">GitHub</li></a>
        <a href={`https://twitter.com/${social.twitter}`}><li className="nav-item">Twitter</li></a>
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}><li className="nav-item">LinkedIn</li></a>
      </ul>
    </div>
  );
};

export default Nav;
