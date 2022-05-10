import { useEffect } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Comprar Elden Ring</td>
            <td className="withdraw">-R$250,99</td>
            <td>Games</td>
            <td>20/03/2022</td>
          </tr>

          <tr>
            <td>Freela website</td>
            <td className="deposit">R$1500,99</td>
            <td>Trabalho</td>
            <td>20/03/2022</td>
          </tr>

          <tr>
            <td>Comprar Dark Souls</td>
            <td className="deposit">R$100,99</td>
            <td>Games</td>
            <td>20/03/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
