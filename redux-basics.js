const redux = require('redux')



const initialState = {
    counter: 0
}


const rootReducer = (state = initialState, action) => {

    if (action.type === 'INC_COUNT') {

        return {
            ...state,
            counter: state.counter + 2
        }
    }

    if (action.type === 'ADD_COUNT') {

        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state
}


const store = redux.createStore(rootReducer)

console.log(store.getState());


store.subscribe(() => {

    console.log("Subscribed====", store.getState());
})


store.dispatch({ type: "INC_COUNT" })
store.dispatch({ type: "ADD_COUNT", value: 15 })


console.log(store.getState());
