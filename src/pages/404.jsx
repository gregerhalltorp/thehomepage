import React from 'react';
import { Typography } from '@material-ui/core';

import Layout from '../components/Layout';

export default () => {
  return (
    <>
      <Typography variant="h1" color="error" align="center">
        NOT FOUND
      </Typography>
      <Typography variant="body1">Nothing to see here</Typography>
    </>
  );
};
