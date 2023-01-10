import { decodeToken } from "react-jwt";
export const BASE_URL = process.env.REACT_APP_BASE_URL;
export const BASE_TOKEN = localStorage.getItem(process.env.REACT_APP_TOKEN);

// User
export const USER_LOG_IN = "USER_LOG_IN";
export const USER_LOG_IN_SUCESSS = "USER_LOG_IN_SUCESSS";
export const USER_LOG_IN_FAILURE = "USER_LOG_IN_FAILURE";

export const STORE_USER_DATA = "STORE_USER_DATA";
//signup
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_SIGNUP_SUCESSS = "USER_SIGNUP_SUCESSS";
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE";

//signup
export const USER_FORGOT = "USER_SIGNUP";
export const USER_FORGOT_SUCESSS = "USER_SIGNUP_SUCESSS";
export const USER_FORGOT_FAILURE = "USER_SIGNUP_FAILURE";
// Category
export const GET_CATEGORY = "GET_CATEGORY";
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS";
export const GET_CATEGORY_FAILURE = "GET_CATEGORY_FAILURE";

// Language
export const GET_LANGUAGE = "GET_LANGUAGE";
export const GET_LANGUAGE_SUCCESS = "GET_LANGUAGE_SUCCESS";
export const GET_LANGUAGE_FAILURE = "GET_LANGUAGE_FAILURE";

// Language
export const GET_INSTRUCTOR = "GET_INSTRUCTOR";
export const GET_INSTRUCTOR_SUCCESS = "GET_INSTRUCTOR_SUCCESS";
export const GET_INSTRUCTOR_FAILURE = "GET_INSTRUCTOR_FAILURE";

// Product
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"
export const GET_PRODUCT_ALL_SUCCESS = "GET_PRODUCT_ALL_SUCCESS"
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

export const GET_PRODUCT_ATTR = "GET_PRODUCT_ATTR";
export const GET_PRODUCT_ATTR_SUCCESS = "GET_PRODUCT_ATTR_SUCCESS";
export const GET_PRODUCT_ATTR_FAILURE = "GET_PRODUCT_ATTR_FAILURE";

export const UPDATE_USER_PROFILE = "UPDATE_USER_PROFILE";
export const UPDATE_USER_PROFILE_SUCCESS = "UPDATE_USER_PROFILE_SUCCESS";
export const UPDATE_USER_PROFILE_FAILURE = "UPDATE_USER_PROFILE_FAILURE";

// Wishlist
export const GET_WISHLIST = "GET_WISHLIST";
export const GET_WISHLIST_SUCCESS = "GET_WISHLIST_SUCCESS";
export const GET_WISHLIST_FAILURE = "GET_WISHLIST_FAILURE";

export const ADD_WISHLIST = "ADD_WISHLIST";
export const ADD_WISHLIST_SUCCESS = "ADD_WISHLIST_SUCCESS";
export const ADD_WISHLIST_FAILURE = "ADD_WISHLIST_FAILURE";

export const REMOVE_WISHLIST = "REMOVE_WISHLIST";
export const REMOVE_WISHLIST_SUCCESS = "REMOVE_WISHLIST_SUCCESS";
export const REMOVE_WISHLIST_FAILURE = "REMOVE_WISHLIST_FAILURE";


// Cart
export const GET_CART = "GET_CART";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";

export const ADD_CART = "ADD_CART";
export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS";
export const ADD_CART_FAILURE = "ADD_CART_FAILURE";

export const DELETE_CART = "DELETE_CART";
export const DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS";
export const DELETE_CART_FAILURE = "DELETE_CART_FAILURE";

// Address
export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_ADDRESS_SUCCESS = "ADD_ADDRESS_SUCCESS";
export const ADD_ADDRESS_FAILURE = "ADD_ADDRESS_FAILURE";

// Address
export const GET_ADDRESS = "GET_ADDRESS";
export const GET_ADDRESS_SUCCESS = "GET_ADDRESS_SUCCESS";
export const GET_ADDRESS_FAILURE = "GET_ADDRESS_FAILURE";

// Checkout
export const GET_CHECKOUT = "GET_CHECKOUT";
export const GET_CHECKOUT_SUCCESS = "GET_CHECKOUT_SUCCESS";
export const GET_CHECKOUT_FAILURE = "GET_CHECKOUT_FAILURE";

// Review
export const GET_REVIEW = "GET_REVIEW";
export const GET_REVIEW_SUCCESS = "GET_REVIEW_SUCCESS";
export const GET_REVIEW_FAILURE = "GET_REVIEW_FAILURE";

export const ADD_REVIEW = "ADD_REVIEW";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILURE = "ADD_REVIEW_FAILURE";

// REMOVE Checkout
export const REMOVE_CHECKOUT = "REMOVE_CHECKOUT";
export const REMOVE_CHECKOUT_SUCCESS = "REMOVE_CHECKOUT_SUCCESS";
export const REMOVE_CHECKOUT_FAILURE = "REMOVE_CHECKOUT_FAILURE";

export const ADD_CHECKOUT = "ADD_CHECKOUT";
export const ADD_CHECKOUT_SUCCESS = "ADD_CHECKOUT_SUCCESS";
export const ADD_CHECKOUT_QUANTITY_SUCCESS = "ADD_CHECKOUT_QUANTITY_SUCCESS";
export const ADD_CHECKOUT_ADDRESS_SUCCESS = "ADD_CHECKOUT_ADDRESS_SUCCESS";
export const ADD_CHECKOUT_FAILURE = "ADD_CHECKOUT_FAILURE";

export const ADD_CHECKOUT_CART = "ADD_CHECKOUT_CART";
export const ADD_CHECKOUT_CART_SUCCESS = "ADD_CHECKOUT_CART_SUCCESS";
export const ADD_CHECKOUT_CART_FAILURE = "ADD_CHECKOUT_CART_FAILURE";


export const DELETE_CHECKOUT = "DELETE_CHECKOUT";
export const DELETE_CHECKOUT_SUCCESS = "DELETE_CHECKOUT_SUCCESS";
export const DELETE_CHECKOUT_FAILURE = "DELETE_CHECKOUT_FAILURE";

// Order
export const GET_ORDER = "GET_ORDER";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILURE = "GET_ORDER_FAILURE";
export const GET_ORDER_ALL_SUCCESS = "GET_ORDER_ALL_SUCCESS";

export const SET_SLIDER = "SET_SLIDER";
export const SET_SLIDER_SUCCESS = "SET_SLIDER_SUCCESS";
export const SET_SLIDER_FAILURE = "SET_SLIDER_FAILURE";

export const SET_SEARCH = "SET_SEARCH";
export const SET_SEARCH_SUCCESS = "SET_SEARCH_SUCCESS";
export const SET_SEARCH_FAILURE = "SET_SEARCH_FAILURE";


export const ADD_ORDER = "ADD_ORDER";
export const ADD_ORDER_SUCCESS = "ADD_ORDER_SUCCESS";
export const ADD_ORDER_FAILURE = "ADD_ORDER_FAILURE";

export const ITEM_COUT = "ITEM_COUT";


