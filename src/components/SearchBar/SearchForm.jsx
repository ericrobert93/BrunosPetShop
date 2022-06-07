import React from "react";

const SearchForm = ({ list, submitHandler }) => {
  return (
    <form onSubmit={submitHandler} autoComplete="off" className="mb-3">
      <div className="field is-grouped is-flex is-justify-content-center">
        <div className="control is-flex-grow-1">
          <input
            className="input has-text-centered fontSearch"
            type="search"
            name="search-products"
            id="search-products"
            arial-label="Escriba el producto que desea buscar"
            placeholder="Buscar un producto"
            list="products"
            required
          />
          <datalist id="products">
            {list.map(({ id, title }) => (
              <option key={id}>{title}</option>
            ))}
          </datalist>
        </div>
        <div className="control">
          <button
            className="button is-link is-light btn third btn-search fontMarca"
            type="submit"
            aria-label="Encontrar producto"
          >
          🐶Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
