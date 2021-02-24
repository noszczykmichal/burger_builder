import * as actionTypes from '../actions/actionTypes';

const initialState = {
       loading: false
}

const orderReducer = (state = initialState, action) => {
       switch (action.type) {
              case actionTypes.TRYING_TO_ORDER:
                     return{
                            ...state,
                            loading: true
                     };
              case actionTypes.PURCHASE_BURGER_SUCCESS:
                     return{
                            ...state,
                            loading: false
                     };
              case actionTypes.PURCHASE_BURGER_FAIL:
                     return{
                            ...state,
                            loading: false
                     };
              default:
                     return state; 
       }
}



export default orderReducer;