import React from 'react'
import { AppBar, Toolbar, Typography, Fab } from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const Footer = () => {

    const handleClick = e => {
        const anchor = (e.target.ownerDocument || document).querySelector('#back-to-top-anchor')
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <AppBar position="static" style={{backgroundColor: 'gray'}}>
            <Toolbar style={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography variant="body1">Copyright © 2021. Developed by Patricia Muñoz de Dios</Typography>
                <Fab aria-label="scroll back to top" onClick={handleClick} color="secondary" size="small">
                    <KeyboardArrowUpIcon />
                </Fab>
            </Toolbar>
        </AppBar>
    )
}

export default Footer