import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography, Link as ExternalLink } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import InternalLink from '../components/Link';
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

const Link = ({ href, ...rest }) => {
  if (href.match(/^http[s]?/)) {
    console.log('matchy');
    return <ExternalLink href={href} {...rest} />;
  }
  console.log('no matchy');
  return <InternalLink to={href} {...rest} />;
};

const H1 = styled((props) => <Typography variant="h4" {...props} />)(
  ({ theme }) => ({
    margin: `${theme.spacing(2)}px 0`,
  })
);

const H2 = styled((props) => <Typography {...props} variant="h5" />)(
  ({ theme }) => ({
    margin: `${theme.spacing(1)}px 0`,
  })
);

const H3 = styled((props) => <Typography {...props} variant="h6" />)(
  ({ theme }) => ({
    margin: `${theme.spacing(0.5)}px 0`,
  })
);

const comps = {
  h1: H1,
  h2: H2,
  h3: H3,
  a: Link,
};

export default ({ data, location }) => {
  const page = data.mdx;
  return (
    <Layout location={location} title={page?.frontmatter.title}>
      <MainPaper>
        <MDXProvider components={comps}>
          <MDXRenderer>{page.body}</MDXRenderer>
        </MDXProvider>
      </MainPaper>
    </Layout>
  );
};
