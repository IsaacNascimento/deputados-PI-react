import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPartidosByID } from "../../service/partidos";

export const PartidosDetalhes = () => {
  const [partido, setPartido] = useState([]);
  console.log(partido);
  const [partidoMembro, setPartidoMembro] = useState([]);
  const params = useParams();

  useEffect(() => {
      getPartidosByID(params.id).then((results) => setPartido(results));
  }, [])

  return (
    <div>
        <div className="container-detalhes">
        <div className="texto1">
          <h1>{partido.sigla}</h1>
        </div>
        </div>
  </div>
      )
};
