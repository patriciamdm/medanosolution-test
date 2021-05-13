import { GET_POKEMONS, GET_ONEPOKEMON, API_ERROR } from '../../types'

export default (state, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, pokemons: action.payload.results, previous: action.payload.previous, next: action.payload.next, alertmsg: null, pokemon: null }
        case GET_ONEPOKEMON:
            return {...state, pokemon: action.payload, alertmsg: null }
        case API_ERROR:
            return { ...state, alertmsg: action.payload }
        default:
            return state
    }
}