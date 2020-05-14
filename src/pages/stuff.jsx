import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
// import CardActions from '@material-ui/core/CardActions';

import Layout from '../components/Layout';

export default ({ location }) => {
  return (
    <Layout location={location}>
      <Grid container>
        <Grid item container xs={6} spacing={1}>
          <Grid item xs={12}>
            <Card>
              <CardActionArea href="https://github.com/gregerhalltorp">
                <CardHeader title="GitHub" />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardActionArea href="https://gist.github.com/gregerhalltorp">
                <CardHeader title="Gists" />
                <CardContent>Code snippets, some are used for blogging</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};
