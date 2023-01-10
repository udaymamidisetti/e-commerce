import axios from "axios";

export const userLogin = (formData, callback, verify) => async (dispatch) => {
    dispatch({ type: ActionTypes.USER_LOG_IN });
    try {
        const response = await axios.post('https://apiv2.shiprocket.in/v1/external/admin/login', {
            'email': '',
            'password': ''
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        if (!res.data.error) {
            toast.success(res.data.message);
            localStorage.setItem(process.env.REACT_APP_TOKEN, res.data.token);
            callback("/");
            dispatch({ type: ActionTypes.USER_LOG_IN_SUCESSS, payload: res.data.data });
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