import React from "react";
import './ItemCount.css';
const ItemCount = ({ stock, count, onAdd }) => {
  return (
    <div className="level is-inline-flex p-0 m-0">
      <button
        className="level-item button is-info is-normal m-0 btn-count btn-animate"
        type="button"
        value={-1}
        disabled={count <= 1}
        onClick={onAdd}
        title="Decrementar"
        aria-label="Decrementar"
      >
        -
      </button>
      <small className="level-item tag is-white is-large m-0">{count}</small>
      <button
        className="level-item button is-info is-normal m-0 btn-count btn-animate"
        type="button"
        value={1}
        disabled={count >= stock}
        onClick={onAdd}
        title="Incrementar"
        aria-label="Incrementar"
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
