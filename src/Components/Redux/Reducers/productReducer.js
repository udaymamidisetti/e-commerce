import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  productLoading: false,
  reviewUserFlag: false,
  products: [],
  reviews: [],
  pagination: { pagesCount: 0, reviewCount: 0 },
  productDetails: {},
  productDetailsAttr: [],
  slider: 10000,
  search: ""
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // get product
    case ActionTypes.GET_PRODUCT:
      return { ...state, loading: true };
    case ActionTypes.GET_PRODUCT_ALL_SUCCESS:
      return { ...state, products: action.payload, loading: false };
    case ActionTypes.GET_PRODUCT_SUCCESS:
      return { ...state, productDetails: action.payload, loading: false };
    case ActionTypes.GET_PRODUCT_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.GET_PRODUCT_ATTR:
      return { ...state, loading: true };
    case ActionTypes.GET_PRODUCT_ATTR_SUCCESS:
      return { ...state, productDetailsAttr: action.payload, loading: false };
    case ActionTypes.GET_PRODUCT_ATTR_FAILURE:
      return { ...state, loading: false };

    // Review
    case ActionTypes.GET_REVIEW:
      return { ...state, loading: true };
    case ActionTypes.GET_REVIEW_SUCCESS:
      return { ...state, reviews: action.payload.data, pagination: action.payload.pagination, reviewUserFlag: action.payload.reviewUserFlag, loading: false };
    case ActionTypes.GET_REVIEW_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.USER_LOG_OUT:
      return { ...state, reviews: [], pagination: { pagesCount: 0, reviewCount: 0 }, loading: false };
    // Review
    case ActionTypes.ADD_REVIEW:
      return { ...state, loading: true };
    case ActionTypes.ADD_REVIEW_SUCCESS:
      return { ...state, reviews: action.payload.data, pagination: action.payload.pagination, loading: false };
    case ActionTypes.ADD_REVIEW_FAILURE:
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
