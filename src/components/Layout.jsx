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

const icons = {
  Hem: HomeIcon,
  Om: InfoIcon,
};

const GlobalStyle = createGlobalStyle`
  html {
    min-width: 300px;
  }
  body {
    background-color: #f5f5f5;
    min-width: 300px;
  }
`;

const useStyles = makeStyles((theme) => {
  return {
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
    mainContainer: {
      backgroundColor: '#f5f5f5',
    },
    bottomAppBar: {
      top: 'auto',
      bottom: 0,
    },
    navigation: {
      display: 'flex',
      alignSelf: 'stretch',
      alignItems: 'stretch',
    },
    navigation__list: {
      listStyleType: 'none',
      margin: '0px',
      display: 'flex',
    },
    navigation__item: {
      display: 'flex',
      alignItems: 'stretch',
    },
    navigation__link: {
      padding: `0 ${theme.spacing(1)}px ${theme.spacing(1)}px`,
      display: 'flex',
      alignItems: 'flex-end',
      borderBottom: 'solid #1976D4',
    },
    'navigation__link--selected': {
      borderBottom: 'solid white',
    },
    'page-footer': {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(6),
      },
    },
    [`${theme.breakpoints.down('xs')}`]: {
      navigation: {
        display: 'none',
      },
    },
    [`${theme.breakpoints.up('sm')}`]: {
      'bottom-navigation': {
        display: 'none',
      },
    },
    [`${theme.breakpoints.up('md')}`]: {
      mainContainer: {
        maxWidth: `${theme.breakpoints.width('md')}px`,
      },
    },
  };
});

export default ({ children, title, location }) => {
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
            <div className={classes.navigation}>
              <nav className={classes.navigation}>
                <ul className={classes.navigation__list}>
                  {data.allMdx.edges.map(({ node }) => (
                    <li className={classes.navigation__item} key={node.id}>
                      <Link
                        variant="button"
                        color="inherit"
                        to={node.fields.slug}
                        className={classes.navigation__link}
                        activeClassName={classes['navigation__link--selected']}
                      >
                        {node.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                  <li className={classes.navigation__item}>
                    <Link
                      variant="button"
                      color="inherit"
                      to="/stuff"
                      className={classes.navigation__link}
                      activeClassName={classes['navigation__link--selected']}
                    >
                      Stuff
                    </Link>
                  </li>
                  <li className={classes.navigation__item}>
                    <Link
                      variant="button"
                      color="inherit"
                      to="/contact"
                      className={classes.navigation__link}
                      activeClassName={classes['navigation__link--selected']}
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm" className={classes.mainContainer}>
          <Typography variant="body1" component="section">
            {children}
          </Typography>
        </Container>
        <Container
          maxWidth={false}
          component="footer"
          className={classes['page-footer']}
        >
          <Copyright />
        </Container>
        <div className={classes['bottom-navigation']}>
          <AppBar
            position="fixed"
            className={classes.bottomAppBar}
            component="footer"
          >
            <BottomNavigation showLabels value={location.pathname}>
              {data.allMdx.edges.map(({ node }) => {
                const Icon = icons[node.frontmatter.title];
                return (
                  <BottomNavigationAction
                    key={node.id}
                    component={Link}
                    to={node.fields.slug}
                    label={node.frontmatter.title}
                    icon={<Icon />}
                    value={node.fields.slug}
                  />
                );
              })}
              <BottomNavigationAction
                component={Link}
                to="/stuff/"
                label="Stuff"
                icon={<DescriptionIcon />}
                value="/stuff/"
              />
              <BottomNavigationAction
                component={Link}
                to="/contact/"
                label="Kontakt"
                icon={<ContactIcon />}
                value="/contact/"
              />
            </BottomNavigation>
          </AppBar>
        </div>
      </ThemeProvider>
    </>
  );
};
