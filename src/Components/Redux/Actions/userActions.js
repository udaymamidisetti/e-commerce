import * as ActionTypes from "./actionTypes";
import { isExpired, decodeToken } from "react-jwt";
import axios from "axios";
import { toast } from "react-toastify";

// Login
export const userLogin = (formData, callback, verify) => async (dispatch) => {
  dispatch({ type: ActionTypes.USER_LOG_IN });
  try {
    const res = await axios.post(`${ActionTypes.BASE_URL}api/auth/login`, formData);
    if (!res.data.error) {
      localStorage.setItem(process.env.REACT_APP_TOKEN, res.data.token);
      callback("/");
      dispatch({ type: ActionTypes.USER_LOG_IN_SUCESSS, payload: res.data.data });
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    if (error.response.data.message == "Email not verified") {
      verify(false);
    }
    toast.error(error.response.data.message);
    dispatch({ type: ActionTypes.USER_LOG_IN_FAILURE });

    if (error.response.data.message == "User not found") {
      callback("/sign-up");
    }
    console.log(`error occured =>  ${error.message}`);
  }
};
export const userSignup = (formData, navigate) => async (dispatch) => {
  dispatch({ type: ActionTypes.USER_SIGNUP });
  try {
    const res = await axios.post(`${ActionTypes.BASE_URL}api/auth/sign-up`, formData);
    console.log(res, "res");
    navigate("/login");
    dispatch({ type: ActionTypes.USER_SIGNUP_SUCESSS, payload: res.data.data });
    toast.success("Please check your email, verification email sent to " + formData.get("email"));
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: ActionTypes.USER_SIGNUP_FAILURE });
  }
};
export const userDataStore = (token = "") => async (dispatch) => {
  let userData = {};
  userData = decodeToken(token);
  dispatch({ type: ActionTypes.STORE_USER_DATA, payload: userData.user });
}
export const userLogOut = ({ callback }) => async (dispatch) => {
  dispatch({ type: ActionTypes.USER_LOG_OUT });
  callback();
}
// export const otpVerify = (otp) => async (dispatch) => {
//   dispatch({ type: ActionTypes.USER_LOG_OUT });
// }
// export const getOtp = (phone) => async (dispatch) => {
//   dispatch({ type: ActionTypes.USER_LOG_OUT, payload: { phone } });
// }
export const userForgot = (formData, forgot) => async (dispatch) => {
  // try {
  //   dispatch({ type: ActionTypes.USER_LOG_IN });
  //   const res = await axios.post(`${ActionTypes.BASE_URL}api/auth/forgot-password`, formData);
  //   forgot(false);
  //   dispatch({ type: ActionTypes.USER_LOG_IN_SUCESSS, payload: res.data.data });
  //   toast.success(res.data.message);
  // } catch (error) {
  //   toast.error(error.response.data.message);
  // }
};


