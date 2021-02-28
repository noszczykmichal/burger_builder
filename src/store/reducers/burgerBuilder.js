import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 };
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            let addPrice = (state.totalPrice + INGREDIENT_PRICES[action.ingredientName]).toFixed(2);
            addPrice = Number(addPrice);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: addPrice
            }

            return updateObject(state, updatedState);

        case actionTypes.REMOVE_INGREDIENT:
            const updatedIng = { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 };
            const updatedIngs = updateObject(state.ingredients, updatedIng);
            let subtractPrice = (state.totalPrice + INGREDIENT_PRICES[action.ingredientName]).toFixed(2);
            addPrice = Number(subtractPrice);
            const updatedSt = {
                ingredients: updatedIngs,
                totalPrice: subtractPrice
            }

            return updateObject(state, updatedSt);

        case actionTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: {
                    salad: action.ings.salad,
                    bacon: action.ings.bacon,
                    cheese: action.ings.cheese,
                    meat: action.ings.meat
                },
                totalPrice: 4,
                error: false
            });

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });

        default:
            return state;
    }
};

export default reducer;