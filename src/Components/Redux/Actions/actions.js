import * as ActionTypes from "./actionTypes";
import axios from "axios";
import Logo from '../../Common/Logo.svg';

export const storeUserData = (data) => async (dispatch) => {
  try {
    dispatch({
      type: ActionTypes.STORE_USER_DATA,
      payload: data,
    });
  } catch (error) {
    console.log(`error occured =>  ${error.message}`);
  }
}

export const editProfileData = (payload, id) => (dispatch) => {
  dispatch({ type: ActionTypes.UPDATE_USER_PROFILE });

  let url = `${ActionTypes.BASE_URL}api/user/${id}`;
  try {
    const res = axios.patch(url, {
      headers: {
        'Authorization': ActionTypes.BASE_TOKEN
      }
    }, payload);

    dispatch({
      type: ActionTypes.UPDATE_USER_PROFILE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.UPDATE_USER_PROFILE_FAILURE });
  }
};
export const getAddress = (page) => async (dispatch) => {
  dispatch({ type: ActionTypes.GET_ADDRESS });

  let url = `${ActionTypes.BASE_URL}api/address?limit=${5}&page=${page}`;
  try {
    const { data } = await axios.get(url, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    });
    dispatch({
      type: ActionTypes.GET_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(`error occured => ${error.message}`);
    dispatch({ type: ActionTypes.GET_ADDRESS_FAILURE });
  }
};
export const addAddress = (payload, id) => async (dispatch) => {
  dispatch({ type: ActionTypes.ADD_ADDRESS });

  let url = `${ActionTypes.BASE_URL}api/address`;
  try {
    const { data } = await axios.post(url, payload, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    });
    dispatch({
      type: ActionTypes.ADD_ADDRESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(`error occured =>  ${error.message}`);
    dispatch({ type: ActionTypes.ADD_ADDRESS_FAILURE });
  }
};

export const payment = (payload, userData, cb) => async () => {
  let url = `${ActionTypes.BASE_URL}api/order`;
  const res = await axios.post(url, payload, {
    headers: {
      'token': ActionTypes.BASE_TOKEN
    }
  });
  const order_id = res.data.data.id;
  const data = res.data.data.order;


  const options = {
    key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
    amount: data.price.toString(),
    currency: "INR",
    name: "KAZARI COLLECTION PRIVATE LIMITED.",
    // description: "Test Transaction",
    image: Logo,
    order_id: order_id,
    handler: async function (response) {
      const responseData = {
        orderCreationId: order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        payment_successful: 1
      };

      const result = await axios.patch(url + "/" + data._id, responseData, {
        headers: {
          'token': ActionTypes.BASE_TOKEN
        }
      });
      cb("/user/orders/" + data._id);
    },
    prefill: {
      name: userData.name,
      email: userData.email,
      contact: userData.phone,
    },
    notes: {
      address: "Kazari Collection 1/602,“C” Wing, Akshata APartments,Tilak Nagar, Chembur(W), Mumbai-400089 India",
    },
    theme: {
      color: "#600D3F",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.on("payment.failed", async function (response) {
    const responseData = {
      orderCreationId: order_id,
      razorpayPaymentId: response.razorpay_payment_id,
      razorpayOrderId: response.razorpay_order_id,
      razorpaySignature: response.razorpay_signature,
      payment_successful: 0
    };
    const result = await axios.patch(url + data._id, responseData, {
      headers: {
        'token': ActionTypes.BASE_TOKEN
      }
    });
    cb("/user/orders/" + data._id);
  });
  paymentObject.open();
};
