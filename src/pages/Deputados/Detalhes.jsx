import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiDeputados, getDeputadoDetail } from "../../service/deputados";
import "../../css/detalhes.css";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";

export const DeputadosDetalhes = () => {
  const [deputados, setDeputados] = useState([]);

  const params = useParams();

  useEffect(() => {
    getDeputadoDetail(params.id).then((response) => setDeputados(response));
  }, []);

  const data = { 
    labels: [
      '2018', 
      '2019', // aqui dentro a gente faz um loop por ano, exemplo: deputados.map((item) => item.ano)
      '2021',
      '2022'
    ],
    datasets: [{
      label: 'Dados de Gastos',
      data: [300, 50, 100, 200], // aqui dentro a gente faz um loop de gastos, exemplo: deputados.map((item) => item.gastos)
      backgroundColor: [
        'rgb(255, 0, 0)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 255, 127)'
      ],
      hoverOffset: 4
    }]
  };

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
        <div >
          <div className="text-center">
            <h1>Gastos feito por Deputados</h1>
          </div>
          <div style={{ width: 700 }}>
            <BarChart chartData={data} /> 
          </div>
          <div style={{ width: 700 }}>
            <PieChart chartData={data} />
          </div>
        </div>
      </div>
    </>
  );
};
