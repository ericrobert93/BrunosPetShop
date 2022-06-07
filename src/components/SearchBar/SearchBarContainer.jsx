import React, { useState } from "react";
import WithNotification from "../HOC/WithNotification";
import SearchForm from "./SearchForm";
import { Redirect } from "react-router-dom";
import { useGeneralDataContext } from "../../context/GeneralContext";
import "./SearchBar.css";

const SearchBarContainer = WithNotification(({ items }) => {
  const [productSearched, setProductSearched] = useState(null);

  const [hasSubmitted, setSubmit] = useState(false);

  const { createNotification } = useGeneralDataContext();

  const executeForm = (id) => {
    setProductSearched(id);
    setSubmit(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const searchedProduct = event.target["search-products"].value;
    const { id } =
      items.find(
        (item) => item.title.toLowerCase() === searchedProduct.toLowerCase()
      ) || false;
    if (id) executeForm(id);
    else
      createNotification(
        "Producto no encontrado 🕵️",
        "El producto que buscaste no está disponible. Inténtalo de nuevo",
        "info"
      );
  };

  return (
    <div className="section has-text-centered">
      <h2 className="title mb-3 is-centered titleSearch fontMarca">¿Qué te apetece comprar?</h2>
      {hasSubmitted ? (
        <Redirect to={`/product/${productSearched}`} />
      ) : (
        <SearchForm list={items} submitHandler={submitHandler} />
      )}
    </div>
  );
});

export default SearchBarContainer;
