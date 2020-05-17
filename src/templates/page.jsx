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
  const post = data.mdx;
  return (
    <Layout location={location} title={post?.frontmatter.title}>
      <MainPaper>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MainPaper>
    </Layout>
  );
};
