import {combineReducers} from 'redux'

import user from './reducers/user'
import items from './reducers/items'
import openables from './reducers/openables'


const reducers = combineReducers({
    items,
    openables,
    user
})

export {
    items
}
export default reducers