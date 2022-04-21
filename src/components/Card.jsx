import React from "react";

const Card = ({titulo, color, precio, btnText, imagen, boton, btnStyle}) => {
  return (
    <div className={`card ${color}`} style={{ width: "18rem" }}>
      <img src={imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">
          {precio}
        </p>
        <button className={btnStyle}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
