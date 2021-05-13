import React, { useReducer } from 'react'

import PokemonContext from './pokemonContext'
import PokemonReducer from './pokemonReducer'

import { GET_ONEPOKEMON, GET_POKEMONS, API_ERROR, MOVE_PAGE } from '../../types'

import apiHandler from '../../services/api.service'


const PokemonState = props => {

    const initialState = {
        pokemons: [],
        pokemon: null,
        alertmsg: null,
        page: 'pokemon?offset=0&limit=60',
        previous: null,
        next: null
    }

    const [state, dispatch] = useReducer(PokemonReducer, initialState)

    const getPokemons = async () => {
        try {
            const response = await apiHandler.get(state.page)
            dispatch({ type: GET_POKEMONS, payload: response.data })
        } catch (err) {
            const alert = { msg: err.response.data.msg}
            dispatch({ type: API_ERROR, payload: alert })
        }
    }

    const getOnePokemon = async (id) => {
        try {
            const response = await apiHandler.get(`pokemon/${id}`)
            dispatch({type: GET_ONEPOKEMON, payload: response.data})
        } catch (err) {
            const alert = { msg: err.response.data.msg}
            dispatch({ type: API_ERROR, payload: alert })
        }
    }

    const changePage = async (page) => {
        const movepage = page.slice(26)
        dispatch({ MOVE_PAGE, payload: movepage })
        getPokemons()
    } 

    return (
        <PokemonContext.Provider value={{
            pokemons: state.pokemons, pokemon: state.pokemon, alertmsg: state.alertmsg, next: state.next, previous: state.previous,
            getPokemons, getOnePokemon, changePage
        }}>
            {props.children}
        </PokemonContext.Provider>
    )
}

export default PokemonState