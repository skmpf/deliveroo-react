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
              <button>Valider mon panier</button>
              <div className="selected-products">
                <button>-</button>
                <span>1</span>
                <button>+</button>
                <span>Brunch vegan</span>
                <span>25,00 €</span>
              </div>
              <div>
                <span>Sous-total</span>
                <span>50,00 €</span>
              </div>
              <div>
                <span>Frais de livraison</span>
                <span>2,50 €</span>
              </div>
              <div>
                <span>Total</span>
                <span>52,50 €</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
