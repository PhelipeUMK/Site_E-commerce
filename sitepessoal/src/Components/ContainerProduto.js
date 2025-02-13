/*import React from "react"
import styled from "styled-components"
import Imagem1 from "../img/geladeira.png"
import Imagem2 from "../img/geladeira.png"
import Imagem3 from "../img/geladeira.png"
import Imagem4 from "../img/geladeira.png"
import Imagem5 from "../img/fogao.png"
import Imagem6 from "../img/fogao.png"
import Imagem7 from "../img/fogao.png"
import Imagem8 from "../img/fogao.png"
import { useState } from "react"

const Detalhes = styled.p`
    color: blue;
    font-weight: bold;
    margin: 5px;
    text-align: left;
`

const Titulo = styled.h2`
    color:rgb(109, 118, 134);
`

const ImageContainer = styled.div`
    height: 38vh;
    width: 18vw;
    background-image: ${(props) => `url(${props.image})`};
    background-size: cover;
`

const Container = styled.div`
    height: 55vh;
    width: 20vw;
    background-color: white;
    margin-top: 40px;
    border-radius: 15px;
    border-color: gray;
    border-style: solid;
`

function ContainerProduto() {
    const [image, setImage] = useState([
        {id: 1, imagem: Imagem1, texto:"Geladeira Muito Boa"},
        {id: 2, imagem: Imagem2, texto:"Geladeira Muito Boa"},
        {id: 3, imagem: Imagem3, texto:"Geladeira Muito Boa"},
        {id: 4, imagem: Imagem4, texto:"Geladeira Muito Boa"},
        {id: 5, imagem: Imagem5, texto:"Fogão Muito Bom"},
        {id: 6, imagem: Imagem6, texto:"Fogão Muito Bom"},
        {id: 7, imagem: Imagem7, texto:"Fogão Muito Bom"},
        {id: 8, imagem: Imagem8, texto:"Fogão Muito Bom"}
    ])

    const produto = image[0]

    return(
        <Container>
            <Titulo>Geladeira Muito Boa</Titulo>
            <ImageContainer image = {produto.imagem}/>
            <Detalhes>Saiba Mais</Detalhes>
        </Container>
    )
}

export default ContainerProduto*/
import React from "react";
import styled from "styled-components";

const Detalhes = styled.p`
  color: blue;
  font-weight: bold;
  margin: 5px;
  text-align: left;
`;

const Titulo = styled.h2`
  color: rgb(109, 118, 134);
`;

const ImageContainer = styled.div`
  height: 38vh;
  width: 18vw;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
`;

const Container = styled.div`
  height: 55vh;
  width: 20vw;
  background-color: white;
  margin-top: 40px;
  border-radius: 15px;
  border-color: gray;
  border-style: solid;
`;

function ContainerProduto({ produto }) {
  return (
    <Container>
      <Titulo>{produto.texto}</Titulo>
      <ImageContainer image={produto.imagem} />
      <Detalhes>Saiba Mais</Detalhes>
    </Container>
  );
}

export default ContainerProduto;
