import {combineReducers} from 'redux'

import user from './reducers/user'

const items = (state = [], action) => {
    switch(action.type) {
        case 'GET_ITEMS':
            return {...state, items: action.payload}
        default:
            return state
    }
}

const reducers = combineReducers({
    items,
    user
})

export {
    // itemsGetAction,
    items
}
export default reducers