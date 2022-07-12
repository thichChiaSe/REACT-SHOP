import { createStore, combineReducers } from 'redux'
import authReducer from './authReducer.jsx'
import ProductReducer from './productReducer.jsx'

const store = createStore(combineReducers({
    auth: authReducer,
    product:ProductReducer
}))

export default store