import React from "react";
import { Link } from "react-router-dom";
import "../css/card.css";

export const CardPartidos = ({ nome, foto, id }) => {
  return (
    <div>
      <Link className="card-link" to={`/detalhes/${id}`}>
        <div className="card">
          <div className="card-title">
            <h4>{nome}</h4>
            <h5>{foto}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};
