import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify"
import { useSelector } from 'react-redux';

export const getCart = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_CART });
  let url = `${ActionTypes.BASE_URL}api/cart`;
  try {
    const res = await axios.get(url, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    },);
    const data = res.data.data;
    dispatch({
      type: ActionTypes.GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_CART_FAILURE });
  }
};

export const addCart = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_CART });
  let url = `${ActionTypes.BASE_URL}api/cart`;
  try {
    // done bro
    const res = await axios.post(url, { product: payload }, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    });
    dispatch({ type: ActionTypes.ADD_CART_SUCCESS, payload: res.data.data });
    if (res.data.message == "1274d697fd046a9fbc83cf151ef286a3") {
      toast.success("Already in a Cart");
    }
  } catch (error) {
    console.log(error)
    dispatch({ type: ActionTypes.ADD_CART_FAILURE });
  }
};
// export const changeQuantity = (quntity, id) =>
//   async (dispatch) => {
//     dispatch({ type: ActionTypes.CHNAGE_CART_QUANTITY });
//     let url = `${ActionTypes.BASE_URL}api/cart/product/${payload}`;
//     try {
//       const res = await axios.post(url, {}, {
//         headers: {
//           'token': ActionTypes.BASE_TOKEN
//         }
//       });
//       dispatch({ type: ActionTypes.DELETE_CART_SUCCESS, payload: payload });
//     } catch (error) {
//       console.log(error)
//       dispatch({ type: ActionTypes.DELETE_CART_FAILURE });
//     }
//   }


export const deleteCartItem = (payload) => {
  return async (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_CART });
    let url = `${ActionTypes.BASE_URL}api/cart/product/${payload}`;
    try {
      const res = await axios.post(url, {}, {
        headers: {
          'token': ActionTypes.BASE_TOKEN
        }
      });
      dispatch({ type: ActionTypes.DELETE_CART_SUCCESS, payload: payload });
    } catch (error) {
      console.log(error)
      dispatch({ type: ActionTypes.DELETE_CART_FAILURE });
    }
  };
};