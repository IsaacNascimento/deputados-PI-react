import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getPartidosByID } from "../../service/partidos";

export const PartidosDetalhes = () => {
  const [partido, setPartido] = useState([]);

  const [partidoMembro, setPartidoMembro] = useState([]);
  console.log(partidoMembro)
  const params = useParams();

  useEffect(() => {
      getPartidosByID(params.id).then((results) => setPartido(results));
  }, [])

  return (
    <div>
        <div className="container-detalhes">
          <div className="texto1">
            <h1>{partido.sigla}</h1>
            <img src={partido.urlLogo} alt="logo" />
            <img src={partido.uriPartido}  alt="" />
          </div>
        </div>
        <div>
        {partidoMembro.map((item) => (
              <Col className="mb-3" md={2} key={item.id}>
                <Link to={"/atores/" + item.id}>
                  <Card title={item.name}>
                    <Card.Img
                      variant="top"
                      src={item.urlFoto}/>
                  </Card>
                </Link>
              </Col>
            ))}
        </div>
    </div>
  )
};
