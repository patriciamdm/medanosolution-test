import { GET_CONTESTS, API_ERROR } from '../../types'

export default (state, action) => {
    switch (action.type) {
        case GET_CONTESTS:
            return { ...state, contests: action.payload }
        case API_ERROR:
            return { ...state, alertmsg: action.payload }
        default:
            return state
    }
}