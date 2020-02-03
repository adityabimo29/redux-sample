import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addList } from '../store/todos.action'

class Todos extends Component {

    state = {
        text:''
    }

    handleChange = (e) => {
        //console.log(e.target.value)
        this.setState({text:e.target.value})
    }

    render() {
        return (
            <div>
                <p>Todos</p>
                    <input type='text' name='list' onChange={this.handleChange} />
                    <button onClick={() =>this.props.addList({text:this.state.text})}>SUBMIT</button>
                
                <ul>
                    { this.props.dt.map( (item) =>  { 
                    return ( <li  key={item.id} >{item.text}</li>)
                    }) }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dt: state.todos.datas
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addList: (data) => dispatch(addList(data))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Todos);
