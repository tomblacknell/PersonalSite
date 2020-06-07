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
      >
        <div>
          {children}
        </div>
        <div className="row justify-center">
          <FontAwesomeIcon className="icon-hero bounce" size="2x" icon={faAngleDoubleDown} />
          <small
            style={{
              color: 'white',
              bottom: 0,
              position: 'absolute',
              marginBottom: 10,
              right: 10,
            }}
          >
            <a
              href="https://www.nasa.gov/mission_pages/hubble/multimedia/index.html"
              target="_blank"
              rel="noreferrer"
              style={{
                color: 'rgb(135, 135, 135)',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              Source
            </a>
          </small>
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Hero;
