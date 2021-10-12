import { createStore, combineReducers, applyMiddleware } from "redux";
import productsReducer from "./modules/Products/reducer";
import cartReducer from "./modules/Cart/reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
