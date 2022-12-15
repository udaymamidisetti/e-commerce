import * as ActionTypes from "../Actions/actionTypes";

const initialState = {
  userLoading: false,
  userData: {},
  address: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case ActionTypes.STORE_USER_DATA:
      return { ...state, userData: action.payload };

    // User Profile
    case ActionTypes.UPDATE_USER_PROFILE:
      return { ...state, loading: true };
    case ActionTypes.UPDATE_USER_PROFILE_SUCCESS:
      return { ...state, userData: action.payload, loading: false };
    case ActionTypes.UPDATE_USER_PROFILE_FAILURE:
      return { ...state, loading: false };

    // User Profile
    case ActionTypes.USER_SIGNUP:
      return { ...state, loading: true };
    case ActionTypes.USER_SIGNUP_SUCESSS:
      return { ...state, userData: action.payload, loading: false };
    case ActionTypes.USER_SIGNUP_FAILURE:
      return { ...state, loading: false };

    // User Log-in
    case ActionTypes.USER_LOG_IN:
      return { ...state, loading: true };
    case ActionTypes.USER_LOG_IN_SUCESSS:
      return { ...state, userData: action.payload, loading: false };
    case ActionTypes.USER_LOG_IN_FAILURE:
      return { ...state, loading: false };

    // Add Address
    case ActionTypes.ADD_ADDRESS:
      return { ...state, loading: true };
    case ActionTypes.ADD_ADDRESS_SUCCESS:
      return { ...state, address: action.payload, loading: false };
    case ActionTypes.ADD_ADDRESS_FAILURE:
      return { ...state, loading: false };
    // Get address
    case ActionTypes.GET_ADDRESS:
      return { ...state, loading: true };
    case ActionTypes.GET_ADDRESS_SUCCESS:
      return { ...state, address: action.payload, loading: false };
    case ActionTypes.GET_ADDRESS_FAILURE:
      return { ...state, loading: false };


    default:
      return state;
  }
};

export default reducer;
