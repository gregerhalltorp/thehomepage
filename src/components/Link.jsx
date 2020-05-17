import { Link as MuiLink } from '@material-ui/core';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const MyLink = (props) => {
  return (
    <GatsbyLink
      {...props}
      getProps={(someStuff) => {
        console.log(someStuff);
      }}
    />
  );
};

const Link = React.forwardRef((props, ref) => {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
