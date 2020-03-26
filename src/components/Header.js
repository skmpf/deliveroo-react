import React from "react";
import logo from "../assets/img/deliveroo.png";

function Header(props) {
  const { restaurant } = props;
  return (
    <header>
      <div className="topbar">
        <div className="container">
          <img src={logo} alt="deliveroo-logo" />
        </div>
      </div>
      <div className="restaurant-infos container">
        <div className="infos-texts">
          <div>
            <h1>{restaurant.name}</h1>
          </div>
          <div>
            <p>{restaurant.description}</p>
          </div>
        </div>
        <div className="infos-cover">
          {restaurant.picture && (
            <img src={restaurant.picture} alt={restaurant.name} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
