import React, { useState, useContext, useEffect } from 'react';
import { Container, Typography, Avatar } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'

//import { Link } from 'react-router-dom';

import PokemonContext from '../../../context/pokemons/pokemonContext'


const PokemonDetails = (props) => {

    const pokemonContext = useContext(PokemonContext)
    const { pokemon, alertmsg, getOnePokemon } = pokemonContext

    const [alert, showAlert] = useState(false)

    const pokeId = props.match.params.id

    useEffect(() => {
        if (alertmsg) showAlert(true)
        getOnePokemon(pokeId)
        // eslint-disable-next-line
    }, [alertmsg])

    if (!pokemon) return <Container><Typography>Loading Pokemon...</Typography></Container>

    return (
        <Container>
            {alert
                &&
                <Alert severity="error" style={{marginBottom: '20px'}}>
                    <AlertTitle>Error</AlertTitle>
                    {alertmsg}
                </Alert>}
            <div style={{display: 'flex'}}>
            <Avatar alt={pokemon.name} src={pokemon.sprites.front_shiny}/>
            <Typography variant="h3">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Typography>
            </div>
            <Typography variant="body2">Weight: {pokemon.weight}, Height: {pokemon.height}</Typography>
        </Container>
    )
}

export default PokemonDetails