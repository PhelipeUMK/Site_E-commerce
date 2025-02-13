/*import styled from "styled-components"
import ContainerProduto from "./ContainerProduto"

const LinhaCustom = styled.div`
    height: 60vh;
    border-radius: 8px;
    margin: 8px;
    justify-content: space-around;
    display: flex;
`

function Linhas() {
    return(
        <LinhaCustom>
            <ContainerProduto/>
            <ContainerProduto/>
            <ContainerProduto/>
            <ContainerProduto/>
        </LinhaCustom>
    )
}

export default Linhas*/

import React from "react";
import styled from "styled-components";
import ContainerProduto from "./ContainerProduto";

const LinhaCustom = styled.div`
  height: 60vh;
  border-radius: 8px;
  margin: 8px;
  justify-content: space-around;
  display: flex;
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
