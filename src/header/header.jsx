import React, { useState, MouseEvent } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuList, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const sections = [
    { label: 'ABOUT ME', id: 'about-me' },
    { label: 'PROJECT', id: 'project' },
    { label: 'JOURNEY', id: 'journey' },
    { 
        label: 'DOWNLOAD RESUME', 
        id: 'download-resume',
        handler: () => {
            const link = document.createElement('a');
            link.href = '/Najwa_Ashyiela_Resume.pdf';
            link.download = 'Najwa_Ashyiela_Resume.pdf';
            link.click();
        }, 
    },
  ];

function Navbar() {
    const [anchorNav, setAnchorNav] = useState(null);
    const openMenu = (event)=> {
        setAnchorNav(event.currentTarget);
        console.log("Menu opened: ", anchorNav);
    };
    const closeMenu=()=>{
        setAnchorNav(null);
        console.log("Menu closed: ", anchorNav);
    };
    const scrollToTop=()=> {
        window.scrollTo(0,0);
    };
    const handleDownload = (sectionID) => {
        const section = sections.find((section) => section.id === sectionID);
        if (section && section.handler) {
            section.handler();
        }
    };
    return (
        <AppBar position='static'>
            <Toolbar>
                    <Typography variant='h5' sx={{flexGrow:1, fontFamily: 'Dancing Script'}}>
                        Najwa Ashyiela
                    </Typography>
                <Box sx={{display: {xs: 'none', md:'flex'}}}>
                    {sections.map((section)=> (
                        <Link 
                            color='inherit'
                            key={section.label}
                            to={section.id}
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                            style={{ marginRight: '1rem', cursor: 'pointer' }}
                            onClick={() => {
                                handleDownload(section.id);
                            }}
                        >
                            {section.label}
                        </Link>
                    ))}

                </Box>
                <Box sx={{display: {xs: 'flex', md:'none'}}}>
                    <IconButton size='large' edge='start' onClick={openMenu}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu 
                        anchorEl={anchorNav}
                        open={Boolean(anchorNav)} 
                        onClose={closeMenu} 
                        sx={{display: {xs: 'flex', md:'none'}}}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}

                    >
                        {sections.map((section)=> (
                            <Link
                                key={section.label}
                                to={section.id}
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                                style={{ cursor: 'pointer' }}
                                onClick={() => {closeMenu(); handleDownload(section.id); }}
                            >
                                <MenuItem>{section.label}</MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
