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
    });
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
  let { product, quantity, productAttr } = payload;
  let url = `${ActionTypes.BASE_URL}api/cart`;
  try {
    const res = await axios.post(url, { cart_items: { product: product._id, quantity: 1, productAttr: productAttr._id } }, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    });
    if (res.data.message == "1274d697fd046a9fbc83cf151ef286a3") {
      toast.success("Already in a Cart");
      return;
    }
    dispatch({ type: ActionTypes.ADD_CART_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error)
    dispatch({ type: ActionTypes.ADD_CART_FAILURE });
  }
};
export const changeQuantity = (quantity, productId, cartId) =>
  async (dispatch, state) => {
    dispatch({ type: ActionTypes.CHANGE_CART_QUANTITY });
    let url = `${ActionTypes.BASE_URL}api/cart/${cartId}`;
    try {
      let cart = state().cartReducer.cart;
      cart = cart.map(item => ({ ...item, cart_items: item.cart_items.map(it => it.product._id == productId ? { ...it, quantity: parseInt(quantity) } : it) }))
      const res = await axios.put(url, { cart_items: cart[0].cart_items }, {
        headers: {
          'token': ActionTypes.BASE_TOKEN
        }
      });
      dispatch({ type: ActionTypes.DELETE_CART_SUCCESS, payload: cart });
    } catch (error) {
      console.log(error)
      dispatch({ type: ActionTypes.DELETE_CART_FAILURE });
    }
  }


export const deleteCartItem = (productID, cartID) => {

  return async (dispatch, state) => {
    dispatch({ type: ActionTypes.DELETE_CART });
    let url = `${ActionTypes.BASE_URL}api/cart/${cartID}`;
    try {
      let cart = state().cartReducer.cart;
      cart = cart.map(item => ({ ...item, cart_items: item.cart_items.filter(it => it.product._id != productID) }))
      const res = await axios.put(url, { cart_items: cart[0].cart_items }, {
        headers: {
          'token': ActionTypes.BASE_TOKEN
        }
      });
      dispatch({ type: ActionTypes.DELETE_CART_SUCCESS, payload: cart });
    } catch (error) {
      console.log(error)
      dispatch({ type: ActionTypes.DELETE_CART_FAILURE });
    }
  };
};