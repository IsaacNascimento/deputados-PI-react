import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../css/detalhes.css";
import {
  getDeputadoDespesas,
  getDeputadoDetail,
} from "../../service/deputados";
import { BarChart } from "../../components/Charts";
import {IoLogoUsd} from 'react-icons/io5';

export const DeputadosDetalhes = () => {
  const [deputados, setDeputados] = useState([]);
  const [despesas, SetDespesas] = useState([]);
  const params = useParams();

  const data = {
    labels: despesas.map(item => item.mes),
    datasets: [
      {
        label: "Dados de Gastos",
        data: despesas.map(item => item.valorDocumento), 
        backgroundColor: [
          "rgb(255, 0, 0)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(0, 255, 127)",
          "rgb(0, 0, 255)",
          "rgb(0, 0, 0)",
          "rgb(138, 43, 226)",
          "rgb(255, 255, 0)",
          "rgb(255, 69, 0)",
          "rgb(255, 20, 147)",
          "rgb(123, 104, 238)",
          "rgb(139, 69, 19)",
          "rgb(154, 205, 50)",
          "rgb(0, 255, 255)",
          "rgb(128, 128, 128)"
        ],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    getDeputadoDetail(params.id).then((response) => setDeputados(response));
  }, [params.id]);

  useEffect(() => {
    getDeputadoDespesas(params.id).then((response) => SetDespesas(response));
  }, [params.id]);

  return (
    <>
      <div className="container-detalhes">
        <div className="texto1">
          <h1>{deputados.nomeCivil}</h1>
        </div>
        <div >
          <h4 className="aliamento">Munícipio/Origem: {deputados.municipioNascimento}/{deputados.ufNascimento}</h4>
          <h4 className="aliamento">Escolaridade: {deputados.escolaridade}</h4>
          <h4 className="aliamento">Data de Nascimento: {deputados.dataNascimento}</h4>
          <h4 className="aliamento">Estado eleito(a): {deputados.ultimoStatus?.siglaUf}</h4>
          <h4 className="aliamento">Partido afiliado(a): {deputados.ultimoStatus?.siglaPartido}</h4>
        <div className="aliamento">
          <Link to={-1} className="botao">Voltar</Link>
        </div>
          <img className="img-detalhes" variant="top" src={deputados.ultimoStatus?.urlFoto} alt="Imagem deputado Detalhe"/>
        </div>    
        <div md={6}>
          <div className="textosub">
            <h1><IoLogoUsd className="text-primary" /> Gastos feito pelo Deputado <IoLogoUsd /></h1>
          </div>
          <div className="grafico" style={{ width: 700 }}>
            <BarChart chartData={data} />
          </div>
        </div>
      </div>
    </>
  );
};
