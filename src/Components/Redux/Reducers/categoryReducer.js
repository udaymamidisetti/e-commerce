import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  categories: [],
  subcategories: {},
  categoryLoading: false,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORY:
      return { ...state, loading: true };

    case ActionTypes.GET_CATEGORY_SUCCESS:
      return { ...state, categories: action.payload.data, subcategories: action.payload.subcategory, loading: false };

    case ActionTypes.GET_CATEGORY_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default categoryReducer;
