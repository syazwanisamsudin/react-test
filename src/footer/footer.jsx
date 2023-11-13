import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-scroll';

const Footer = () => {
    const paddingTop= {paddingTop: '0.5rem'};
    const downloadHandler = () => {
        const link = document.createElement('a');
            link.href = '/Najwa_Ashyiela_Resume.pdf';
            link.download = 'Najwa_Ashyiela_Resume.pdf';
            link.click();
    };
  return (
    <>
    <div style={{ backgroundColor: '#008ff8', padding: '2rem', marginTop: '1rem' }}>
      <Grid container>
        {/* Contact Me Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" style={{ paddingLeft: '3rem' }}>Contact Me</Typography>
          <Grid container style={{ paddingLeft: '3rem' }}>
            <Grid item xs={12} md={6} style={paddingTop}>
                <Typography>Email: <a href="mailto:ashyiela230802@gmail.com" style={{ textDecoration: 'none'}}>ashyiela230802@gmail.com</a></Typography>
            </Grid>
            <Grid item xs={12} style={paddingTop}>
            <Typography>LinkedIn: Nur Najwa Ashyiela Fazil</Typography>
            </Grid>
            <Grid item xs={12} md={6} style={paddingTop}>
            <Typography>Discord: Najwa_Ashyiela#1723</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Site Map Column */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" style={{ paddingLeft: '3rem' }}>Site Map</Typography>
          {/* Add your site map content here */}
          <Grid container style={{ paddingLeft: '3rem' }}>
            <Grid item xs={12} md={6} style={paddingTop}>
                <Link 
                    to="project" 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500}
                    style={{ cursor: 'pointer' }}
                >
                    <Typography>PROJECT</Typography>
                </Link>
            </Grid>
            <Grid item xs={12} style={paddingTop}>
                <Link 
                    to="journey" 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500}
                    style={{ cursor: 'pointer' }}
                >
                    <Typography>JOURNEY</Typography>
                </Link>
            </Grid>
            <Grid item xs={12} md={6} style={paddingTop}>
                <Link 
                    to="download-resume" 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500}
                    style={{ cursor: 'pointer' }}
                    onClick = {() => {
                        downloadHandler();
                    }}
                >
                    <Typography>DOWNLOAD RESUME</Typography>
                </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    <div style={{ backgroundColor: '#fff', color: '#000', padding: '0.2rem'}}>
        <Typography style={{paddingLeft: '4rem'}}>© 2023 Nur Najwa Ashyiela  Binti Fazil</Typography>
    </div>
    </>
  );
};

export default Footer;
