import { useState } from "react";
import "./couponsForm.css";

function CouponsForms() {
  const [allCoupons, setAllCoupons] = useState([]);
  const [coupon, setCoupons] = useState({
    code: "",
    discount: "",
  });
  const [showError, setShowError] = useState(false);

  function handleInput(e) {
    let text = e.target.value;
    let name = e.target.name;

    /**
     * 3 steps
     * - create a copy
     * - modify the copy
     * - set the copy back
     */
    let copy = { ...coupon };
    if (name == "code") {
      copy.code = text;
    } else {
      copy.discount = text * 1; // parse it to a number
    }
    setCoupons(copy);
  }

  function save() {
    console.log(coupon);

    // validation
    if (!coupon.discount || !coupon.code) {
      setShowError(true);
      return;
    } else {
      setShowError(false);
    }

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }

  return (
    <div className="coupons-form">
      <h3>Coupons</h3>
      {showError ? (
        <div className="error"> * Invalid data, please verify</div>
      ) : null}
      <div>
        <label className="form-label">Code</label>
        <input
          onBlur={handleInput}
          name="code"
          type="text"
          className="form-control"
        />
      </div>
      <div>
        <label className="form-label">Discount</label>
        <input
          onBlur={handleInput}
          name="discount"
          type="text"
          className="form-control"
        />
      </div>
      <div className="controls">
        <button onClick={save} className="btn-save button-36">
          Save Coupon
        </button>
      </div>

      <ul className="list">
        {allCoupons.map((cp) => (
          <li>
            {cp.code} - {cp.discount}%{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CouponsForms;
