import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/Layout';

const useStyles = makeStyles((theme) => ({
  errorBanner: {
    textAlign: 'center',
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <Layout>
      <Typography variant="h1" color="error" className={classes.errorBanner}>
        NOT FOUND
      </Typography>
      <Typography variant="body1">Nothing to see here</Typography>
    </Layout>
  );
};
