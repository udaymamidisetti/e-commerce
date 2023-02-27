import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  checkout: [],
  address: {},
  checkoutLoading: false,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    //   Add Cart
    case ActionTypes.ADD_CHECKOUT:
      return { ...state, loading: true };
    case ActionTypes.ADD_CHECKOUT_SUCCESS:
      return { ...state, loading: false, checkout: action.payload };

    case ActionTypes.ADD_CHECKOUT_QUANTITY_SUCCESS:
      return { ...state, loading: false, quantity: action.payload };

    case ActionTypes.ADD_CHECKOUT_ADDRESS_SUCCESS:
      return { ...state, loading: false, address: action.payload };

    case ActionTypes.ADD_CHECKOUT_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.USER_LOG_OUT:
      return { ...initialState };

    case ActionTypes.ADD_CHECKOUT_CART:
      return { ...state, loading: true };
    case ActionTypes.ADD_CHECKOUT_CART_SUCCESS:
      return { ...state, loading: false, checkout: action.payload };
    case ActionTypes.ADD_CHECKOUT_CART_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.DELETE_CHECKOUT:
      return { ...state, loading: true };
    case ActionTypes.DELETE_CHECKOUT_SUCCESS:
      return { ...state, loading: false, checkout: action.payload };
    case ActionTypes.DELETE_CHECKOUT_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.CHANGE_CART_QUANTITY:
      return { ...state, loading: true };
    case ActionTypes.CHANGE_CART_QUANTITY_SUCCESS:
      return { ...state, loading: false, checkout: action.payload };
    case ActionTypes.CHANGE_CART_QUANTITY_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default checkoutReducer;
