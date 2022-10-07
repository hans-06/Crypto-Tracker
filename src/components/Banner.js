import { Container, Typography } from '@mui/material';
import React from 'react';
import { customStyles } from '../Style';
import Carousel from './Carousel';

const Banner = () => {
  return (
    <div style={customStyles.banner}>
    <Container sx={customStyles.bannerContent}>
      <div style={customStyles.tagline}>
        <Typography 
        variant='h2'
        sx={customStyles.heading}>Crypto Hunter</Typography>
        <Typography 
        variant='subtitle2'
        sx={customStyles.subHeading}>get all the info regarding your favourite crypto currency</Typography>
      </div>
      <Carousel/>
    </Container>
    </div>
  )
}

export default Banner