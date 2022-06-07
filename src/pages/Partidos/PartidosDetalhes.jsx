import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getPartidosByID } from "../../service/partidos";
import "../../css/detalhes.css";

export const PartidosDetalhes = () => {
  const [partido, setPartido] = useState([]);
  console.log(partido)
  const [partidoMembro, setPartidoMembro] = useState([]);
  console.log(partidoMembro)
  const params = useParams();

  useEffect(() => {
      getPartidosByID(params.id).then((results) => setPartido(results));
  }, [])

  return (
    <div>
        <div className="container-detalhes">
        <div className="texto1 align-items">
          <h1>{partido.sigla}</h1>
          <img src={partido.urlLogo}/> 
        </div>
        <div>
        {partidoMembro.map((item) => (
          <Col className="mb-3" md={2} key={item.id}>
            <Link to={"/detalhes/" + item.id}>
              <Card title={item.nome}>
                <Card.Img
                  variant="top"
                  src={item.urlFoto}/>
              </Card>
            </Link>
          </Col>
        ))}
        </div>
    </div>
  </div>  
  )
};
