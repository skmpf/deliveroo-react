import React from "react";
import "./css/content.css";

function Content(props) {
  const { categories } = props;
  return (
    <div className="content container">
      <div className="menu">
        <>
          {categories.map((category, index) => {
            return (
              <div key={index} className="menu-items">
                {category.meals !== [] && <h2>{category.name}</h2>}
                <div className="items">
                  {category.meals.map((meal, id) => {
                    return (
                      <div key={id} className="item">
                        <div className="item-text">
                          <h3>{meal.title}</h3>
                          <p>{meal.description}</p>
                          <div className="price">
                            <p>{meal.price} €</p>
                            <div className="popular">
                              {meal.popular && "Populaire"}
                            </div>
                          </div>
                        </div>
                        <div className="item-pic">
                          {meal.picture && (
                            <img src={meal.picture} alt={meal.title} />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      </div>
      <div className="cart"></div>
    </div>
  );
}

export default Content;
