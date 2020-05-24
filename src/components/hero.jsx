import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

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
    </BackgroundImage>
  );
};

export default Hero;
