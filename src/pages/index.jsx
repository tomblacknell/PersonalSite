import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Posts from '../components/Posts';
import Projects from '../components/Projects';

import '../styles/main.scss';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
      <Posts />
      <Projects />
      <div style={{ marginTop: '700px' }} />
    </Layout>
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
