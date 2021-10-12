import { ADD_CART, REMOVE_CART } from "./actionsTypes";

// const cartInitialState = JSON.parse(localStorage.getItem("cart") || []);

const cartReducer = (state = "", action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_CART:
      const {
        product: { id },
      } = action;
      const filterProduct = state.filter((item) => item.id !== id);
      return filterProduct;

    default:
      return state;
  }
};

export default cartReducer;