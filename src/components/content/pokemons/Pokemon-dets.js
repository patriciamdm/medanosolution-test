import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Avatar, Grid } from '@material-ui/core';

import PokemonContext from '../../../context/pokemons/pokemonContext.js'

import AlertMsg from '../../layout/Alert.js'


const PokemonDetails = (props) => {

    const pokemonContext = useContext(PokemonContext)
    const { pokemon, alertmsg, getOnePokemon } = pokemonContext

    const [alert, showAlert] = useState(false)

    useEffect(() => {
        if (alertmsg) showAlert(true)
        getOnePokemon(props.match.params.name)
        // eslint-disable-next-line
    }, [alertmsg])

    if (!pokemon) return <Container><Typography>Loading Pokemon...</Typography></Container>

    if (pokemon) {

        const { name, height, weight, sprites, types, forms, abilities, moves } = pokemon

        let newHeight, newWeight
        
                if (weight >= 10) {
                    newWeight = `${weight / 10} kg`
                } else {
                    newWeight = `${weight * 100} gr`
                }

        if (height >= 10) {
            newHeight = `${height / 10} m`
        } else {
            newHeight = `${height * 10} cm`
        }
            
        return (
            <Container>
                {alert && <AlertMsg msg={alertmsg}/>}
                <section style={{display: 'flex', marginBottom: '20px'}}>
                    <Avatar alt={name} src={sprites.front_shiny} style={{ height: '100px', width: '120px', marginRight: '10px' }}/>
                    <div style={{width: '100%', alignItems: 'flex-end'}}>
                        <Typography variant="h3">{name.charAt(0).toUpperCase() + name.slice(1)}</Typography>
                        <hr />
                    </div>
                </section>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography variant="h5">Size</Typography>
                        <hr />
                        <Typography variant="subtitle1">Weight: {newWeight}</Typography>
                        <Typography variant="subtitle1">Height: {newHeight}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography variant="h5">{types.length > 1 ? "Types" : "Type"}</Typography>
                        <hr />
                        {types.map((elm, idx) => <Typography key={idx} variant="subtitle1">{elm.type.name.charAt(0).toUpperCase() + elm.type.name.slice(1)}</Typography>)}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography variant="h5">{forms.length > 1 ? "Forms" : "Form"}</Typography>
                        <hr />
                        {forms.map((elm, idx) => <Typography key={idx} variant="subtitle1">{elm.name.charAt(0).toUpperCase() + elm.name.slice(1)}</Typography>)}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Typography variant="h5">{abilities.length > 1 ? "Abilities" : "Abilitiy"}</Typography>
                        <hr />
                        {abilities.map((elm, idx) => <Typography key={idx} variant="subtitle1">{elm.ability.name.charAt(0).toUpperCase() + elm.ability.name.slice(1)} | {elm.is_hidden ? "Hidden ability" : "Visible ability"}</Typography>)}
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={12}>
                        <Typography variant="h5">{moves.length > 1 ? "Moves" : "Move"}</Typography>
                        <hr />
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {moves.map((elm, idx) => <Typography key={idx} variant="subtitle1" style={{paddingRight: '20px'}}>{elm.move.name.charAt(0).toUpperCase() + elm.move.name.slice(1)}</Typography>)}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default PokemonDetails