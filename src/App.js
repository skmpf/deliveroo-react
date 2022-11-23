import React, { useState, useEffect } from "react";
import axios from "axios";
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
        "https://deliveroo-backend-2003.fly.dev/"
      );
      setRestaurant(response.data.restaurant);
      setCategories(response.data.categories);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const addItem = title => {
    const exist = selectedProducts.find(cartItem => cartItem.title === title);
    if (exist) {
      const index = selectedProducts.indexOf(exist);
      const newCart = [...selectedProducts];
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity + 1
      };
      setSelectedProducts(newCart);
    }
  };

  const removeItem = title => {
    const exist = selectedProducts.find(cartItem => cartItem.title === title);
    const newCart = [...selectedProducts];
    if (exist) {
      const index = selectedProducts.indexOf(exist);
      if (selectedProducts[index].quantity !== 1) {
        newCart[index] = {
          ...newCart[index],
          quantity: newCart[index].quantity - 1
        };
      } else {
        newCart.splice(index, 1);
      }
      setSelectedProducts(newCart);
    }
  };

  const clearCart = () => {
    setSelectedProducts([]);
  }

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading page</div>
      ) : (
        <>
          <Header restaurant={restaurant} />
          <div className="content">
            <div className="container">
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
              <Cart
                selectedProducts={selectedProducts}
                addItem={addItem}
                removeItem={removeItem}
                clearCart={clearCart}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
