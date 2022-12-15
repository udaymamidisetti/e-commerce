import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import reducer from "./reducer";
import wishlistReducer from "./wishlistReducer";
import checkoutReducer from './checkoutReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  wishlistReducer,
  reducer,
  categoryReducer,
  checkoutReducer,
  orderReducer
});

export default rootReducer;
