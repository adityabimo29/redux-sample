import React from 'react';
import {connect} from 'react-redux';
import{addInc,storedRes,deleteStore} from '../store/action';

function Counter(props) {
    return (
        <div>
            <p>Counter : {props.ctr}</p>
            <button onClick={props.addInc}>CLICK</button>
            <button onClick={props.storedRes}>CLICKY</button>
            <ul>
                { props.stored.map( (item) =>  { 
                   return ( <li onClick={() => props.deleteStore(item.id)} key={item.id} >{item.val}</li>)
                }) }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter.counter,
        stored: state.counter.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addInc: () => dispatch(addInc()),
        storedRes:() => dispatch(storedRes()),
        deleteStore:(id) => dispatch(deleteStore(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);