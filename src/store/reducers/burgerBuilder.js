import * as actionTypes from '../actions/actionTypes';

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
            let addPrice = (state.totalPrice + INGREDIENT_PRICES[action.ingredientName]).toFixed(2);
            addPrice = Number(addPrice);

            return {
                ...state,//copying the old state
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,//adding the new count of the given ingredient
                },
                totalPrice: addPrice//recalculating the totalPrice
            };

        case actionTypes.REMOVE_INGREDIENT:
            let removePrice = (state.totalPrice - INGREDIENT_PRICES[action.ingredientName]).toFixed(2);
            removePrice = Number(removePrice);
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: removePrice
            };

        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ings.salad,
                    bacon: action.ings.bacon,
                    cheese: action.ings.cheese,
                    meat: action.ings.meat
                },
                totalPrice: 4,
                error: false
            };

        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };

        default:
            return state;
    }
};

export default reducer;