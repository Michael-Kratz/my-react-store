import { useState } from "react";
import "./productsForm.css";

function ProductsForm() {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
  });

  function handleInput(e) {
    let text = e.target.value;
    let name = e.target.name;

    let copy = { ...product };
    // if (name == "title") {
    //   copy.title = text;
    // } else if (name == "price") {
    //   copy.price = text * 1;
    // } else if (name == "image") {
    //   copy.image = text;
    // } else {
    //   copy.category = text;
    // }

    // more simplified way
    if (name == "price") {
      copy[name] = text * 1;
    }
    copy[name] = text;

    setProduct(copy);
  }

  function save() {
    console.log(product);

    let copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);
  }

  return (
    <div className="products-form">
      <h3>Products</h3>

      <div>
        <label className="product-label">Title</label>
        <input
          onBlur={handleInput}
          name="title"
          type="text"
          className="product-control"
        />
      </div>
      <div>
        <label className="product-label">Price</label>
        <input
          onBlur={handleInput}
          name="price"
          type="text"
          className="product-control"
        />
      </div>
      <div>
        <label className="product-label">Image</label>
        <input
          onBlur={handleInput}
          name="image"
          type="text"
          className="product-control"
        />
      </div>
      <div>
        <label className="product-label">Category</label>
        <input
          onBlur={handleInput}
          name="category"
          type="text"
          className="product-control"
        />
      </div>
      <div className="controls">
        <button onClick={save} className="btn-save button-36">
          Save Coupon
        </button>
      </div>

      <ul className="list">
        {allProducts.map((p) => (
          <li>
            {p.title} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsForm;
