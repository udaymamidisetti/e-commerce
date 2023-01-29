import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  orderLoading: false,
  order: {},
  allOrders: [],
  payment: {}
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get Cart
    case ActionTypes.GET_ORDER:
      return { ...state, loading: true };
    case ActionTypes.GET_ORDER_SUCCESS:
      return { ...state, order: action.payload.order, payment: action.payload.payment, loading: false };
    case ActionTypes.GET_ORDER_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.USER_LOG_OUT:
      return { ...state, order: {}, allOrders: [], loading: false };

    // Get All Cart
    case ActionTypes.GET_ORDER_ALL_SUCCESS:
      return { ...state, allOrders: action.payload, loading: false };

    //   Add Cart
    case ActionTypes.ADD_ORDER:
      return { ...state, loading: true };
    case ActionTypes.ADD_ORDER_SUCCESS:
      return { ...state, loading: false, order: action.payload };
    case ActionTypes.ADD_ORDER_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default orderReducer;
