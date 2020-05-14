import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Copyright from './Copyright';
import Link from './Link';
import globalTheme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
  }
`;

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(1.5),
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  toolbarLink: {
    marginLeft: theme.spacing(),
  },
  mainContainer: {
    // marginLeft: '5%',
    backgroundColor: '#f5f5f5',
  },
  footer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(6),
    },
  },
}));

// eslint-disable-next-line no-unused-vars
export default ({ children, location }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(
          sort: { fields: [frontmatter___priority], order: ASC }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  const classes = useStyles();

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Helmet>
      <ThemeProvider theme={globalTheme}>
        <CssBaseLine />
        <AppBar position="static" color="primary" className={classes.header}>
          <Toolbar>
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              {data.site.siteMetadata.title}
            </Typography>
            <nav>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Link
                  variant="button"
                  color="inherit"
                  to={node.fields.slug}
                  className={classes.toolbarLink}
                  key={node.id}
                >
                  {node.frontmatter.title}
                </Link>
              ))}
              <Link
                variant="button"
                color="inherit"
                to="/stuff"
                className={classes.toolbarLink}
              >
                Stuff
              </Link>
            </nav>
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="md"
          className={classes.mainContainer}
        >
          <Typography variant="body1" component="section">
            {children}
          </Typography>
        </Container>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Copyright />
        </Container>
      </ThemeProvider>
    </>
  );
};
