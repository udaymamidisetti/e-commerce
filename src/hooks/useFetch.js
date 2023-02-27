import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as ActionTypes from '../Components/Redux/Actions/actionTypes';

const useFetch = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const callback = useNavigate();
    const dispatch = useDispatch();

    const handleGoogle = async (response) => {
        setLoading(true);
        dispatch({ type: ActionTypes.USER_LOG_IN });
        try {
            const res = await axios.post(url, { credential: response.credential });
            if (!res.data.error) {
                localStorage.setItem(process.env.REACT_APP_TOKEN, res.data.token);
                callback("/");
                dispatch({ type: ActionTypes.USER_LOG_IN_SUCESSS, payload: res.data.data });
                toast.success(res.data.message);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
            dispatch({ type: ActionTypes.USER_LOG_IN_FAILURE });

            if (error.response.data.message == "User not found") {
                callback("/sign-up");
            }
            console.log(`error occured =>  ${error.message}`);
        }
    };
    return { loading, error, handleGoogle };
};

export default useFetch;