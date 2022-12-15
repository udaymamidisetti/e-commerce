import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify"
import { useSelector } from 'react-redux';

export const addCheckout = (payload) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_CHECKOUT });
  try {
    console.log(payload, "payload");
    dispatch({ type: ActionTypes.ADD_CHECKOUT_SUCCESS, payload: payload });
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_CHECKOUT_FAILURE });
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
