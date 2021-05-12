import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
//import { Link } from 'react-router-dom';

import PokemonCard from './pokemon-card'

const PokemonsList = () => {

    const [pokemons, setPokemons] = useState([
    {
      "name": "unown",
      "url": "https://pokeapi.co/api/v2/pokemon/201/"
    },
    {
      "name": "wobbuffet",
      "url": "https://pokeapi.co/api/v2/pokemon/202/"
    },
    {
      "name": "girafarig",
      "url": "https://pokeapi.co/api/v2/pokemon/203/"
    },
    {
      "name": "pineco",
      "url": "https://pokeapi.co/api/v2/pokemon/204/"
    },
    {
      "name": "forretress",
      "url": "https://pokeapi.co/api/v2/pokemon/205/"
    }])

    return (
        <Container>
            <Grid container spacing={3}>
                {pokemons.map((elm, idx) => <PokemonCard key={idx} info={elm}/>)}
            </Grid>
        </Container>
    )
}

export default PokemonsList