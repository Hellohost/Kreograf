import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {itemReducer} from './reducers/item'

const rootReducer = combineReducers({
    item: itemReducer
})

export default createStore(rootReducer,applyMiddleware(thunk))