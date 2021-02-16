import reducersTask from './reducersTask'
import {combineReducers }from 'redux'

const rootReducer  = combineReducers (
    {reducersTask:reducersTask}
)
export default rootReducer;