export const ADD = "ADD";
export const UPDATED = "UPDATED";
export const DELETED = "DELETED";

export const addList = (data) => {
    return {
        type:ADD,
        payload:data
    }
}

export const updateList = (data) => {
    return {
        type:UPDATED,
        payload:data
    }
}

export const deleteList = id => {
    return {
        type:DELETED,
        payload:id
    }
}