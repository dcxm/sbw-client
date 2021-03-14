import { SET_OPENABLE } from "../actions/types";

const initialState = {
    header: {
        open: true
    },
    editDialog: {
        item: {},
        open: false
    },
    deletePrompt: {
        item: {},
        open: false
    },
    addItemDialog: {
        open: false
    },
    summaryReaderDialog: {
        open: false,
        item: {}
    }
}

const openables = (state = initialState, action) => {
    switch(action.type) {
        case SET_OPENABLE:
            let newState = {
                ...state, 
                [action.payload.field]: {
                    ...state[action.payload.field],
                    open: !state[action.payload.field].open
                }
            }
            if (action.payload.item) newState[action.payload.field].item = action.payload.item
            return newState
        default:
            return state
    }
}

export default openables