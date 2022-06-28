import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DeputadosDetalhes, Home, PartidosDetalhes, PartidosList, PageNotFound } from "./pages/";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<DeputadosDetalhes />} />
          <Route path="/partidos" element={<PartidosList />} />
          <Route path="/partidos/:id" element={<PartidosDetalhes />} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
