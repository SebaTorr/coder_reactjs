import React from "react";

const Item = ({titulo, color, precio, imagen, countProduct}) => {
  return (
    <div className={`card ${color}`} style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          {precio}
        </p>
        {countProduct}
      </div>
    </div>
  );
};

export default Item;
