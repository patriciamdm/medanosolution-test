import React, { useReducer } from 'react'

import ExtrasContext from './extrasContext.js'
import ExtrasReducer from './extrasReducer.js'

import { GET_CONTESTS, API_ERROR } from '../../types'

import apiHandler from '../../services/api.service.js'


const ExtrasState = props => {

    const initialState = {
        contests: [],
        alertmsg: null
    }

    const [state, dispatch] = useReducer(ExtrasReducer, initialState)

    const getContests = async () => {
        const prevCont = initialState.contests
            
        try {
            const res1 = await apiHandler.get('contest-type/1')
            const res2 = await apiHandler.get('contest-type/2')
            const res3 = await apiHandler.get('contest-type/3')
            const res4 = await apiHandler.get('contest-type/4')
            const res5 = await apiHandler.get('contest-type/5')
            dispatch({ type: GET_CONTESTS, payload: [...prevCont, res1.data, res2.data, res3.data, res4.data, res5.data] })
        } catch (err) {
            const alert = { msg: err.response.data.msg }
            dispatch({ type: API_ERROR, payload: alert })
        }
    }


    return (
        <ExtrasContext.Provider value={{
            contests: state.contests, alertmsg: state.alertmsg,
            getContests
        }}>
            {props.children}
        </ExtrasContext.Provider>
    )
}

export default ExtrasState