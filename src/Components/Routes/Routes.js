import React, { Suspense } from "react";
// import routes from "./RoutesObj";
import { Routes, Route } from "react-router-dom";
import Middleware from "./Middleware";
import Navbar from "../Includes/Navbar";
import Footer from "../Includes/Footer";
// import Loader from '../../Components/Common/Loader';
import { useSelector } from "react-redux";
import RoutesData from "./RoutesObj";
import AllProduct from "../Page/Product/AllProducts";
const RouteComponent = () => {

    return (
        <>
            <Navbar />
            <div className=" px-10 py-36">
                <Routes>
                    {RoutesData.map((item, index) => {
                        return (
                            item.private ? (
                                <Route key={index} exact element={<Middleware />}>
                                    <Route exact={item.exact} path={item.path} name={item.name} element={item.element} />
                                </Route>
                            ) : (
                                <Route key={index} exact={item.exact} path={item.path} name={item.name} element={item.element}
                                />
                            )
                        )
                    })}
                </Routes>
            </div>
            <Footer />
        </ >
    );
};

export default RouteComponent;
