import * as ActionTypes from "./actionTypes";
import axios from "axios";

export const addFav = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_WISHLIST });
  let url = `${ActionTypes.BASE_URL}api/wishlist`;
  try {
    const res = await axios.post(url, { product: payload }, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    });
    dispatch({ type: ActionTypes.ADD_WISHLIST_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_WISHLIST_FAILURE });
  }
};

export const getWishList = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_WISHLIST });
  let url = `${ActionTypes.BASE_URL}api/wishlist/user`;
  try {
    const res = await axios.get(url, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    })
    dispatch({
      type: ActionTypes.GET_WISHLIST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_WISHLIST_FAILURE });
  }
};

export const removeFav = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.REMOVE_WISHLIST });
  let url = `${ActionTypes.BASE_URL}api/wishlist`;
  try {
    const res = await axios.delete(url, {
      data: { product: payload },
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    });
    // const res = await axios.delete(url, {
    //   headers: {
    //     'token': ActionTypes.BASE_TOKEN
    //   }
    // }, { product: payload });
    // console.log(res);
    dispatch({ type: ActionTypes.REMOVE_WISHLIST_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: ActionTypes.REMOVE_WISHLIST_FAILURE });
  }
};
