import React from "react";
import "./BuyForm.css";

const BuyForm = ({ submitHandler }) => {
  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <div className="field">
        <label htmlFor="fullname" className="label">
          Nombre completo
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="fullname"
            id="fullname"
            pattern="^[a-zA-Z]+(?:\s?[a-zA-z]+)+"
            placeholder="Ingrese su nombre"
            minLength="3"
            required
          />
          <p className="help is-link">Campo requerido.</p>
        </div>
      </div>

      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="example@email.com"
          required
        />
        <p className="help is-link">Campo requerido con formato email.</p>
      </div>

      <div className="field">
        <label htmlFor="telephone" className="label">
          Teléfono
        </label>
        <input
          type="tel"
          name="telephone"
          id="telephone"
          className="input"
          pattern="^\d{10}$"
          placeholder="2612123456"
          required
        />
        <p className="help">
          Campo requerido, solo números. 10 digitos (3 código de área + 7 teléfono sin 15)
        </p>
      </div>

      <div className="field">
        <div className="control">
          <button type="submit" className="button is-success">
            Confirmar la compra
          </button>
        </div>
      </div>
    </form>
  );
};

export default BuyForm;
