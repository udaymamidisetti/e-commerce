import * as ActionTypes from "./actionTypes";
import axios from "axios";

export const getCategory = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_CATEGORY });
  try {
    const res = await axios.get(`${ActionTypes.BASE_URL}api/category`);
    const data = res.data;
    dispatch({
      type: ActionTypes.GET_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_CATEGORY_FAILURE });
  }
};
