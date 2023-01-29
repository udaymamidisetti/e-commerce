import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  wishlist: {},
  wishlistLoading: false,
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_WISHLIST:
      return { ...state, loading: true };
    case ActionTypes.GET_WISHLIST_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case ActionTypes.GET_WISHLIST_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.ADD_WISHLIST:
      return { ...state, loading: true };
    case ActionTypes.ADD_WISHLIST_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case ActionTypes.ADD_WISHLIST_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.REMOVE_WISHLIST:
      return { ...state, loading: true };
    case ActionTypes.REMOVE_WISHLIST_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case ActionTypes.REMOVE_WISHLIST_FAILURE:
      return { ...state, loading: false };

    case ActionTypes.USER_LOG_OUT:
      return { ...state, wishlist: {}, loading: false };
    default:
      return state;
  }
};

export default wishlistReducer;
