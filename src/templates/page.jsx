import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import MainPaper from '../components/MainPaper';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default ({ data, location }) => {
  const post = data.markdownRemark;
  return (
    <Layout location={location} title={post?.frontmatter.title}>
      <MainPaper>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </MainPaper>
    </Layout>
  );
};
