/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Typography from '@material-ui/core/Typography';

import Link from './Link';

export default () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" to="http://gregerhalltorp.net">
      Greger Hälltorp
    </Link>{' '}
  </Typography>
);
