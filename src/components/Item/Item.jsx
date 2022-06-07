import React from "react";
import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ id, title, price, imageURL }) => {
  return (
    <article className="card has-text-centered">
      <header className="card-header is-justify-content-center">
        <figure className="card-image p-1">
          <img className="image product-img" src={imageURL} alt="" />
        </figure>
      </header>

      <section className="card-content">
        <h2 className="subtitle mb-1 is-size-3-mobile is-size-4-desktop">
          {title}
        </h2>
        <b className="is-block mb-1 is-size-4-mobile is-size-5-desktop">
          ${price}
        </b>
      </section>

      <footer className="card-footer is-flex-direction-column is-align-items-center p-2">
        <Link to={`/product/${id}`}>
          <button
            role="link"
            className="button is-link is-light btn third"
            type="button"
            title="Ver detalles"
          >
            Ver más
          </button>
        </Link>
      </footer>
    </article>
  );
};

export default Item;
