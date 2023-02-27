import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers/rootReducer";
let store = "";
if (process.env.REACT_APP_ENVIRONMENT === 'PROD' || process.env.REACT_APP_ENVIRONMENT === 'DEV') {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
    )
  );

} else {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

}

export default store;
