import * as actionTypes from './actionTypes'


export const saveResult = (result) => {
    return {
        type: actionTypes.STORE,
        result: result
    }
}

export const store = (result) => {


    return (dispatch) => {
        setTimeout(() => {
            dispatch(saveResult(result))
        }, 2000)
    }


}


export const deleted = (id) => {

    return {
        type: actionTypes.DELETE,
        id: id
    }
}


