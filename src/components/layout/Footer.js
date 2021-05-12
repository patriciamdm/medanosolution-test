import React from 'react';
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const Footer = () => {

    const handleClick = e => {
        const anchor = (e.target.ownerDocument || document).querySelector('#back-to-top-anchor')
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <AppBar position="static" style={{backgroundColor: 'gray'}}>
            <Toolbar>
                <Typography variant="body">Copyright © 2021. Developed by Patricia Muñoz de Dios</Typography>
                <Fab aria-label="scroll back to top" onClick={handleClick} edge="end" color="secondary" size="small" style={{position: 'absolute', right: '20px', bottom: '12px'}}>
                    <KeyboardArrowUpIcon />
                </Fab>
            </Toolbar>
        </AppBar>
    )
}

export default Footer