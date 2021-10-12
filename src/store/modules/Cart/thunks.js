import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const searchItem = cart.find((item) => item.id === product.id);

  if (searchItem === undefined) {
    const newCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
  dispatch(addToCart(product));
};

export const removeFromCartThunk = (product) => (dispatch) => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const filtredsItems = cartItems.filter((item) => item.id !== product.id);
  localStorage.setItem("cart", JSON.stringify(filtredsItems));

  if (filtredsItems.length === 0) {
    localStorage.removeItem("cart");
  }

  dispatch(removeFromCart(product));
};
