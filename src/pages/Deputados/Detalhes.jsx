import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiDeputados, getDeputadoDetail } from "../../service/deputados";
import "../../css/detalhes.css";

export const DeputadosDetalhes = () => {
  const [deputados, setDeputados] = useState([]);

  const params = useParams();

  useEffect(() => {
    getDeputadoDetail(params.id).then((response) => setDeputados(response));
  }, []);

  return (
    <>
      <div className="container-detalhes">
        <h1 className="mt-3">{deputados.nomeCivil}</h1>
        <div>
          <h4>
            Munícipio/Origem: {deputados.municipioNascimento}/
            {deputados.ufNascimento}
          </h4>
          <h4>Escolaridade: {deputados.escolaridade}</h4>
          <h4>Data de Nascimento: {deputados.dataNascimento}</h4>
          <h4>Estado eleito(a): {deputados.ultimoStatus?.siglaUf}</h4>
          <h4>Partido afiliado(a): {deputados.ultimoStatus?.siglaPartido}</h4>
          <img
            className="img-detalhes"
            variant="top"
            src={deputados.ultimoStatus?.urlFoto}
            alt="Imagem deputado Detalhe"
          />
        </div>
      </div>
    </>
  );
};
