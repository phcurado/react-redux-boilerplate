import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticateUser } from '../actions/Authenticate';

class LoginScreen extends Component {
    render() {
        return (
            <button onClick={() => this.props.authenticateUser('myusername', 'mypassword')}>
                Login
            </button>
        );
    }
}

function mapStateToProps(state) {
    return {
        //username: state.username
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ authenticateUser }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);
