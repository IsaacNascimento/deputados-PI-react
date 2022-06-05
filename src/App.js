import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DeputadosDetalhes, Home } from "./pages/";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<DeputadosDetalhes />} />
          <Route path="*">Pág not found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
