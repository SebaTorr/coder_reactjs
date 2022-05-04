import React from "react";

const Item = ({title, color, price, description, image, countProduct}) => {
  return (
    <div className={`card ${color}`} style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-subtitle">
          {price}
        </p>
        <p className="card-text">
          {description}
        </p>
        {countProduct}
      </div>
    </div>
  );
};

export default Item;
