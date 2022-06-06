import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../../css/detalhes.css';
import {
  getDeputadoDespesas,
  getDeputadoDetail,
} from '../../service/deputados';
import { BarChart } from '../../components/Charts';

export const DeputadosDetalhes = () => {
  const [deputados, setDeputados] = useState([]);
  const [despesas, SetDespesas] = useState([]);
  const params = useParams();

  console.log(despesas);

  // const dados = [];
  // for (let despesa of despesas) {
  //   dados.push({ data: despesa.ano + despesa.mes, valor: valorDocumento });
  // }

  const data = {
    labels: despesas.map((item) => item.mes),
    datasets: [
      {
        label: 'Dados de Gastos',
        data: despesas.map((item) => item.valorDocumento),
        backgroundColor: [
          'rgb(255, 0, 0)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(0, 255, 127)',
          'rgb(0, 0, 255)',
        ],
        borderColor: [
          'rgb(255, 0, 0)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(0, 255, 127)',
          'rgb(0, 0, 255)',
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
        <h1 className="mt-3">{deputados.nomeCivil}</h1>
        <div sm={6} md={4} xl={3}>
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
        <div>
          <Link to={-1} className="botao">
            Voltar
          </Link>
        </div>
        <div md={6}>
          <div>
            <h1>Gastos feitos pelo deputado {deputados.nomeCivil}</h1>
          </div>
          <div style={{ width: 700 }}>
            <BarChart chartData={data} />
          </div>
        </div>
      </div>
    </>
  );
};
