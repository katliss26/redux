import { createStore, applyMiddleware } from 'redux'

const  reducer = (state, action) =>{
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: state.cart.concat(action.product)
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== action.product.id)
            }
    }
    return state;
}
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

export default createStore(reducer,{cart:[]}, applyMiddleware(logger));
