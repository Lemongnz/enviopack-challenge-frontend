import { createStore, combineReducers } from "redux";

import { productReducer } from "./reducers/product";
import { profileReducer } from "./reducers/profile";

export const store = createStore(
  combineReducers({
    cart: productReducer,
    profile: profileReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
