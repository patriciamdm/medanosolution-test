import React, { useState, useContext, useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab'

//import { Link } from 'react-router-dom';

import PokemonContext from '../../../context/pokemons/pokemonContext'

import PokemonCard from './Pokemon-card'

const PokemonsList = () => {

  const pokemonContext = useContext(PokemonContext)
  const { pokemons, alertmsg, getPokemons } = pokemonContext

  const [alert, showAlert] = useState(false)
  
  useEffect(() => {
    if (alertmsg) showAlert(true)
    getPokemons()
    // eslint-disable-next-line
  }, [alertmsg])

  if (pokemons.length === 0) return <Container><Typography>Loading Pokemon...</Typography></Container>

  return (
    <Container>
      {alert
        &&
        <Alert severity="error" style={{marginBottom: '20px'}}>
          <AlertTitle>Error</AlertTitle>
          {alertmsg}
        </Alert>}
        <Grid container spacing={3}>
            {pokemons.map((elm, idx) => <PokemonCard key={idx} info={elm}/>)}
        </Grid>
    </Container>
  )
}

export default PokemonsList