import React, { Component } from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        this.props.onFetchOrdersStart();
        this.props.onFetchOrders();
        // axios.get('/orders.json')
        //     .then(response => {
        //         this.setState({ loading: false });

        //         console.log('response.data: ', response.data)
        //         const fetchedOrders = [];

        //         for (let key in response.data) {
        //             // console.log(response.data[key]);

        //             fetchedOrders.push({
        //                 ...response.data[key],
        //                 id: key
        //             });
        //         }
        //         console.log('fetchedOrders: ', fetchedOrders);

        //         this.setState({ loading: false, orders: fetchedOrders });
        //     })
        //     .catch(error => {
        //         this.setState({ loading: false });
        //     });

    }

    render() {

        return (
            <div>
                {this.props.orders.map(order =>
                    <Order key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrdersStart: ()=>dispatch(actions.fetchOrdersStart()),
        onFetchOrders: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));