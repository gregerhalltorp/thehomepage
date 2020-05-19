import { Link as MuiLink } from '@material-ui/core';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = React.forwardRef((props, ref) => {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
