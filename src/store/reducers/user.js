import {STORE_USER} from '../actions/types'

const user = (state = {}, action) => {
    switch(action.type) {
        case STORE_USER :
            return {
                ...state,
                ...action.payload
            }
        default : 
            return state
    }
}

export default user