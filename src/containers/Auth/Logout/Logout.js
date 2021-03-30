import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as actions from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount() {
        this.props.onLogoutCleanUp(); //this action is send to set purchased prop to 'false' and to clear orders that are stored in the store, without this additional action the user that logges in after the previous user ordered his burger can't proceed with the order; the user that starts to create burger without previous authentication, clicks button to authenticate, then he is redirected to the Auth container; after successful authentication he is redirected to the Checkout container and then to proceed with the order he has to click on the button 'Continue' but without the above action when the Contact Data component is render and gets the value of the prop 'purchased' set to true the user is immediately redirected to the homepage without the possiblitity to place actual order.

        this.props.onLogout();
    }

    render() {
        return <Redirect to="/" />;

    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout()),
        onLogoutCleanUp: () => dispatch(actions.clearOrdersAndPurchased())
    };
};

export default connect(null, mapDispatchToProps)(Logout);