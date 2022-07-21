import React from "react";
import { ICampeonatoTabela } from "../services/interfaces/ICampeonatoResult";

export interface ITabelaProps {
  data: ICampeonatoTabela[];
}

export default function Tabela({ data }: ITabelaProps) {
  console.log(data);
  return (
    <div className="text-center flex justify-center">
      <table width="70%">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th title="Pontos">P</th>
            <th title="Vitorias">V</th>
            <th title="Empates">E</th>
            <th title="Derrotas">D</th>
            <th title="Gols Feitos">GP</th>
            <th title="Gols Sofridos">GC</th>
            <th title="Saldo de Gols">S</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr key={index}>
              <td width="10%">{index + 1}</td>
              <td>
                <div className="flex  items-center space-x-5">
                  <img alt="Imagem do time" src={`/img/${d.strTimeImg}.png`} />{" "}
                  <span>{d.time}</span>
                </div>
              </td>
              <td width="5%">{d.dados.total_pontos}</td>
              <td width="5%">{d.dados.total_vitorias}</td>
              <td width="5%">{d.dados.total_empates}</td>
              <td width="5%">{d.dados.total_derrotas}</td>
              <td width="5%">{d.dados.total_gols_marcados}</td>
              <td width="5%">{d.dados.total_gols_sofridos}</td>
              <td width="5%">{d.dados.saldo_gols}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
