import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`
    
}

const verticalCenter = {
    display: 'flex',
    height: 400,
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1, textAlign:'left', alignItems: 'center', p:2 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6} style={{...verticalCenter}}>
               <Box> 
                <Typography sx={{mb:3}} variant='h3'>
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography  sx={{mb:3}} variant='h6' style={{color: 'gray',fontSize: 14, fontWeight: 300}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam doloremque necessitatibus deleniti ipsam rerum. 
                    </Typography>
                    <Button style={{backgroundColor:'#5CE7ED'}} variant="contained" >Get Appointment</Button>
               </Box>
            </Grid>
            <Grid item xs={12} md={6} style={verticalCenter}>
                <img style={{width:'350px'}} src={chair} alt="" />
            </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;