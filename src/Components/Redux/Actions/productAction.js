import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_PRODUCT });
  try {
    const res = await axios.get(`${ActionTypes.BASE_URL}api/product`);
    const data = res.data.data;
    dispatch({
      type: ActionTypes.GET_PRODUCT_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_PRODUCT_FAILURE });
  }
};

export const getProduct = (id) => async (dispatch, state) => {
  try {
    console.log(state, "state");
    dispatch({ type: ActionTypes.GET_PRODUCT });
    // const res = await axios.get(`${ActionTypes.BASE_URL}api/product/${id}`);
    let products = "";
    dispatch({
      type: ActionTypes.GET_PRODUCT_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_PRODUCT_FAILURE });
  }
};
export const setSlider = (value) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.SET_SLIDER_SUCCESS,
      payload: value,
    });
  } catch (error) {

  }
};
export const searchHandle = (value) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.SET_SEARCH_SUCCESS,
      payload: value,
    });
  } catch (error) {
  }
};


