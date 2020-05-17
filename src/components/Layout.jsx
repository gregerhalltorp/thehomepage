import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
  Typography,
  Hidden,
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Description as DescriptionIcon,
  ContactMail as ContactIcon,
} from '@material-ui/icons';
import CssBaseLine from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import Copyright from './Copyright';
import Link from './Link';
import globalTheme from '../styles/theme';

import avatarImage from '../../files/images/profile.png';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
  }
`;

const useStyles = makeStyles((theme) => ({
  header: {
    marginBottom: theme.spacing(1.5),
  },
  toolbarAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  toolbarTitle: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
  toolbarLink: {
    marginLeft: theme.spacing(),
  },
  mainContainer: {
    // marginLeft: '5%',
    backgroundColor: '#f5f5f5',
  },
  bottomAppBar: {
    top: 'auto',
    bottom: 0,
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

export default ({ children, title }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(sort: { fields: [frontmatter___priority], order: ASC }) {
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
        <title>{`Greger Hälltorp${title ? ` - ${title}` : ''}`}</title>
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
        <AppBar position="sticky" color="primary" className={classes.header}>
          <Toolbar>
            <Avatar
              alt="Greger Hälltorp"
              src={avatarImage}
              className={classes.toolbarAvatar}
            />
            <Typography
              variant="h5"
              color="inherit"
              noWrap
              className={classes.toolbarTitle}
            >
              {data.site.siteMetadata.title}
            </Typography>
            <Hidden xsDown>
              <nav>
                {data.allMdx.edges.map(({ node }) => (
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
                <Link
                  variant="button"
                  color="inherit"
                  to="/contact"
                  className={classes.toolbarLink}
                >
                  Kontakt
                </Link>
              </nav>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" className={classes.mainContainer}>
          <Typography variant="body1" component="section">
            {children}
          </Typography>
        </Container>
        <Container
          maxWidth={false}
          component="footer"
          className={classes.footer}
        >
          <Copyright />
        </Container>
        <Hidden smUp>
          <AppBar position="fixed" className={classes.bottomAppBar}>
            <BottomNavigation showLabels>
              <BottomNavigationAction
                component={Link}
                to="/"
                label="Hem"
                icon={<HomeIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/about/"
                label="Om"
                icon={<InfoIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/stuff"
                label="Stuff"
                icon={<DescriptionIcon />}
              />
              <BottomNavigationAction
                component={Link}
                to="/contact"
                label="Kontakt"
                icon={<ContactIcon />}
              />
            </BottomNavigation>
          </AppBar>
        </Hidden>
      </ThemeProvider>
    </>
  );
};
