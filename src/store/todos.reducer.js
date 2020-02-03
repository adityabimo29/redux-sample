const initialState = {
    datas:[]
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                datas:state.datas.concat({id:new Date(),text:action.payload.text})
                
            }
    
        case "UPDATED":
            return {
                ...state,
                results: state.results.concat({id:new Date(),val:state.counter})
            }

        case "DELETED":
            const newData = state.datas.filter(list => list.id !== action.payload.id)
            return {
                ...state,
                results:newData
            }
        default:
            return state
            
    }
}

export default reducer;