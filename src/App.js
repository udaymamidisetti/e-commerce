
import { Routes, Route, useSearchParams, Outlet, Navigate } from "react-router-dom";
import './index.css';
import "./carousel.min.css";

import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import RouteComponent from './Components/Routes/Routes';
import { ErrorBoundary } from 'react-error-boundary'
import Error from "./Components/Common/Error";
import { getAllProducts } from './Components/Redux/Actions/productAction';
import axios from "axios";
import { BASE_TOKEN } from "./Components/Redux/Actions/actionTypes";

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => {

  };
  script.onerror = () => {

  };
  document.body.appendChild(script);

}
function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const message = searchParams.get('message');
  if (message === process.env.REACT_APP_EMAIL_VERIFY_MESSAGE) {
    searchParams.delete('message');
    setSearchParams(searchParams);
    toast.success("Email verified successfully");
  }
  axios.defaults.headers.common['token'] = BASE_TOKEN;
  loadScript("https://checkout.razorpay.com/v1/checkout.js");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <ErrorBoundary
      FallbackComponent={<Error />}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}>
      <RouteComponent />
    </ErrorBoundary>
  );
}

export default App;
