import React, {useState} from 'react';
import { Grid, Paper, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';



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
    const link = `/pokemon/${url.slice(34, -1)}`

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{display: 'flex', justifyContent: 'space-between'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{editName}</Typography>
                </CardContent>
                <CardActions style={{padding: '16px'}}>
                    <Link to={link} className="link-edit">See more</Link>
                </CardActions>
            </Card>
        </Grid>
    )

    
}

export default PokemonCard