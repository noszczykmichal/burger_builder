import axios from '../../axios-orders'
import * as actionTypes from './actionTypes';

export const addIngredient = (ingredName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingredName
    };
};

export const removeIngredient = (ingredType) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingredType
    };
};

export const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ings: ingredients
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-builder-c365e-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    };
};
