import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import "../../css/home.css";
import { getAllDeputados, getDeputadoByid } from "../../service/deputados";

export function Home() {
  const [deputados, setDeputados] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);

  let lastIndex = page * perPage;
  let firstIndex = lastIndex - perPage;
  const totalPages = Math.ceil(deputados.length / perPage);

  const paginado =
    deputados < perPage ? deputados : deputados.slice(firstIndex, lastIndex);

  useEffect(() => {
    getAllDeputados().then((response) => setDeputados(response.dados));
  }, []);

  const buscarDeputado = async () => {
    getDeputadoByid(query).then((response) => setDeputados(response));
    setPage(1);
  };

  const nextPage = () => {
    if (page >= totalPages) {
      return null;
    }

    setPage(page + 1);
  };

  const prevPage = () => {
    if (page <= 1) {
      return null;
    }

    setPage(page - 1);
  };

  return (
    <>
      <div className="div-fundo">
        <div className="cover">
          <h1>
            Descubra o que os deputados estão fazendo com o nosso dinheiro!
          </h1>
        </div>
      </div>
      <div className="input-search">
        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
        <input
          type="text"
          placeholder="Buscar deputado por nome"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={buscarDeputado}>Buscar</button>
      </div>
      <div className="container" id="deputados">
        {paginado.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.urlFoto}
            nome={item.nome}
            partido={item.siglaPartido}
          />
        ))}
        <div>
          <button className="botao" onClick={prevPage}>Anterior</button>
          {page} /{totalPages}
          <button className="botao" onClick={nextPage}>Próxima</button>
        </div>
      </div>
    </>
  );
}
