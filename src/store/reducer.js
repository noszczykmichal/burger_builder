import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4,
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
            return {
                ...state,//copying the old state
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,//adding the new count of the given ingredient
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]//recalculating the totalPrice
            };

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        // this.updatePurchaseState(updatedIngredients);
        default:
            return state;
    }
};

export default reducer


            // addIngredientHandler = (type) => {
            //     const oldCount = this.state.ingredients[type];
            //     const updatedCount = oldCount + 1;

            //     const updatedIngredients = {
            //         ...this.state.ingredients
            //     }

            //     updatedIngredients[type] = updatedCount;

            //     const priceAddition = INGREDIENT_PRICES[type];
            //     const oldPrice = this.state.totalPrice;
            //     const newPrice = oldPrice + priceAddition;

            //     this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

            //     this.updatePurchaseState(updatedIngredients);
            // }

            // removeIngredientHandler = (type) => {
    //     const oldCount = this.state.ingredients[type];

    //     if (oldCount <= 0) {
    //         return;
    //     }

    //     const updatedCount = oldCount - 1;
    //     const priceDeduction = INGREDIENT_PRICES[type];
    //     const oldPrice = this.state.totalPrice;

    //     const newPrice = oldPrice - priceDeduction;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     }

    //     updatedIngredients[type] = updatedCount;

    //     this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    //     this.updatePurchaseState(updatedIngredients);
    // }