import React from "react";
import logo1 from "../../assets/logoMarca.webp";

const WebsiteLogo = () => {
  return (
    <figure className="logo-container">
      <img src={logo1} alt="Website Logo" className="navbar-logo" />
      <figcaption className="has-text-white fontMarca">Bruno´s Pet-Shop</figcaption>
    </figure>
  );
};

export default WebsiteLogo;
