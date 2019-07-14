import * as Types from './../constants/ActionType';
var initialState = [];
const acounts = (state = initialState, action) => {
    switch(action.type) {
        case Types.FETCH_ACOUNT:
            state = action.acount.acount;
            return [...state];
        default:
            return [...state];
    }
}

export default acounts;