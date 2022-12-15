import * as ActionTypes from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify"
import { useSelector } from 'react-redux';

export const getOrderDetails = (id) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ORDER });
  let url = `${ActionTypes.BASE_URL}api/order/${id}`;
  try {
    const res = await axios.get(url, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    },);
    const data = res.data.data;

    dispatch({
      type: ActionTypes.GET_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_ORDER_FAILURE });
  }
};

export const getOrderAllDetails = () => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ORDER });
  let url = `${ActionTypes.BASE_URL}api/order/user`;
  try {
    const res = await axios.get(url, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    },);
    const data = res.data.data;

    dispatch({
      type: ActionTypes.GET_ORDER_ALL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.GET_ORDER_FAILURE });
  }
};