import React, { useState } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SliderData } from './SliderData';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    
  };
  console.log(current);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
        <Typography variant="h4" style={{ textAlign: "center", margin: "2rem" }}>Portfolio</Typography>
        <Grid container className="slider" justifyContent="center" alignItems="center">
            <Grid item xs={1} display="flex" justifyContent="center">
                <IconButton onClick={prevSlide} style={{ color: 'white', fontSize: '2rem'}}>
                <FaChevronLeft />
                </IconButton>
            </Grid>
            <Grid item xs={10} display="flex" justifyContent="center" style={{ marginTop: '20px' }}>
                {SliderData.map((slide, index) => {
                    return (
                        <div key={index}>
                            { index === current  && (
                            <div>
                                <img
                                src={slide.image}
                                alt={`Slide ${index}`}
                                style={{ maxWidth: '100%', maxHeight: '300px', display: 'block', margin: '0 auto' }}
                                />
                                <div style={{ textAlign: 'center' }}>
                                    <Typography variant='h4' style={{ paddingTop: '1rem' }}>
                                        {slide.title}
                                    </Typography>
                                    <Typography variant='h7'>{slide.description}</Typography>
                                    <a href={slide.link} style={{ display: 'block', textDecoration: 'none', color: 'white', fontWeight: 'bold', padding: '1rem' }}>VISIT CODE</a>

                                </div>
                            </div>
                            )}
                        </div>
                    )

                    })}
            </Grid>
            <Grid item xs={1} display="flex" justifyContent="center">
                <IconButton onClick={nextSlide} style={{ color: 'white', fontSize: '2rem'}}>
                <FaChevronRight />
                </IconButton>
            </Grid>
        </Grid>
    </>
  );
};

export default ImageSlider;