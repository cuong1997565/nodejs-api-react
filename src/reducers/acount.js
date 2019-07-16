import * as Types from './../constants/ActionType';
var initialState = [];
const acounts = (state = initialState, action) => {
    var { acount } = action;
    switch(action.type) {
        case Types.FETCH_ACOUNT:
            state = action.acount.acount;
            return [...state];
        case Types.ADD_ACOUNT:
            console.log(acount);
            state.unshift(acount);
            return [...state];
        default:
            return [...state];
    }
}

export default acounts;