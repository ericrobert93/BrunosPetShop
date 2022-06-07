import React from "react";
import cartEmpty from "../../assets/cartEmpty.png";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="container has-text-centered">
      <h2 className="title">El carrito está vacío</h2>
      <Link to="/">
        <button role="link" className="button is-link is-light">
          Volver al listado de productos
        </button>
      </Link>
      <figure>
        <img className="mx-auto image imageCartEmpty" src={cartEmpty} alt="" />
      </figure>
    </div>
  );
};

export default CartEmpty;
