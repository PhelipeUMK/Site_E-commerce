import React from "react";
import styled from "styled-components";
import ContainerProduto from "./ContainerProduto";

const LinhaCustom = styled.div`
  height: 60vh;
  border-radius: 8px;
  margin: 8px;
  justify-content: space-around;
  display: flex;
  @media (min-width: 1366px) {

  }
  @media (min-width: 1440px) {

  }
  @media (min-width: 1920px) {

  }
  @media (min-width: 2560px) {

  }
`;

function Linhas({ produtos }) {
  return (
    <LinhaCustom>
      {produtos.map((produto) => (
        <ContainerProduto produto={produto} />
      ))}
    </LinhaCustom>
  );
}

export default Linhas;
