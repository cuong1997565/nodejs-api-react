import * as Types from './../constants/ActionType';
import callApi from './../utils/apiCaller';
export const actFetchPersonsRequest = () => {
    return (dispatch) => {
        return callApi('persons', 'GET', null).then(res => {
            dispatch(actFetchPerson(res.data));
        });
    }
}

export const actFetchPerson = (persons) => {
    return {
        type : Types.FETCH_PERSON,
        persons
    }
}

export const actFetchAcountsRequest = () => {
    return (dispatch) => {
        return callApi('acount', 'GET', null).then(res => {
            dispatch(actFetchAcount(res.data));
        });
    }
}

export const actFetchAcount = (acount) => {
    return {
        type : Types.FETCH_ACOUNT,
        acount
    }
}

export const actAddPersonRequest = (persons) => {
    return (dispatch) => {
        return callApi('persons', 'POST', persons).then(res => {
            dispatch(actAddPerson(persons));
        });
    }
}

export const actAddPerson = (persons) => {
    return {
        type : Types.ADD_PERSON,
        persons
    }
}

export const actEditPersonRequest = (id) => {
    return (dispatch) => {
        return callApi(`persons/${id}`,'GET',null).then(res => {
            dispatch(actGetPerson(res.data));
        });
    }
}

export const actGetPerson = (persons) => {
    return {
        type: Types.EDIT_PERSON,
        persons
    }
}


export const actUpdatePersonRequest = (persons) => {
    return (dispatch) => {
        return callApi(`persons/${persons._id}`,'PATCH', persons).then(res => {
              dispatch(actUpdatePerson(persons));    
        })
    }
}

export const actUpdatePerson = (persons) => {
    return {
        type: Types.UPDATE_PERSON,
        persons
    }
}

export const actDeletePersonRequest = (id) => {
    return (dispatch) => {
        return callApi(`persons/${id}`,'DELETE',null).then(res => {
            dispatch(actDeletePerson(id));
        });
    }
}

export const actDeletePerson = (id) => {
    return {
        type: Types.DELETE_PERSON,
        id
    }
}