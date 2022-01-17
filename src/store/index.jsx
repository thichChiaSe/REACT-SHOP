import { createStore, combineReducers } from 'redux'
import authReducer from './authReducer.jsx'

const store = createStore(combineReducers({
    auth: authReducer,
    
}))

export default store