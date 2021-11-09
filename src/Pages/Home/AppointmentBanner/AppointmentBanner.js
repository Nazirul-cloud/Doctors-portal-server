import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58,74, 0.7)',
    backgroundBlendMode: "darken, luminosity",
    marginTop: '175px'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img 
            style={{width: 400, marginTop: '-110px'}}
            src={doctor} alt="doctor img" />
          </Grid>
          
          <Grid item xs={12} md={6} sx={{  display: 'flex',  justifyContent: 'flex-start', textAlign:'left', alignItems: 'center' }} >
           <Box>
           <Typography variant='h6' sx={{mb:5}} style={{color:'#5CE7ED'}}>
                Appointment
            </Typography>
            <Typography variant='h4' style={{color: 'white'}}>
                Make an Appointment Today
            </Typography>
            <Typography variant='h8' sx={{ my:5 }} style={{color:'white', fontSize: 14, fontWeight: 300}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis veniam soluta aliquam ratione officiis accusamus animi libero. Sint, quasi?
            </Typography>
            <br />
            <Button sx={{mt:5}} style={{backgroundColor:'#5CE7ED'}} variant="contained">Learn More</Button>
           </Box>
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;