import CouponsForms from "../components/couponsForms";
import ProductsForm from "../components/productsForm";
import "./admin.css";

function admin() {
  return (
    <div className="admin">
      <h1>Store management</h1>

      <div className="parent">
        <ProductsForm />
        <CouponsForms />
      </div>
    </div>
  );
}

export default admin;
