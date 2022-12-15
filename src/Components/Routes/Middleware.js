import React from "react";
import { toast } from "react-toastify";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Middleware = () => {
    const userData = useSelector((item) => item.reducer.userData);
    const userFlag = Object.entries(userData).length == 0;

    return userFlag ? <Navigate to={"/login"} /> : <Outlet />;
    // return (auth &&instructor&&isInstructor)  || auth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Middleware;
