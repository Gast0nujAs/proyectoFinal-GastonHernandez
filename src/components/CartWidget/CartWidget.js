import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CartWidget.css"


const CartWidget = () => {
  

  return (
    <Link
      to="/cart"
      
      
    >
      <a className="CartWidget">🛒</a>
    </Link>
  );
};

export default CartWidget;