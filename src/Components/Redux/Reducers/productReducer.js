import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  productLoading: false,
  products: [],
  productDetails: {},
  slider: 10000,
  search: ""
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // get course
    case ActionTypes.GET_PRODUCT:
      return { ...state, loading: true };
    case ActionTypes.GET_PRODUCT_ALL_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case ActionTypes.GET_PRODUCT_SUCCESS:
      return { ...state, productDetails: action.payload, loading: false };

    case ActionTypes.GET_PRODUCT_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.SET_SLIDER_SUCCESS:
      return { ...state, slider: action.payload, loading: false };
    case ActionTypes.SET_SEARCH_SUCCESS:
      return { ...state, search: action.payload, loading: false };
    default:
      return state;
  }
};



export default productReducer;
