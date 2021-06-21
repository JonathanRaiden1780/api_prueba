import api from "./api";

export const Action_Types  = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    FETCH_ALL: 'FETCH_ALL'
}

export const fetchAllv=() => dispatch => {
    api.area().fetchAll()
    .then(
        response =>{
            dispatch	({
                type:Action_Types.FETCH_ALL,
                payload: response.data
            })
        })
    .catch(err => console.log(err))   
}
export const create = (data, onSuccess) => dispatch => {
    api.area().create(data)
        .then(res => {
            dispatch({
                type: Action_Types.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const update = (id, data, onSuccess) => dispatch => {
    api.dCandidate().update(id, data)
        .then(res => {
            dispatch({
                type: Action_Types.UPDATE,
                payload: { id, ...data }
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}

export const Delete = (id, onSuccess) => dispatch => {
    api.dCandidate().delete(id)
        .then(res => {
            dispatch({
                type: Action_Types.DELETE,
                payload: id
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}