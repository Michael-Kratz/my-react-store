import { useContext } from "react";
import "./cart.css";
import GlobalContext from "../state/globalContext";

function Cart() {
  const context = useContext(GlobalContext);

  return (
    <div className="cart">
      <h1>Ready to complete your order?</h1>

      <div className="parent">
        <ul className="list">
          {context.cart.map((prod) => (
            <li className="items">
              <img src={"./images/" + prod.image}></img>
              <h4>{prod.title}</h4>
              <label>Price: ${prod.price.toFixed(2)}</label>
              <label>Quantity: {prod.quantity}</label>
              <label>Total: ${(prod.price * prod.quantity).toFixed(2)}</label>
              <button className="btn btn-remove">Remove</button>
            </li>
          ))}
        </ul>
        <div className="side-menu">
          <h3>Total</h3>
          <h2>$9,999.99</h2>

          <button className="btn button-36">Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
