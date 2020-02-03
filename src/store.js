import {createStore,applyMiddleware,combineReducers} from 'redux';
import github from './store/github.reducer';
import counter from './store/reducer';
import todos from './store/todos.reducer';
import thunk from 'redux-thunk';


export default createStore(
    combineReducers({counter,github,todos}),
    applyMiddleware(thunk)
);