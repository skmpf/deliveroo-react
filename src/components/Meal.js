import React from "react";

function Meal({
  title,
  description,
  picture,
  price,
  popular,
  selectedProducts,
  setSelectedProducts
}) {
  return (
    <div className="item">
      <div
        className="item-card"
        onClick={() => {
          const copy = [...selectedProducts];
          let isProductFound = false;
          for (let i = 0; i < copy.length; i++) {
            if (copy[i].title === title) {
              copy[i].quantity++;
              isProductFound = true;
            }
          }
          if (isProductFound === false) {
            copy.push({ title: title, price: price, quantity: 1 });
          }
          setSelectedProducts(copy);
        }}
      >
        <div className="item-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="price">
            <p>{price} €</p>
            <div className="popular">{popular && "Populaire"}</div>
          </div>
        </div>
        <div className="item-pic">
          {picture && <img src={picture} alt={title} />}
        </div>
      </div>
    </div>
  );
}

export default Meal;
