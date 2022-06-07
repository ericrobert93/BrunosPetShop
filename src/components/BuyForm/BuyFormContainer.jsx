import React from "react";
import WithNotification from "../HOC/WithNotification";
import BuyForm from "./BuyForm";
import { useCartContext } from "../../context/CartContext";
import { useGeneralDataContext } from "../../context/GeneralContext";
import { createOrder, updateProductsStock } from "../../scripts/firebaseConfig";

const BuyFormContainer = WithNotification(() => {
  const { cart, clearCart, calculateTotal, updateCart } = useCartContext();
  const { createNotification } = useGeneralDataContext();

  const submitHandler = (event) => {
    event.preventDefault();

    const createErrorNotification = (items) => {
      createNotification(
        "Error al enviar su pedido 😱",
        "Algunos de sus productos están agotados. Su carrito se ha actualizado",
        "danger",
        () => updateCart(items)
      );
    };

    const submitOrder = (target) => {
      const orderInformation = {
        buyer: {
          name: target.fullname.value,
          email: target.email.value,
          telephone: target.telephone.value,
        },
        items: cart.map(({ product: { id, title, price }, quantity }) => ({
          id,
          title,
          price,
          quantity,
        })),
        date: new Date().toLocaleString(),
        total: calculateTotal(),
      };

      const createSuccessNotification = (orderId) => {
        createNotification(
          "Muchas gracias por su compra! 😊",
          `Su orden fue enviada. Código de compra: ${orderId}.`,
          "success",
          clearCart
        );
      };

      createOrder(orderInformation, createSuccessNotification);
    };

    updateProductsStock(cart).then(({ items, hasErrorOnSubmit }) => {
      if (hasErrorOnSubmit) createErrorNotification(items);
      else submitOrder(event.target);
    });
  };

  return (
    <div className="container">
      <BuyForm submitHandler={submitHandler} />
    </div>
  );
});

export default BuyFormContainer;
