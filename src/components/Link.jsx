import MuiLink from '@material-ui/core/Link';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = React.forwardRef((props, ref) => (
  <MuiLink component={GatsbyLink} ref={ref} {...props} />
));

export default Link;
