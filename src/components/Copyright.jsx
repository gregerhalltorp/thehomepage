/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link, Typography } from '@material-ui/core';

export default () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="https://gregerhalltorp.net">
      Greger Hälltorp
    </Link>{' '}
  </Typography>
);
