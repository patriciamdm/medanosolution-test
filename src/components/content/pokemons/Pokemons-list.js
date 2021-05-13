import React, { useState, useContext, useEffect } from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

import PokemonContext from '../../../context/pokemons/pokemonContext.js'

import PokemonCard from './Pokemon-card.js'
import AlertMsg from '../../layout/Alert.js'
import SearchBar from '../../layout/Search-bar.js'
import Pager from '../../layout/Pager.js'


const PokemonsList = () => {

  const pokemonContext = useContext(PokemonContext)
  const { pokemons, alertmsg, getPokemons, changePage, next, previous, page } = pokemonContext

  const [filterPokemons, setFilterPokemons] = useState(pokemons)
  const [search, setSearch] = useState('')
  const [alert, showAlert] = useState(false)

  const searchBy = value => {
    const filtered = pokemons.filter(elm => elm.name.toLowerCase().includes(value.toLowerCase()))
    setFilterPokemons(filtered)
  } 
  
  useEffect(() => {
    if (alertmsg) showAlert(true)
    getPokemons()
    // eslint-disable-next-line
  }, [alertmsg, page])

  useEffect(() => {setFilterPokemons(pokemons)}, [pokemons])

  useEffect(() => {
    searchBy(search)
    // eslint-disable-next-line
  }, [search])

  if (pokemons.length === 0) return <Container><Typography>Loading Pokemon...</Typography></Container>

  return (
    <Container>
      {alert && <AlertMsg msg={alertmsg} />}
      <div style={{display: 'flex', marginBottom: '20px'}}>
        <SearchBar search={search} setSearch={setSearch} />
        <Pager changePage={changePage} next={next} previous={previous} page={page}/>
      </div>
      <Grid container spacing={3}>
          {filterPokemons.map((elm, idx) => <PokemonCard key={idx} info={elm}/>)}
      </Grid>
    </Container>
  )
}

export default PokemonsList