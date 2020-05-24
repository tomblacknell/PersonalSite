import React from 'react';
import { graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Posts from '../components/posts';
import Projects from '../components/projects';

import '../styles/main.scss';

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
      <h3 className="section-head">Posts</h3>
      <p className="section-subhead">Look at all these interesting blog posts</p>
      <Posts />
      <h3 className="section-head">Projects</h3>
      <p className="section-subhead">Read about and play with some of my side projects</p>
      <Projects />
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
