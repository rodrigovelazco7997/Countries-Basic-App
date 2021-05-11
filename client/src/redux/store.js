import { createStore, compose, applyMiddleware } from "redux"
import {appReducer as RootReducer}from './reducers'
import thunk from 'redux-thunk' 



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    RootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)





