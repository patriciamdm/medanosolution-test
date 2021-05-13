import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'


const Navigation = () => {

    const [drawer, setDrawer] = useState(false)
    const handleOpen = () => setDrawer(true)
    const handleClose = () => setDrawer(false)

    return (
        <>
            <AppBar position="static">
                <Toolbar id="back-to-top-anchor">
                    <IconButton aria-label="open side menu" color="inherit" onClick={handleOpen} edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ margin: '0px 12px' }}>
                        <Link to="/" style={{textDecoration: 'none', color: 'white', fontSize: '1.3rem'}}>Pokemon API</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawer} onClose={handleClose}>
                <List>
                    <ListItem><Link to="/" onClick={handleClose} className="link-edit">Pokemons</Link></ListItem>    
                    <ListItem><Link to="/generations" onClick={handleClose} className="link-edit">Generations</Link></ListItem>    
                    <ListItem><Link to="/evolutions" onClick={handleClose} className="link-edit">Evolutions</Link></ListItem>    
                </List>
            </Drawer>
        </>
    )
}

export default Navigation