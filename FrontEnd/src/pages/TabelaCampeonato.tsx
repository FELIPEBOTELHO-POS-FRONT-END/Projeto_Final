import { Header } from "../components/Header";
import { useParams, useNavigate } from "react-router-dom";
import Tabela from "../components/Tabela";
import { generateArrayWithNumbers } from "../helpers/ArrayHelpers";
import useTabelaData from "../hooks/useCampeonatoData";

const anos = generateArrayWithNumbers(2003, 2015);

export default function TabelaCampeonato() {
  const { year } = useParams<{ year: string }>();
  const navigate = useNavigate();
  const { campeonatoTable } = useTabelaData(year!);

  return (
    <div>
      <Header>react-campeonato-brasileiro</Header>
      <div className="container mx-auto pt-5 mt-5">
        <div className="flex justify-center items-center">
          <select
            title="Select Year"
            value={year}
            onChange={(e) => navigate(`/campeonato/${e.target.value}`)}
          >
            {anos.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </div>
        <div className="text-center p-3 m-3 ">
          <h1 className="font-bold text-3xl">
            Campeonato Brasileiro de {year}
          </h1>
          <h3 className="font-semibold text-xl p-5">Classificação</h3>
        </div>
        <Tabela data={campeonatoTable} />
      </div>
    </div>
  );
}
