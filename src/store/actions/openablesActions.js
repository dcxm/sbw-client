import { SET_OPENABLE } from "./types";

const setOpenableAction = (payload) => {
    return {
        type: SET_OPENABLE,
        payload
    }
}

export { setOpenableAction }