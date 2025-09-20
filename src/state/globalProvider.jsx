import { useState } from "react";
import GlobalContext from "../state/globalContext";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);

  function addProductToCart(prod) {
    console.log("Global fn");
    let copy = [...cart];
    copy.push(prod), setCart(copy);
  }

  function clearCart() {}

  return (
    <GlobalContext.Provider
      value={{
        cart: cart,
        addProductToCart,
        clearCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
