import React from "react";
import styled from "styled-components";

const Detalhes = styled.p`
  color: blue;
  font-weight: bold;
  margin: 5px;
  text-align: left;
`;

const RodapeContainer = styled.div`
  display: flex;
  background-color: #aaaaaa;
  height: 39px;
  border-radius: 0 0 13px 13px ;

  align-items: center;
`

const AdicionarCarrinho = styled.button`
  width: 80px;
  height: 30px;
  margin: 4px;
  background-color: #00aa00;
  color: #dddddd;
  border-radius: 5px;
  margin-left: auto;
  border: none;
  font-size: 0.9em;
  @media (min-width: 1366px) {

  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
  @media (min-width: 2560px) {

  }
  &:hover {
    background-color: #00dd00;
    color: #ffffff;
    cursor: pointer;
  }
`;

const PrecoProduto = styled.h3`
  color: #222222;
  margin-right: auto;
  margin-left: 25px;
  @media (min-width: 1366px) {

  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
  @media (min-width: 2560px) {

  }
`

const Titulo = styled.h2`
  color: rgb(109, 118, 134);
`;

const ImageContainer = styled.div`
  height: 38vh;
  width: 18vw;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  @media (min-width: 1366px) {

  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
  @media (min-width: 2560px) {

  }
`;

const Container = styled.div`
  height: 55vh;
  width: 20vw;
  background-color: white;
  margin-top: 40px;
  border-radius: 15px;
  border-color: gray;
  border-style: solid;
  @media (min-width: 1366px) {

  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
  @media (min-width: 2560px) {

  }
`;

function ContainerProduto({ produto }) {
  return (
    <Container>
      <Titulo>{produto.texto}</Titulo>
      <ImageContainer image={produto.imagem} />
      <RodapeContainer>
        <PrecoProduto>R${produto.preco},00</PrecoProduto>
        <AdicionarCarrinho>+ Carrinho</AdicionarCarrinho>
      </RodapeContainer>
    </Container>
  );
}

export default ContainerProduto;
