import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getPartidosByID } from "../../service/partidos";

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
          <div className="texto1">
            <img src={partido.urlLogo} alt="logo" />
          </div>
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
  )
};
