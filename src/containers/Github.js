import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../store/github.action';

class Github extends Component {

    componentDidMount = () => {
        this.props.fetchData()
    }

    render() {
        return (
            <div>
                <img src={this.props.github.avatar_url} alt="" />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        github: state.github.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Github)
