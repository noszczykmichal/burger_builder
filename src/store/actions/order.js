import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


let currentOrders = null;


export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());

        axios.post('/orders.json?auth=' + token, orderData)
            .then(response => {

                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {

                dispatch(purchaseBurgerFail(error));
            });
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders) => {

    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token) => {
    return dispatch => {

        dispatch(fetchOrdersStart());
        axios.get('/orders.json?auth=' + token)
            .then(response => {
                currentOrders = response.data; //response.data saved globally for the future use in the deleteOrder action creator
                // console.log(currentOrders);
                const fetchedOrders = [];

                for (let key in currentOrders) {
                    // console.log(response.data[key]);

                    fetchedOrders.push({
                        ...currentOrders[key],
                        id: key
                    });
                }
                // console.log('fetchedOrders: ', fetchedOrders);

                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(error => {
                dispatch(fetchOrdersFail(error));
            });
    };
};

export const deleteOrderSuccess = (updatedOrders) => {
    return {
        type: actionTypes.DELETE_ORDER_SUCCESS,
        orders: updatedOrders
    };
};

export const deleteOrderFail = (error) => {
    return {
        type: actionTypes.DELETE_ORDER_FAIL,
        error: error
    };
};

export const deleteOrder = (id, token) => {

    for (let key in currentOrders) {//after deleting the order that was send through the action the updated 'currentOrders' is send with axios to the database
        if (key === id) {
            delete currentOrders[key];
        }
    }

    const updatedOrders = [];

    for (let key in currentOrders) { // in the for loop the orders from 'currentOrders' are pushed to the array updatedOrders; later they will be passed through deleteOrderSuccess action to update the orders saved in the store

        updatedOrders.push({
            ...currentOrders[key],
            id: key
        })
    }
    // console.log('allOrders: ', allOrders)
    // console.log('updatedOrders: ', updatedOrders)

    return dispatch => {
        axios.put('/orders.json?auth=' + token, currentOrders)
            .then(response => {

                dispatch(deleteOrderSuccess(updatedOrders));
            })
            .catch(error => {

                dispatch(deleteOrderFail(error));
            });
    };
};