import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import './style.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaDiscord } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export const Profile = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <div>
            <div className='image-container'>
                <img src="profilePic.jpg" alt="Profile Picture"/>
            </div>
            <div class="header-text">
                <Typography variant={isSmallScreen ? 'h4' : 'h3'}>Najwa Ashyiela</Typography>
                <Typography variant={isSmallScreen ? 'h6' : 'h5'}>Student, Developer</Typography>
                <div className="icon-container">
                    <IconContext.Provider value={{ size: '2rem', style: { marginBottom:"2rem", marginRight: '0.6rem' } }}>
                        <a href="https://www.linkedin.com/in/nur-najwa-ashyiela-fazil-b9893b270/">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Ash230802">
                            <FaGithub />
                        </a>
                        <a href="mailto:ashyiela230802@gmail.com">
                            <FaEnvelope />
                        </a>
                        <a href="Najwa_Ashyiela#1723">
                            <FaDiscord />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )}