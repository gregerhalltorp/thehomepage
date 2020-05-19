import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';
import {
  PictureAsPdf as PdfIcon,
  Link as LinkIcon,
  GitHub as GitHubIcon,
} from '@material-ui/icons';
import { styled } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import StuffCard from '../components/StuffCard';
import xjobb from '../../files/Xjobb.pdf';
import padlock from '../../files/Padlock.pdf';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(4),
  height: theme.spacing(4),
}));

const GitHubAvatar = () => (
  <SmallAvatar>
    <GitHubIcon fontSize="small" />
  </SmallAvatar>
);

const PdfAvatar = () => (
  <SmallAvatar>
    <PdfIcon fontSize="small" />
  </SmallAvatar>
);

const LinkAvatar = () => (
  <SmallAvatar>
    <LinkIcon fontSize="small" />
  </SmallAvatar>
);

export default ({ location }) => {
  return (
    <Layout location={location} title="Stuff">
      <Grid container spacing={1}>
        <Grid
          item
          container
          md={6}
          sm={12}
          spacing={1}
          alignContent="flex-start"
        >
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Code stuff
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StuffCard
              link="https://github.com/gregerhalltorp"
              title="GitHub"
              Avatar={GitHubAvatar}
            />
          </Grid>
          <Grid item xs={12}>
            <StuffCard
              link="https://gist.github.com/gregerhalltorp"
              title="Gists"
              Avatar={GitHubAvatar}
              body="Gist code snippets"
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md={6}
          sm={12}
          spacing={1}
          alignContent="flex-start"
        >
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              Sciency stuff
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {/* eslint-disable react/jsx-wrap-multilines */}
            <StuffCard
              link={xjobb}
              title={
                <>
                  A phylogenomic study of <em>Francisella tularensis</em>
                </>
              }
              Avatar={PdfAvatar}
              body="Mitt examensarbete för civilingenjörsutbildningen"
            />
          </Grid>
          <Grid item xs={12}>
            <StuffCard
              link={padlock}
              title="Computer-aided Construction of Padlock Probes"
              Avatar={PdfAvatar}
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
              Avatar={LinkAvatar}
              body="Artikeln där mitt exjobb ingick"
            />
          </Grid>
          {/* eslint-enable react/jsx-wrap-multilines */}
        </Grid>
      </Grid>
    </Layout>
  );
};
