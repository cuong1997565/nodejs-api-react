import * as Types from './../constants/ActionType';
var initialState = [];
var findIndex = (persons, id) => {
    var result = -1;
    persons.forEach((person, index) =>{
        if(person._id === id) {
            result = index;
        }
    })
    return result; 
}
const persons = (state = initialState, action) => {
    var { persons, id } = action;
    var index = -1;
    switch(action.type) {
        case Types.FETCH_PERSON:
            state = action.persons.persons;
            return [...state];
        case Types.ADD_PERSON:
            state.unshift(persons);
            return [...state];
        case Types.UPDATE_PERSON:
            index = findIndex(state, persons._id);
            state[index] = persons;
            return [...state];
        case Types.DELETE_PERSON:
            index = findIndex(state, id);
            state.splice(index,1);
            return [...state];
        default:
            return [...state];
    }
}

export default persons;