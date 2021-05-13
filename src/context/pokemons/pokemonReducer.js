import { GET_POKEMONS, GET_ONEPOKEMON, API_ERROR, MOVE_PAGE } from '../../types'

export default (state, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return { ...state, pokemons: action.payload.results, previous: action.payload.previous, next: action.payload.next, alertmsg: null }
        case GET_ONEPOKEMON:
            return {...state, pokemon: action.payload, alertmsg: null }
        case API_ERROR:
            return { ...state, alertmsg: action.payload }
        case MOVE_PAGE:
            return { ...state, page: action.payload, alertmsg: null }
        default:
            return state
    }
}