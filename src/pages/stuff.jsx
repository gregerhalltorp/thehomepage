import React from 'react';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import { PictureAsPdf as PdfIcon, Link as LinkIcon } from '@material-ui/icons';
import styled from 'styled-components';
import xjobb from '../../files/Xjobb.pdf';
import padlock from '../../files/Padlock.pdf';
// import CardActions from '@material-ui/core/CardActions';

import Layout from '../components/Layout';

const PdfAvatar = () => (
  <Avatar>
    <PdfIcon />
  </Avatar>
);

const LinkAvatar = () => (
  <Avatar>
    <LinkIcon />
  </Avatar>
);

const StuffCard = ({ link, title, avatar, body }) => (
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

const StyledCardContent = styled(CardContent)`
  padding-top: 0;
`;

export default ({ location }) => {
  return (
    <Layout location={location} title="Stuff">
      <Grid container spacing={1}>
        <Grid item container xs={6} spacing={1} alignContent="flex-start">
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Code stuff
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StuffCard
              link="https://github.com/gregerhalltorp"
              title="GitHub"
              avatar={<LinkAvatar />}
            />
          </Grid>
          <Grid item xs={12}>
            <StuffCard
              link="https://gist.github.com/gregerhalltorp"
              title="Gists"
              avatar={<LinkAvatar />}
              body="Gist code snippets"
            />
          </Grid>
        </Grid>
        <Grid item container xs={6} spacing={1} alignContent="flex-start">
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Sciency stuff
            </Typography>
          </Grid>
          {/* eslint-disable react/jsx-wrap-multilines */}
          <Grid item xs={12}>
            <StuffCard
              link={xjobb}
              title={
                <>
                  A phylogenomic study of <em>Francisella tularensis</em>
                </>
              }
              avatar={<PdfAvatar />}
              body="Mitt examensarbete för civilingenjörsutbildningen"
            />
          </Grid>
          <Grid item xs={12}>
            <StuffCard
              link={padlock}
              title="Computer-aided Construction of Padlock Probes"
              avatar={<PdfAvatar />}
              body={
                <>
                  Rapport från kursen{' '}
                  <em>Teknisk och naturvetenskaplig databehandling</em>
                </>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <StuffCard
              link="http://www.nature.com/ng/journal/v37/n2/abs/ng1499.html"
              title={
                <>
                  The complete genome sequence of{' '}
                  <em>Francisella tularensis</em>, the causative agent of
                  tularemia
                </>
              }
              avatar={<LinkAvatar />}
              body="Artikeln där mitt exjobb ingick"
            />
          </Grid>
          {/* eslint-enable react/jsx-wrap-multilines */}
        </Grid>
      </Grid>
    </Layout>
  );
};
