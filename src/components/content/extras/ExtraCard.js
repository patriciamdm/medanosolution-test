import React from 'react'
import { Grid, Typography, Card, CardContent } from '@material-ui/core'


const ExtraCard = ({ name, other }) => {

    const editName = name.charAt(0).toUpperCase() + name.slice(1)

    return (
        <Grid item xs={12} sm={6} md={3}>
            <Card style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{editName}</Typography>
                    <Typography gutterBottom variant="subtitle1" component="h2">{other}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
    
}

export default ExtraCard