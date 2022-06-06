import axios from 'axios';

const ApiDeputados = axios.create({
  baseURL: 'https://dadosabertos.camara.leg.br/api/v2',
});

const getAllDeputados = async () => {
  const response = await axios.get(
    'https://dadosabertos.camara.leg.br/api/v2/deputados'
  );

  return response.data;
};

const getDeputadoByid = async (query) => {
  const response = await axios.get(
    'https://dadosabertos.camara.leg.br/api/v2/deputados/?nome=' + query
  );

  return response.data.dados;
};

const getDeputadoDetail = async (id) => {
  const response = await axios.get(
    'https://dadosabertos.camara.leg.br/api/v2/deputados/' + id
  );

  return response.data.dados;
};

const getDeputadoDespesas = async (id) => {
  const response = await axios.get(
    `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?`
  );

  return response.data.dados;
};

export {
  getAllDeputados,
  getDeputadoByid,
  getDeputadoDetail,
  ApiDeputados,
  getDeputadoDespesas,
};
