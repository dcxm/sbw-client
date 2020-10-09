import {STORE_USER} from './types'

const storeUser = (payload) => {
    return {
        type: STORE_USER,
        payload
    }
}

export {
    storeUser
}