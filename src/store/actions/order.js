import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';


export const purchaseSucceeded = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS
    };
};

export const purchaseFailed = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL
    };
};


export const purchaseBurgerSuccess = (order) => {
    return dispatch => {
        axios.post('/orders.json', order)
            .then(response => {
                // this.setState({ loading: false });
                // this.props.history.push('/');
                dispatch(purchaseSucceeded());
            })
            .catch(error => {
                // this.setState({ loading: false });
                dispatch(purchaseFailed());
            });
    };
};

export const tryIngToOrder = () => {
    return {
        type: actionTypes.TRYING_TO_ORDER
    };
};