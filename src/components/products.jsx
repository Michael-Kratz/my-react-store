import "./products.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Products(props) {
    const [totalPrice, setTotalPrice] = useState(1);
    
   
    useEffect(function(){
        console.log("hello im a product");
    },[]);

    function onQuantityChange(newQuantity){
        console.log("the new quantity is: "+newQuantity);
        setTotalPrice(newQuantity);
    }

    return (
        <div className="products">
            <h2>{props.dataProps.title}</h2>
            <img src={"./images/"+props.dataProps.image}></img>
            <label>Price: {(props.dataProps.price).toFixed(2)}</label>
            <label>Total: { (props.dataProps.price * totalPrice).toFixed(2) }</label>   
            {/* Calculate the total price according to the amount on the quantity picker (round to 2 decimals) */}
            {/* create a new variable that you can use to add the products */}
            
            <QuantityPicker onChange={onQuantityChange} />
        </div>
    )
}
export default Products;