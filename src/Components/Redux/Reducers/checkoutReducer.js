import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  checkout: [],
  quantity: {},
  address: {},
  checkoutLoading: false,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    //   Add Cart
    case ActionTypes.ADD_CHECKOUT:
      return { ...state, loading: true };
    case ActionTypes.ADD_CHECKOUT_SUCCESS:
      let temp = {};
      action.payload.map((product) => {
        temp[product._id] = 1;
      });
      return { ...state, loading: false, checkout: action.payload, quantity: temp };

    case ActionTypes.ADD_CHECKOUT_QUANTITY_SUCCESS:
      return { ...state, loading: false, quantity: action.payload };

    case ActionTypes.ADD_CHECKOUT_ADDRESS_SUCCESS:
      return { ...state, loading: false, address: action.payload };

    case ActionTypes.ADD_CHECKOUT_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default checkoutReducer;
