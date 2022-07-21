import { useEffect, useMemo, useState } from "react";
import { GetResults } from "../services/apiService";
import {
  ICampeonatoResult,
  ICampeonatoTabela,
} from "../services/interfaces/ICampeonatoResult";

export default function useTabelaData(year: string) {
  const [results, setResults] = useState<ICampeonatoResult[]>([]);
  useEffect(() => {
    GetResults(year!).then((data: ICampeonatoResult[]) => {
      setResults(data);
    });
  }, [year]);

  return useMemo(() => {
    return {
      results,
      campeonatoTable: obterDadosPartidas(results),
    };
  }, [results]);
}

function obterDadosPartidas(data: ICampeonatoResult[]): ICampeonatoTabela[] {
  const partidas = data.map((x) => x.partidas).flat();
  const times = partidas
    .map((x) => x.visitante)
    .filter((value, index, self) => self.indexOf(value) === index);
  let result: ICampeonatoTabela[];
  result = times.map((x) => {
    const partidasTime = partidas.filter(
      (y) => y.visitante === x || y.mandante === x
    );
    const ultimaPartida = partidasTime[partidasTime.length - 1];
    const dadosTime =
      ultimaPartida.mandante === x
        ? ultimaPartida.pontuacao_geral_mandante
        : ultimaPartida.pontuacao_geral_visitante;
    dadosTime.saldo_gols =
      dadosTime.total_gols_marcados - dadosTime.total_gols_sofridos;
    return {
      time: x,
      dados: dadosTime,
      strTimeImg: x
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase()
        .replace(" ", "_"),
    } as ICampeonatoTabela;
  });

  return result.sort(
    (a, b) =>
      b.dados.total_pontos - a.dados.total_pontos ||
      b.dados.saldo_gols! - a.dados.saldo_gols! ||
      a.dados.total_derrotas - b.dados.total_derrotas
  );
}
