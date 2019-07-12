import * as Types from './../constants/ActionType';
var initialState = {};

const itemEditing = (state = initialState, action) => {
    switch(action.type) {
        case Types.EDIT_PERSON:
            return action.persons;
        default:
            return state;
    }
}
export default itemEditing;