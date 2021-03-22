import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    

    render() {
        let orders = <Spinner />;

        if (!this.props.loading) {
            orders = this.props.orders.map(order => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} 
                    onButtonClick={()=>this.props.onDeleteOrder(order.id, this.props.token, this.props.userId)}/>
            ))
        };

        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {//passing the token to the action creators so that it can be passed in the request; 
        //thanks to that the permission to read and write in the database is granted
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
        onDeleteOrder: (id, token, userId)=> dispatch(actions.deleteOrder(id, token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));