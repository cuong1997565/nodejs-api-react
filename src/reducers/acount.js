import * as Types from './../constants/ActionType';
var initialState = [];
var findIndex = (acount , id) => {
    var result = -1;
    acount.forEach((acunt, index) => {
        if(acunt._id === id) {
            result = index;
        }
    })
    return result;
}
const acounts = (state = initialState, action) => {
    var { acount, id } = action;
    var index = -1;
    switch(action.type) {
        case Types.FETCH_ACOUNT:
            state = action.acount.acount;
            return [...state];
        case Types.ADD_ACOUNT:
            state.unshift(acount.acount);
            return [...state];
        case Types.UPDATE_ACOUNT:
            console.log(acount._id);
            index = findIndex(state, acount._id);
            state[index] = acount;
            return [...state];
        case Types.DELETE_ACOUNT:
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        default:
            return [...state];
    }
}

export default acounts;