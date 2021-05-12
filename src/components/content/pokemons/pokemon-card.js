import React, {useState} from 'react';
import { Grid, Paper, Typography, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    card: {
        padding: '10px',
        backgroundColor: 'pink'
    }
})

const PokemonCard = ({info}) => {

    const classes = useStyles()

    const { name, url } = info
    const editName = name.charAt(0).toUpperCase() + name.slice(1)
    const img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'

    return (
        <Grid item xs={12} sm={6} md={4}>
            {/* <Paper elevation={3} className={classes.card}>
                <Typography><b>Name:</b> {editName}</Typography>
            </Paper> */}
            <Card>
                <CardActionArea style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <CardMedia image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png' title={editName} style={{height: '30px', width: 'auto'}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{editName}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )

    
}

export default PokemonCard