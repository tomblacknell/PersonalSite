import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ children }) => {
  const { hero4K } = useStaticQuery(graphql`
  query HeroQuery {
    hero4K: file(absolutePath: { regex: "/hero-4k.jpg/" }) {
      childImageSharp {
        fluid(quality: 100 maxWidth: 5000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
    <BackgroundImage
      Tag="section"
      className="hero"
      fluid={hero4K.childImageSharp.fluid}
    >
      <div>
        {children}
      </div>
      <div className="row justify-center">
        <FontAwesomeIcon className="icon-hero" size="2x" icon={faAngleDoubleDown} />
      </div>
    </BackgroundImage>
  );
};

export default Hero;
