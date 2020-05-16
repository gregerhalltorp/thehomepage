import React from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {
  PhoneAndroid as PhoneIcon,
  Mail as MailIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '@material-ui/icons';

import Layout from '../components/Layout';
import MainPaper from '../components/MainPaper';

const ListItemLink = (props) => <ListItem button component="a" {...props} />;

export default () => (
  <Layout title="Kontakt">
    <MainPaper>
      <Typography variant="h4">Kontaktinfo</Typography>
      <Box mt={2}>
        <List>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="+46 70 996 9525" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="greger[punkt]halltorp[snabel-a]gmail[punkt]com" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary="@gregerh och/eller @ghalltorp" />
          </ListItem>
          <ListItemLink href="https://www.linkedin.com/in/greger-h%C3%A4lltorp-7b56271a/">
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
          </ListItemLink>
        </List>
      </Box>
    </MainPaper>
  </Layout>
);
