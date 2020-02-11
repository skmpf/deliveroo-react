import React from "react";
import "./css/content.css";
import Meal from "./Meal";

function Category(props) {
  return (
    <div className="categories">
      <h2>{props.name}</h2>
      <div className="menu-items">
        {props.meals.map((meal, index) => {
          return (
            <Meal
              {...meal}
              selectedProducts={props.selectedProducts}
              setSelectedProducts={props.setSelectedProducts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Category;
