/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
    <div className="nav">
      <ul>
        <a onClick={() => scrollTo('projects')}>
          <li className="nav-item">
            <FontAwesomeIcon className="icon-nav" icon={faPlay} />
            Projects
          </li>
        </a>
        {/* <a onClick={() => scrollTo('posts')}>
          {navItem('Blog')}
        </a> */}
        <a target="_blank" rel="noreferrer" href={`https://github.com/${social.github}`}>
          <li className="nav-item">
            <FontAwesomeIcon className="icon-nav" icon={faGithubAlt} />
            GitHub
          </li>
        </a>
        <a target="_blank" rel="noreferrer" href={`https://www.linkedin.com/in/${social.linkedin}`}>
          <li className="nav-item">
            <FontAwesomeIcon className="icon-nav" icon={faLinkedin} />
            LinkedIn
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Nav;
