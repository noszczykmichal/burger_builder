import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

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

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(response => {
                let currentOrders = response.data;
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

export const deleteOrderSuccess = () => {
    return {
        type: actionTypes.DELETE_ORDER_SUCCESS,
    };
};

export const deleteOrderFail = (error) => {
    return {
        type: actionTypes.DELETE_ORDER_FAIL,
        error: error
    };
};

export const deleteOrder = (id, token, userId) => {
    return dispatch => {
        const deletedOrder = {};
        axios.put('orders/' + id + '.json?auth=' + token, deletedOrder)//replacing the order to be deleted with the empty object
            .then(response => {
                dispatch(deleteOrderSuccess());
                dispatch(fetchOrders(token, userId));
            })
            .catch(error => {
                dispatch(deleteOrderFail(error));
            })
    };
};

export const clearOrdersAndPurchased = () => {
    return {
        type: actionTypes.CLEAR_ORDERS_AND_PURCHASED
    };
};