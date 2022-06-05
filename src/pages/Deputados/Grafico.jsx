import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";

function Grafico() {
  const data = {
    labels: [
      '2018', 
      '2019', // aqui fica os nomes da parte de baixo dos graficos
      '2021',
      '2022'
    ],
    datasets: [{
      label: 'Dados de Gastos',
      data: [300, 50, 100, 200], // aqui dentro a gente faz um loop por ano, exemplo: deputados.map((item) => item.ano)
      backgroundColor: [
        'rgb(255, 0, 0)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(0, 255, 127)'
      ],
      hoverOffset: 4
    }]
  };
 // a const de data estou chamando dentro de chartData 
  return (
    <div >
      <div className="text-center">
        <h1>Gastos feito por Deputados</h1>
      </div>
      <div style={{ width: 700 }}>
        <BarChart chartData={data} /> 
      </div>
      <div style={{ width: 700 }}>
        <LineChart chartData={data} />
      </div>
      <div style={{ width: 700 }}>
        <PieChart chartData={data} />
      </div>
    </div>
  );
}

export default Grafico;