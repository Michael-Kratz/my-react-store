import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../state/globalContext";

function Products(props) {
  const [totalPrice, setTotalPrice] = useState(1);

  const context = useContext(GlobalContext);

  useEffect(function () {
    console.log("hello im a product");
  }, []);

  function onQuantityChange(newQuantity) {
    console.log("the new quantity is: " + newQuantity);
    setTotalPrice(newQuantity);
  }

  function add2Cart() {
    console.log("add to cart");
    let prod = { ...props.dataProps, quantity: totalPrice };
    context.addProductToCart(prod);
  }

  return (
    <div className="products">
      <h2>{props.dataProps.title}</h2>
      <img src={"./images/" + props.dataProps.image}></img>
      <label>Price: {props.dataProps.price.toFixed(2)}</label>
      <label>Total: {(props.dataProps.price * totalPrice).toFixed(2)}</label>
      {/* Calculate the total price according to the amount on the quantity picker (round to 2 decimals) */}
      {/* create a new variable that you can use to add the products */}

      <QuantityPicker onChange={onQuantityChange} />

      <button onClick={add2Cart} className="btn button-36">
        Add Cart
      </button>
    </div>
  );
}
export default Products;
