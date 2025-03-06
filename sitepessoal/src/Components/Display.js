import React from "react";
import styled from "styled-components";
import Linhas from "./Linhas";

const Container = styled.div`
  height: 150vh;
  @media (min-width: 1366px) {

  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
  @media (min-width: 2560px) {

  }
`;

const geladeiras = [
  {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa", preco: 1200},
  {imagem: require("../img/geladeira2.jpeg"), texto: "Geladeira Muito Boa", preco: 1300},
  {imagem: require("../img/geladeira3.jpeg"), texto: "Geladeira Muito Boa", preco: 1400},
  {imagem: require("../img/geladeira4.jpeg"), texto: "Geladeira Muito Boa", preco: 1300}
];

const fogoes = [
    {imagem: require("../img/fogao.png"), texto: "Fogão Muito Bom", preco: 800},
    {imagem: require("../img/fogao2.jpeg"), texto: "Fogão Muito Bom", preco: 900},
    {imagem: require("../img/fogao3.jpeg"), texto: "Fogão Muito Bom", preco: 1600},
    {imagem: require("../img/fogao4.jpeg"), texto: "Fogão Muito Bom", preco: 1100}
]

function Display() {
  return (
    <Container>
      <Linhas produtos={geladeiras} />
      <Linhas produtos={fogoes} />
    </Container>
  );
}

export default Display;
