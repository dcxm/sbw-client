import {ADD_ITEM, GET_ITEMS, UPDATE_ITEM, DELETE_ITEM} from '../actions/types'

const items = (state = [], action) => {
    const stateClone = Array.from(state)
    switch(action.type) {
        case ADD_ITEM: 
            return [action.payload, ...state]
        case GET_ITEMS:
            return [...action.payload]
        case UPDATE_ITEM:
            const updateItem = state.findIndex((item) => item._id === action.payload._id)
            stateClone[updateItem] = {...stateClone[updateItem], ...action.payload}
            return stateClone
        case DELETE_ITEM: 
            const deletedItem = state.findIndex((item) => item._id === action.payload)
            stateClone.splice(deletedItem, deletedItem + 1)
            return stateClone
        default:
            return state
    }
}

export default items