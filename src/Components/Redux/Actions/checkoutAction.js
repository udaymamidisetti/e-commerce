import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify"
import { useSelector } from 'react-redux';

export const addCheckout = (payload, cb) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_CHECKOUT });
  try {
    console.log("ActionTypes.ADD_CHECKOUT_SUCCESS");
    dispatch({ type: ActionTypes.ADD_CHECKOUT_SUCCESS, payload: payload });
    return cb("/checkout");
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_FAILURE });
  }
};

export const addCheckoutCart = (cb) => async (dispatch, state) => {
  dispatch({ type: ActionTypes.ADD_CHECKOUT_CART });
  try {
    console.log("ActionTypes.ADD_CHECKOUT_SUCCESS");
    dispatch({ type: ActionTypes.ADD_CHECKOUT_CART_SUCCESS, payload: state().cartReducer.cart });
    return cb("/checkout");
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_CART_FAILURE });
  }
};

export const addQuantity = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_CHECKOUT });
  try {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_QUANTITY_SUCCESS, payload: payload });
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_FAILURE });
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
export const removeCheckout = (id) => async (dispatch) => {

  dispatch({ type: ActionTypes.REMOVE_CHECKOUT_SUCCESS, payload: id });

}
