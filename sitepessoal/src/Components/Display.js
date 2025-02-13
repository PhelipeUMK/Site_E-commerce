/*import Linhas from "./Linhas"
import styled from "styled-components"

const Container = styled.div`
    height: 150vh;
`

function Display() {
    return(
        <Container>
            <Linhas/>
            <Linhas/>
        </Container>
    )
}

export default Display*/

import React from "react";
import styled from "styled-components";
import Linhas from "./Linhas";

const Container = styled.div`
  height: 150vh;
`;

const geladeiras = [
  {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa" },
  {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa" },
  {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa" },
  {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa" }
];

const fogoes = [
    {imagem: require("../img/fogao.png"), texto: "Fogão Muito Bom" },
    {imagem: require("../img/fogao.png"), texto: "Fogão Muito Bom" },
    {imagem: require("../img/fogao.png"), texto: "Fogão Muito Bom" },
    {imagem: require("../img/fogao.png"), texto: "Fogão Muito Bom" }
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
