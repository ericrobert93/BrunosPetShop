import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartTable = () => {
  const { cart, getItemsCount, calculateTotal, removeItem, clearCart } = useCartContext();

  const removeFromCart = (event) => {
    const productID = event.target.value;
    removeItem(productID);
  };

  const generateRow = ({ product: { id, title, price }, quantity }) => {
    return (
      <tr key={id}>
        <td>{title}</td>
        <td>{quantity}</td>
        <td>${price}</td>
        <td>${quantity * price}</td>
        <td>
          <button
            className="button is-danger is-light mx-2"
            value={id}
            title="Delete order"
            onClick={removeFromCart}
          > 
            🗑️Eliminar
          </button>
          <Link to={`/product/${id}`}>
            <button
              role="link"
              className="button is-warning is-light"
              title="Edit order"
            >
              🔨Editar
            </button>
          </Link>
        </td>
      </tr>
    );
  };

  return (
    <div className="box">
      <div className="is-flex is-align-items-center is-justify-content-space-between mb-3">
        <p className="is-size-3 p-1 has-text-weight-bold">Carrito de compras</p>
        <p className="is-size-4 p-1">
          {`${getItemsCount()} ${getItemsCount() > 1 ? "Productos" : "Producto"}`}
        </p>
      </div>

      <div className="table-container">
        <table className="table is-fullwidth has-text-centered is-hoverable is-striped ">
          <thead>
            <tr>
              <th scope="col">Producto</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio x unidad</th>
              <th scope="col">Subtotal</th>
              <th></th>
            </tr>
          </thead>

          <tbody>{cart.map((item) => generateRow(item))}</tbody>

          <tfoot>
            <tr className="has-text-center is-size-5">
              <td colSpan="5">Total: ${calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>
        <div className="btn-cart fontMarca">
        <button
          type="button"
          className="button is-danger is-light"
          title="Clear cart"
          onClick={clearCart}
        >
          Vaciar carrito
        </button>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
