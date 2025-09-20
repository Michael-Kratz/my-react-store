import Products from "../components/products";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../dataService/data";

function Catalog() {
  const [productsGlobal, setProductsGlobal] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  useEffect(function () {
    console.log("Component loaded");
    loadCatalog();
  }, []);

  function filter(category) {
    console.log(category);
    // please create the logic to filter the productsGlobal using the category
    let filteredProducts = [];
    for (let i = 0; i < productsGlobal.length; i++) {
      let temp = productsGlobal[i];
      if (temp.category === category) {
        filteredProducts.push(temp);
      }
    }
    setProductsToDisplay(filteredProducts);
    console.log(filteredProducts);
    // the real miniChallenge
    //now that i have the filtered products, i need to update my page using only the filtered products
  }

  function clearFilter() {
    setProductsToDisplay(productsGlobal);
    // this function will clear the filter and show all the products
    // you can call this function when the user clicks on a "Clear Filter" button
  }

  function loadCatalog() {
    //get the products form the service
    let service = new DataService();
    let products = service.getProducts();
    console.log(products);
    setProductsGlobal(products);
    let categoriesLocal = [
      "smart tv",
      "computers",
      "smartphones",
      "accessories",
    ];
    setCategories(categoriesLocal);
    setProductsToDisplay(products);
    // using this logic to do the same but into the products component (just the useEffect)
  }

  return (
    <div className="catalog">
      <h2>Catalog Page</h2>
      <h3>Hello we have {productsGlobal.length} new products</h3>
      <div className="fillters">
        <button onClick={clearFilter} className="btn btn-warning m-1">
          All
        </button>
      </div>
      {categories.map((catTemp) => (
        <button
          onClick={() => filter(catTemp)}
          key={catTemp}
          className="btn btn-info m-1"
        >
          {catTemp}
        </button>
      ))}
      <div className="list">
        {productsToDisplay.map((temporal) => (
          <Products dataProps={temporal} key={temporal.id} />
        ))}
      </div>

      {/* Here i want to create buttons using the categories StateVariable */}
    </div>
  );
}
export default Catalog;
