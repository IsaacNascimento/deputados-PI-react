import React from "react";
import { Link } from "react-router-dom";
import "../css/card.css";

export const CardPartidos = ({ nome, sigla, id }) => {
  return (
    <div>
      <Link className="card-link" to={"#"}>
        <div className="card">
          <div className="card-title">
            <h4>{nome}</h4>
            <h5>{sigla}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};
