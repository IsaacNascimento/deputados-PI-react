import axios from "axios";

const getAllPartidos = async () => {
   const response = await axios.get(
       "https://dadosabertos.camara.leg.br/api/v2/partidos?pagina=1&itens=60"
   );
   return response.data.dados;
};

const getPartidoByName = async (query) => {
    const response = await axios.get(
      "https://dadosabertos.camara.leg.br/api/v2/deputados/sigla=" + query
    );
  
    return response.data.dados;
  };

export {getAllPartidos, getPartidoByName};