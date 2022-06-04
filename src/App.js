import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { DeputadosDetalhes, Home } from "./pages/";
import Grafico from "./pages/Deputados/Grafico";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<DeputadosDetalhes />} />
          <Route path="*">Pág not found</Route>
          <Route path="/grafico" element={<Grafico />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
