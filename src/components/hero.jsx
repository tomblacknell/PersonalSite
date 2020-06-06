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
        fluid(quality: 100 maxWidth: 5300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`);

  return (
    <div style={{ backgroundColor: 'black' }}>
      <BackgroundImage
        Tag="section"
        className="hero"
        fluid={hero4K.childImageSharp.fluid}
        // style={{ opacity: 0.5 }}
        // opacity={0.5}
      >
        <div>
          {children}
        </div>
        <div className="row justify-center">
          <FontAwesomeIcon className="icon-hero bounce" size="2x" icon={faAngleDoubleDown} />
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Hero;
