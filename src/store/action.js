export const INCREMENT = "INCREMENT";
export const STORED = "STORED";
export const DELETED = "DELETED";

export const addInc = () => {
    return {
        type:INCREMENT
    }
}

export const storedRes = () => {
    return {
        type:STORED
    }
}

export const deleteStore = id => {
    return {
        type:DELETED,
        payload:id
    }
}