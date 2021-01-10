import React from 'react';
import { Percent, DollarSign } from 'react-feather';

import { Container, TableContainer } from './styles';

const Table = () => (
  <TableContainer>
    <h3>Regras de Cashback</h3>
    <Container>
      <thead>
        <tr>
          <td>
            <Percent />
            Percentagem
          </td>
          <td>
            <DollarSign />
            Valores de Compra
          </td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>5%</td>
          <td>R$50,00 até R$200,00</td>
        </tr>
        <tr>
          <td>10%</td>
          <td>R$200,01 até R$500,00</td>
        </tr>
        <tr>
          <td>15%</td>
          <td>R$500,01</td>
        </tr>
      </tbody>
    </Container>
    <span>* Compras acima de R$501,00 ficam em análise por 2 dias úteis</span>
  </TableContainer>
);

export default Table;
