import * as actionType from '../actions/actionTypes'
import { updatedObject } from '../utility'


const initialState = {

    result: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        //Using Utilty
        case actionType.STORE: return updatedObject(state, { result: state.result.concat({ id: new Date(), value: action.result }) })


        //Without Utilty
        case actionType.DELETE: {

            const updatedArray = state.result.filter(value => value.id !== action.id)
            return {

                ...state,
                result: updatedArray
            }
        }

    }
    return state


}

export default reducer