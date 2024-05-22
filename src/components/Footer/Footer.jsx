import React from 'react';
import { Container, Grid, Box, Typography, IconButton } from '@mui/material';
import { Facebook, X, LinkedIn, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom>
              Contact Information
            </Typography>
            <Typography variant='body2'>
              Email: mailbuddy98@gmail.com
            </Typography>
            <Typography variant='body2'>Phone: +91 9706656354</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom>
              Follow Me
            </Typography>
            <Box>
              <IconButton
                href='https://www.facebook.com/profile.php?id=61559866865844'
                target='_blank'
                rel='noopener'
              >
                <Facebook />
              </IconButton>
              <IconButton
                href='https://x.com/abhilekhz_bussi'
                target='_blank'
                rel='noopener'
              >
                <X />
              </IconButton>
              <IconButton
                href='https://www.linkedin.com/in/abhilekh-sarmah'
                target='_blank'
                rel='noopener'
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                href='https://github.com/abhilekhsarmah200'
                target='_blank'
                rel='noopener'
              >
                <GitHub />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={3} textAlign='center'>
          <Typography variant='body2' color='textSecondary'>
            &copy; {new Date().getFullYear()} Abhilekh Sarmah. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
