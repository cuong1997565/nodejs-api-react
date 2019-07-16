import * as Types from './../constants/ActionType';
var initialState = {};

const itemEdittingAcount = (state = initialState, action) =>{
    switch(action.type) {
        case Types.EDIT_ACOUNT :
            return action.acounts.acount;
        default: 
            return state;
    }
}

export default itemEdittingAcount;