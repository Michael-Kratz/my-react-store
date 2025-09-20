import { createContext } from "react";

const GlobalContext = createContext({
  cart: [],
  addProductToCart: () => {},
  clearCart: () => {},
});

export default GlobalContext;
