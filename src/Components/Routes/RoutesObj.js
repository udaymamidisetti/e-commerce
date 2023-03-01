import { Suspense, lazy } from 'react';
import OrderDetails from '../Page/Order/OrderDetails';
import Profile from '../Page/User/Profile';
import Home from './../Page/Home/index';

import Loader from './../Common/Loader';
// const Home = lazy(() => import('../Page/Home/index'));
const ProductDetails = lazy(() => import('./../Page/Product/Details'));
const AllProducts = lazy(() => import('./../Page/Product/AllProducts'));
const Checkout = lazy(() => import('./../Page/Order/Checkout'));
const NotFOund = lazy(() => import('./../Common/404'));
const Login = lazy(() => import('./../Page/Auth/Login'));
const SignUp = lazy(() => import('./../Page/Auth/Signup'));
const MyOrder = lazy(() => import('./../Page/User/MyOrders'));
const Invoice = lazy(() => import('./../Page/Order/Invoice'));
const Logout = lazy(() => import('./../Page/User/LogOut'));
const Wishlist = lazy(() => import('./../Page/User/Wishlist'));
const PrivacyPolicy = lazy(() => import('./../Page/Organisation/PrivacyPolicy'));
const Disclaimer = lazy(() => import('./../Page/Organisation/Disclaimer'));
const AboutUs = lazy(() => import('./../Page/Organisation/AboutUs'));
const ReturnPolicy = lazy(() => import('./../Page/Organisation/ReturnPolicy'));

const RoutesData = [
    {
        path: "/",
        exact: true,
        name: "Home",
        element: <Home />,
        private: false,
    },
    {
        path: "/login",
        exact: true,
        name: "All Products",
        element: <Suspense fallback={<Loader />}><Login /></Suspense>,
        private: false,
    },
    {
        path: "/sign-up",
        exact: true,
        name: "All Products",
        element: <Suspense fallback={<Loader />}><SignUp /></Suspense>,
        private: false,
    },
    {
        path: "/products",
        exact: true,
        name: "All Products",
        element: <Suspense fallback={<Loader />}><AllProducts /></Suspense>,
        private: false,
    },
    {
        path: "/products/:id",
        exact: true,
        name: "Product Details",
        element: <Suspense fallback={<Loader />}><ProductDetails /></Suspense>,
        private: false,
    },
    {
        path: "/order/invoice/:id",
        exact: true,
        name: "Order Invoice",
        element: <Suspense fallback={<Loader />}><Invoice /></Suspense>,
        private: false,
    },
    {
        path: "/checkout",
        exact: true,
        name: "Order checkout",
        element: <Suspense fallback={<Loader />}><Checkout /></Suspense>,
        private: false,
    },
    {
        path: "/user/orders",
        exact: true,
        name: "My Orders",
        element: <Suspense fallback={<Loader />}><MyOrder /></Suspense>,
        private: true,
    },
    {
        path: "/user/profile",
        exact: true,
        name: "My Orders",
        element: <Suspense fallback={<Loader />}><Profile /></Suspense>,
        private: true,
    },
    {
        path: "/user/orders/:id",
        exact: true,
        name: "My Orders",
        element: <Suspense fallback={<Loader />}><OrderDetails /></Suspense>,
        private: true,
    },
    {
        path: "/user/wishlist",
        exact: true,
        name: "My Wishlist",
        element: <Suspense fallback={<Loader />}><Wishlist /></Suspense>,
        private: true,
    },
    {
        path: "/log-out",
        exact: true,
        name: "Log Out",
        element: <Suspense fallback={<Loader />}><Logout /></Suspense>,
        private: true,
    },
    {
        path: "/privacy-policy",
        exact: true,
        name: "Privacy Policy",
        element: <Suspense fallback={<Loader />}><PrivacyPolicy /></Suspense>,
        private: false,
    },
    {
        path: "/disclaimer",
        exact: true,
        name: "Disclaimer",
        element: <Suspense fallback={<Loader />}><Disclaimer /></Suspense>,
        private: false,
    },
    {
        path: "/about-us",
        exact: true,
        name: "About Us",
        element: <Suspense fallback={<Loader />}><AboutUs /></Suspense>,
        private: false,
    },
    {
        path: "/return-policy",
        exact: true,
        name: "Return Policy",
        element: <Suspense fallback={<Loader />}><ReturnPolicy /></Suspense>,
        private: false,
    },
    {
        path: "/personalized",
        exact: false,
        name: "404 Not Found",
        element: <NotFOund />,
        private: false,
    },
    {
        path: "*",
        exact: false,
        name: "404 Not Found",
        element: <NotFOund />,
        private: false,
    },
];

export default RoutesData;