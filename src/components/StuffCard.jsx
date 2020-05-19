import React from 'react';
import {
  Card,
  CardActionArea,
  CardHeader,
  Typography,
} from '@material-ui/core';

export default ({ link, title, Avatar, body }) => {
  return (
    <>
      <Card>
        <CardActionArea href={link} target="_blank" rel="noopener">
          <CardHeader
            title={<Typography variant="subtitle1">{title}</Typography>}
            subheader={body}
            avatar={<Avatar />}
          />
        </CardActionArea>
      </Card>
    </>
  );
};
