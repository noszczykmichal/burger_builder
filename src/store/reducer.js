import * as actionTypes from './actions';

const initialState = {
    ingredients: null,
    totalPrice: 4,
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
            }

        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
            }
        
    }

return state;
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