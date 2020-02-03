const redux = require('redux');
const createStore = redux.createStore;

//
const initialState = {
    counter :0,
}

const rootReducer = (state = initialState , action) => {

    switch (action.type) {
        case "INCREMENT":
            
            return {
                ...state,
                counter: state.counter + 1
            }

        case "ADD" :
            return {
                ...state,
                counter: state.counter + action.value
            }
    
        default:
            return state;
    }

    
}

// store

const store =  createStore(rootReducer);
console.log(store.getState());

//subscribing update

store.subscribe(()=>{
    console.log('updated',store.getState());
})

// dispatching action
store.dispatch({type:"INCREMENT"});
store.dispatch({type:"ADD",value:5});

console.log(store.getState());

