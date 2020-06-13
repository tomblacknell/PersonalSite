/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import scrollTo from '../utils/scrollTo';

const navItem = (label) => (
  <li className="nav-item">
    <FontAwesomeIcon className="icon-nav" icon={faCaretRight} />
    {label}
  </li>
);

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
          {navItem('Projects')}
        </a>
        <a onClick={() => scrollTo('posts')}>
          {navItem('Blog')}
        </a>
        <a target="_blank" rel="noreferrer" href={`https://github.com/${social.github}`}>
          {navItem('GitHub')}
        </a>
        <a target="_blank" rel="noreferrer" href={`https://www.linkedin.com/in/${social.linkedin}`}>
          {navItem('LinkedIn')}
        </a>
      </ul>
    </div>
  );
};

export default Nav;
