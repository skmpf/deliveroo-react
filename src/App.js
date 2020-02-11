import React, { useState, useEffect } from "react";
import axios from "axios";
import "./components/css/reset.css";
import "./App.css";

import Header from "./components/Header";
import Category from "./components/Category";
import Cart from "./components/Cart";

function App() {
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend-2003.herokuapp.com/"
      );
      setRestaurant(response.data.restaurant);
      setCategories(response.data.categories);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  let sousTotal = 0;
  for (let i = 0; i < selectedProducts.length; i++) {
    sousTotal += selectedProducts[i].quantity * selectedProducts[i].price;
  }
  const fraisLivraison = 2.5;
  let total = sousTotal + fraisLivraison;

  return (
    <>
      {isLoading ? (
        <div>Loading page</div>
      ) : (
        <>
          <Header restaurant={restaurant} />
          <div className="content container">
            <div className="menu">
              {categories.map((category, index) => {
                if (category.meals.length === 0) {
                  return null;
                } else {
                  return (
                    <Category
                      name={category.name}
                      meals={category.meals}
                      selectedProducts={selectedProducts}
                      setSelectedProducts={setSelectedProducts}
                    />
                  );
                }
              })}
            </div>
            <div className="cart">
              {selectedProducts.length === 0 ? (
                <>
                  <button>Valider mon panier</button>
                  <div>Votre panier est vide</div>
                </>
              ) : (
                <>
                  <button>Valider mon panier</button>
                  <div className="selected-products">
                    {selectedProducts.map((product, index) => {
                      return (
                        <div className="product">
                          <button>-</button>
                          <span>{product.quantity}</span>
                          <button>+</button>
                          <span>{product.title}</span>
                          <span>{product.price} €</span>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <span>Sous-total</span>
                    <span>{sousTotal} €</span>
                  </div>
                  <div>
                    <span>Frais de livraison</span>
                    <span>{fraisLivraison} €</span>
                  </div>
                  <div>
                    <span>Total</span>
                    <span>{total} €</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
