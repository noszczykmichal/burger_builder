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