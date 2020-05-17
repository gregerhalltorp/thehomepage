import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';
import MainPaper from '../components/MainPaper';

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

export default ({ data, location }) => {
  const page = data.mdx;
  return (
    <Layout location={location} title={page?.frontmatter.title}>
      <MainPaper>
        <MDXRenderer>{page.body}</MDXRenderer>
      </MainPaper>
    </Layout>
  );
};
