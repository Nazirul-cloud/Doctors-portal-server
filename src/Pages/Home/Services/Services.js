import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Typography from '@mui/material/Typography';

const allServices = [
  {
    name: 'Fluoride Treatment',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit, adipisci saepe quas accusamus totam suscipit voluptatum. Odio, ducimus fuga?",
    img: fluoride
  },
  {
    name: 'Cavity Filling',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit, adipisci saepe quas accusamus totam suscipit voluptatum. Odio, ducimus fuga?",
    img: cavity
  },
  {
    name: 'Teeth Filling',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit, adipisci saepe quas accusamus totam suscipit voluptatum. Odio, ducimus fuga?",
    img: whitening
  }
]





const Services = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
        <Container>
          <Typography  sx={{ fontWeight: "bold", color: 'info.main', m: 2  }} variant="h6" component="div">
                        OUR SERVICES
          </Typography>
          <Typography  sx={{ fontWeight: 600, m: 5}} variant="h4" component="div">
                      Services We Provide
          </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            allServices.map(service => <Service
            key={service.name}
            service={service}
            ></Service>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;