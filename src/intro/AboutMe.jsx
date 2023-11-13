import React from 'react';
import { Typography } from '@mui/material';

export const AboutMe = () => {
    return(
        <div style={{backgroundColor: "white", color:"black", padding: "3rem", marginBottom: "2rem", marginTop: "6.5rem"}}>
             <Typography variant="h4" style={{ fontFamily: "Edu SA Beginner", paddingBottom: "1rem"}}>Hey</Typography>
            <Typography>
                I'm Nur Najwa Ashyiela from Malaysia.
            </Typography>
            <Typography>
                I'm currently enrolled in the Bachelor of Computer Science program at Swinburne University of Technology, Melbourne, Australia.
            </Typography>
            <Typography>
                I love travelling, working out, and improving myself!
            </Typography>
        </div>
    )}