import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPartidosByID, getPartidosMembros } from "../../service/partidos";
import "../../css/detalhes.css";
import "../../css/home.css";
import CardDeputados from "../../components/CardDeputados";

export const PartidosDetalhes = () => {
  const [partido, setPartido] = useState([]);
  const [partidoMembro, setPartidoMembro] = useState([]);
  const params = useParams();

  useEffect(() => {
    getPartidosByID(params.id).then((results) => setPartido(results));
  }, [params.id]);

  useEffect(() => {
    getPartidosMembros(params.id).then((results) => setPartidoMembro(results));
  }, [params.id]);

  return (
    <div>
      <div className="container-detalhes">
        <div className="texto1 align-items">
          <h1>{partido.sigla}</h1>
          {partido.urlLogo && 
          <img className="img-urlFoto-partido" src={partido.urlLogo} alt="Imagem do Deputado" />
          }
        </div>
        <div>
         <h2>Membros do partido {partido.sigla}</h2>
        </div>
        <div className="container">
          {partidoMembro.map((item) => (
            <CardDeputados
              key={item.id}
              id={item.id}
              img={item.urlFoto}
              nome={item.nome}
              partido={item.siglaPartido}
            />
          ))}
        </div>
        <div className="aliament">
          <Link to={-1} className="botao">Voltar</Link>
        </div>  
      </div>
    </div>
  );
};
