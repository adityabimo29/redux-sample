

const initialState = {
    counter : 0,
    results:[{id:0,val:5}]
}


const reducer  =  (state = initialState,action) => {

    switch (action.type) {
        case "INCREMENT":
            
            return {
                ...state,
                counter: state.counter + 1,
            }
    
        case "STORED":
            return {
                ...state,
                results: state.results.concat({id:new Date(),val:state.counter})
            }

        case "DELETED":
            const newData = state.results.filter(data => data.id !== action.payload)
            return {
                ...state,
                results:newData
            }
        default:
            return state
            
    }

}

export default reducer;