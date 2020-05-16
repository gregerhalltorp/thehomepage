import React from 'react';
import styled from 'styled-components';
import {
  CardContent,
  Card,
  CardActionArea,
  CardHeader,
  Typography,
} from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({});

const StyledCardContent = styled(CardContent)`
  padding-top: 0;
`;

export default ({ link, title, avatar, body }) => {
  const theme = useTheme();
  return (
    <Card>
      <CardActionArea href={link} target="_blank" rel="noopener">
        <CardHeader
          title={<Typography variant="h6">{title}</Typography>}
          avatar={avatar}
        />
        {body && (
          <StyledCardContent>
            <Typography variant="body2">{body}</Typography>
          </StyledCardContent>
        )}
      </CardActionArea>
    </Card>
  );
};
