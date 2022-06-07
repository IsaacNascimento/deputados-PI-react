import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import apiFilmes from "../../services/apiFilmes";

const FilmesDetalhes = () => {
  const params = useParams();

  const [filmes, setFilme] = useState({});
  const [elenco, setElenco] = useState([]);

  useEffect(() => {
    apiFilmes
      .get("movie/" + params.id + "?language=pt-BR")
      .then((resultado) => {
        setFilme(resultado.data);
      });
    apiFilmes
      .get("/movie/" + params.id + "/credits?language=pt-BR")
      .then((resultado) => {
        setElenco(resultado.data.cast);
      });
  }, []);

  // dentro de col pra chama alguma Api tenho que: filmes.oque eu for chamar
  return (
    <div>
      {!filmes.id && <h1>Carregando... Aguarde!</h1>}
      {filmes.id && (
        <div>
          <h1>{filmes.title}</h1>

          <Row>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500" + filmes.poster_path}
                />
              </Card>
            </Col>
            <Col md={8}>
              <p>
                <strong>Título Original: </strong>
                {filmes.original_title}
              </p>
              <p>
                <strong>Popularidade: </strong>
                {filmes.popularity}
              </p>
              <p>
                <strong>Data de Lançamento: </strong>
                {filmes.release_date}
              </p>
              <p>
                <strong>Orçamento: </strong>
                {filmes.budget}
              </p>
              <p>
                <strong>Gêneros: </strong>
                {filmes.genres.map((item) => (
                  <span>{item.name}. </span>
                ))}
              </p>
              <p>
                <strong>Empresas do Filme: </strong>
                {filmes.production_companies.map((item) => (
                  <span>{item.name}/ </span>
                ))}
              </p>
              <p>
                <strong>Sinopse: </strong>
                {filmes.overview}
              </p>
              <Link className="btn btn-dark" to={-1}>
                Voltar
              </Link>
            </Col>
          </Row>
          <h1>Atores</h1>
          <Row>
            {elenco.map((item) => (
              <Col className="mb-3" md={2} key={item.id}>
                <Link to={"/atores/" + item.id}>
                  <Card title={item.name}>
                    <Card.Img
                      variant="top"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + item.profile_path
                      }
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default FilmesDetalhes;
