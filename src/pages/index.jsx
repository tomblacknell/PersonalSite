import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
// import Posts from '../components/posts';
import Projects from '../components/projects';
import Hero from '../components/hero';
import RunStats from '../components/runStats';

import '../styles/main.scss';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Fragment>
      <Hero>
        <Bio />
      </Hero>
      <Layout location={location} title={siteTitle}>
        <SEO title="Home" />
        <Projects />
        <RunStats />
        {/* <Posts /> */}
      </Layout>
    </Fragment>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
