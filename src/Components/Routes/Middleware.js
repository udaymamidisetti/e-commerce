import React from "react";
import { toast } from "react-toastify";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { BASE_TOKEN } from "../Redux/Actions/actionTypes";

const Middleware = () => {
    // const userData = useSelector((item) => item.reducer.userData);
    // const userFlag = Object.entries(userData).length == 0;
    // const userFlag = BASE_TOKEN;

    return BASE_TOKEN == "" ? <Navigate to={"/login"} /> : <Outlet />;
    // return (auth &&instructor&&isInstructor)  || auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Middleware;
