import React from "react";

import minus from "../assets/img/circle-minus-512.png";
import plus from "../assets/img/plus-circle-512.png";

function Cart({ selectedProducts, addItem, removeItem, clearCart }) {
  let sousTotal = 0;
  for (let i = 0; i < selectedProducts.length; i++) {
    sousTotal += selectedProducts[i].quantity * selectedProducts[i].price;
  }
  const fraisLivraison = 2.5;
  let total = sousTotal + fraisLivraison;
  return (
    <div className="cart">
      {selectedProducts.length === 0 ? (
        <div className="cart-card">
          <div className="cart-actions">
            <button className="button-disabled">Valider mon panier</button>
            <button className="button-reset">Reset</button>
          </div>
          <div className="cart-empty">Votre panier est vide</div>
        </div>
      ) : (
        <div className="cart-card">
          <div className="cart-actions">
            <button className="button-validate">Valider mon panier</button>
            <button
              className="button-reset"
              onClick={() => {
                clearCart();
              }}
              >Reset</button>
          </div>
          <div className="cart-items">
            {selectedProducts.map((product, index) => {
              return (
                <div className="cart-line">
                  <div className="cart-counter">
                    <img
                      src={minus}
                      alt="-"
                      onClick={() => {
                        removeItem(product.title);
                      }}
                    />
                    <span>{product.quantity}</span>
                    <img
                      src={plus}
                      alt="+"
                      onClick={() => {
                        addItem(product.title);
                      }}
                    />
                  </div>
                  <span className="cart-item-name">{product.title}</span>
                  <span className="cart-amount">
                    {Number(product.price)
                      .toFixed(2)
                      .replace(".", ",")}{" "}
                    €
                  </span>
                </div>
              );
            })}
          </div>
          <div className="cart-results">
            <div className="cart-result-line">
              <span className="cart-result-name">Sous-total</span>
              <span className="cart-amount">
                {sousTotal.toFixed(2).replace(".", ",")} €
              </span>
            </div>
            <div className="cart-result-line">
              <span className="cart-result-name">Frais de livraison</span>
              <span className="cart-amount">
                {fraisLivraison.toFixed(2).replace(".", ",")} €
              </span>
            </div>
          </div>
          <div className="cart-total">
            <span className="cart-result-name">Total</span>
            <span className="cart-amount">
              {total.toFixed(2).replace(".", ",")} €
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
