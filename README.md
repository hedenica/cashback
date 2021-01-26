<h1 align="center">
    <img alt="Boticário" src="./src/assets/img/read-img.png" width="250px" />
</h1>

<h1 align="center">
  Projeto: 💰 Cashback Controller
</h1>

<p align="center">“Para quem fica melhor a cada dia, ficar pronto é utopia”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/hedenica/cashback?color=%2304D361">

  <a href="https://linkedin.com/in/hedenica">
    <img alt="Made by Hedênica" src="https://img.shields.io/badge/made%20by-Hedênica-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/hedenica/cashback/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/hedenica/cashback?style=social">
  </a>
</p>

</br>
</br>

<a href="https://cashback-controller-boticario.netlify.app/">
  🤩 https://cashback-controller-boticario.netlify.app/
</a>

----

## ℹ️  Informações Básicas:

A aplicação tem como objetivo simular as funcionalidades reais de cashback, da seguinte forma: 

- Um usuário novo pode se cadastrar;
- Um usuário pode realizar um login;
- Um usuário pode cadastrar uma nova compra;
- Um usuário pode visualizar sua compra cadastrada e os detalhes;
- Um usuário pode consultar seu saldo de cashback aprovado.

## ⚠️ Regras de Cashback:

> Compras até `R$ 50,00` não geram cashback e o status `REPROVADO` é aplicado automaticamente.
> Compras entre `R$ 50,01` e `R$ 500,00` recebem o status `APROVADO`.
> Compras acima de `R$ 500,01` recebem o status de `EM ANÁLISE`.


| ﹪ Porcentagem | 💸  Valores de Compra |
|-------------	|-----------------------	|
| 5%          	| R$50,00 até R$200,00  	|
| 10%         	| R$200,01 até R$500,00 	|
| 15%         	| acima de R$500,01     	|


## 📝 Scripts Disponíveis

Dentro do repositório do projeto, você pode rodar:

### `yarn start`

Para rodar a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no browser caso não abra automáticamente.

### `yarn test`

Dispara os testes da aplicação, que foram feitos com: 
- React Library Test
- Jest

