import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  cart: [],
  cartLoading: false,
  itemCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get Cart
    case ActionTypes.GET_CART:
      return { ...state, loading: true };
    case ActionTypes.GET_CART_SUCCESS:
      return { ...state, cart: action.payload.cart, itemCount: action.payload.count, loading: false };
    case ActionTypes.GET_CART_FAILURE:
      return { ...state, loading: false };

    //   Add Cart
    case ActionTypes.ADD_CART:
      return { ...state, loading: true };
    case ActionTypes.ADD_CART_SUCCESS:
      console.log(action.payload, "ADD_CART_SUCCESS");
      return { ...state, loading: false, cart: action.payload.cart, itemCount: action.payload.count };
    case ActionTypes.ADD_CART_FAILURE:
      return { ...state, loading: false };

    //   Item Count
    case ActionTypes.DELETE_CART_SUCCESS:
      // let temp = state.cart.course
      // let da = temp.filter((t) => t._id !== action.payload)
      return { ...state, cart: state.cart.filter(({ product }) => product._id !== action.payload), itemCount: state.itemCount - 1 }
    // return { ...state, cart: { ...state.cart, course: [...da] }, itemCount: state.itemCount - 1 }

    default:
      return state;
  }
};

export default cartReducer;
