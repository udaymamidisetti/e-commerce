import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";


export const addReview = (data) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_REVIEW });
  let url = `${ActionTypes.BASE_URL}api/review?limit=5&page=1`;
  try {
    const res = await axios.post(url, { ...data }, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    });
    dispatch({ type: ActionTypes.ADD_REVIEW_SUCCESS, payload: { data: res.data.data, pagination: res.data.pagination } });
  } catch (error) {
    console.log(error)
    dispatch({ type: ActionTypes.ADD_REVIEW_FAILURE });
  }
}
export const getReview = (id, page) => async (dispatch, state) => {
  try {
    dispatch({ type: ActionTypes.GET_REVIEW });
    const res = await axios.get(`${ActionTypes.BASE_URL}api/review/product/${id}?limit=5&page=${page}`);
    dispatch({
      type: ActionTypes.GET_REVIEW_SUCCESS,
      payload: { data: res.data.data, pagination: res.data.pagination },
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_REVIEW_FAILURE });
  }
};
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
    dispatch({ type: ActionTypes.GET_PRODUCT });
    let { products } = state().productReducer;
    let productDetails = products.find((item) => item._id == id);
    if (productDetails) {
      dispatch({
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        payload: productDetails,
      });
    } else {
      const res = await axios.get(`${ActionTypes.BASE_URL}api/product/${id}`);
      dispatch({
        type: ActionTypes.GET_PRODUCT_SUCCESS,
        payload: res.data.data,
      });
    }
    dispatch({ type: ActionTypes.GET_PRODUCT_FAILURE });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_PRODUCT_FAILURE });
  }
};
export const getProductAttr = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: ActionTypes.GET_PRODUCT_ATTR });
    const res = await axios.get(`${ActionTypes.BASE_URL}api/product-attr/${id}`);
    dispatch({
      type: ActionTypes.GET_PRODUCT_ATTR_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_PRODUCT_ATTR_FAILURE });
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


