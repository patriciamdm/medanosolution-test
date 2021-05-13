import React from 'react'
import { Grid, Typography, Card, CardContent, CardActions } from '@material-ui/core'
import { Link } from 'react-router-dom'


const PokemonCard = ({ info }) => {

    const { name } = info
    const editName = name.charAt(0).toUpperCase() + name.slice(1)
    const link = `/pokemon/${name}`

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{editName}</Typography>
                </CardContent>
                <CardActions style={{padding: '16px'}}>
                    <Link to={link} className="link-edit" style={{color: 'gray', fontWeight: '200'}}>See more</Link>
                </CardActions>
            </Card>
        </Grid>
    )

    
}

export default PokemonCard