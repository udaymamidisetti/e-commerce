import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify"
import { useSelector } from 'react-redux';

export const addCheckout = (payload, cb) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_CHECKOUT });
  try {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_SUCCESS, payload: payload });
    return cb("/checkout");
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_FAILURE });
  }
};

export const addCheckoutCart = (data, cb) => async (dispatch, state) => {
  dispatch({ type: ActionTypes.ADD_CHECKOUT_CART });
  try {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_CART_SUCCESS, payload: data });
    return cb("/checkout");
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_CART_FAILURE });
  }
};
export const addCheckoutAddress = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_CHECKOUT });
  try {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_ADDRESS_SUCCESS, payload: payload });
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_FAILURE });
  }
};
export const changeQuantity = (quantity, productId, cartId) =>
  async (dispatch, state) => {
    dispatch({ type: ActionTypes.CHANGE_CART_QUANTITY });
    let url = `${ActionTypes.BASE_URL}api/cart/${cartId}`;
    try {
      let checkout = state().cartReducer.checkout;
      checkout = checkout.map(item => ({ ...item, order_items: item.order_items.map(it => it.product._id == productId ? { ...it, quantity: parseInt(quantity) } : it) }))
      // const res = await axios.put(url, { cart_items: cart[0].cart_items }, {
      //   headers: {
      //     'token': ActionTypes.BASE_TOKEN
      //   }
      // });
      dispatch({ type: ActionTypes.DELETE_CHECKOUT_SUCCESS, payload: checkout });
    } catch (error) {
      console.log(error)
      dispatch({ type: ActionTypes.DELETE_CHECKOUT_FAILURE });
    }
  }
export const deleteCheckoutItem = (productID, cartID) => {
  return async (dispatch, state) => {
    dispatch({ type: ActionTypes.DELETE_CHECKOUT });
    // let url = `${ActionTypes.BASE_URL}api/cart/${cartID}`;
    try {
      let checkout = state().checkoutReducer.checkout;
      checkout = checkout.map(item => ({ ...item, order_items: item.order_items.filter(it => it.product._id != productID) }))
      // const res = await axios.put(url, { order_items: checkout[0].order_items }, {
      //   headers: {
      //     'token': ActionTypes.BASE_TOKEN
      //   }
      // });
      dispatch({ type: ActionTypes.DELETE_CHECKOUT_SUCCESS, payload: checkout });
    } catch (error) {
      console.log(error)
      dispatch({ type: ActionTypes.DELETE_CHECKOUT_FAILURE });
    }
  };
};
