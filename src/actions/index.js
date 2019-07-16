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


// acount 
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


export const actAddAcountRequest = (acount) => {
    return (dispatch) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return callApi('acount', 'POST', acount, config).then(res => {
            dispatch(actAddAcount(res.data));
        });
    }
}

export const actAddAcount = (acount) => {
    return {
        type : Types.ADD_ACOUNT,
        acount
    }
}



export const actEditAcountRequest = (id) => {
    return (dispatch) => {
        return callApi(`acount/${id}`,'GET',null).then(res => {
            dispatch(actGetAcount(res.data));
        });
    }
}

export const actGetAcount = (acounts) => {
    return {
        type: Types.EDIT_ACOUNT,
        acounts
    }
}

export const actUpdateAcountRequest = (acount)  =>{
    return (dispatch) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        var id = acount.get('_id');
        return callApi(`acount/${id}`,'PATCH',acount, config).then(res => {
            dispatch(actUpdateAcount(res.data.acount));
        })
    }
}

export const actUpdateAcount = (acount) => {
    return {
        type: Types.UPDATE_ACOUNT,
        acount
    }
}


export const actDeleteAcountRequest = (id) => {
    console.log(id);
    return (dispatch) => {
        return callApi(`acount/${id}`,'DELETE',null).then(res => {
            dispatch(actDeleteAcount(id));
        })
    }
}

export const actDeleteAcount = (id) => {
    return {
        type: Types.DELETE_ACOUNT, 
        id
    }
}