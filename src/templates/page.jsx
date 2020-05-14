import Paper from '@material-ui/core/Paper';
import React from 'react';
import { graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    paddingTop: theme.spacing(0.25),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(6),
  },
}));

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
  const classes = useStyles();
  const post = data.markdownRemark;
  return (
    <Layout location={location}>
      <Paper className={classes.mainPaper}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Paper>
    </Layout>
  );
};
