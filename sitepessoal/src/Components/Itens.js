import styled from "styled-components"
import Product from "./Product"
const geladeiras = [
    {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa" },
    {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa" },
    {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa" },
    {imagem: require("../img/geladeira.png"), texto: "Geladeira Muito Boa" }
  ];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 100%;
    border-style: solid;
    border-color:rgb(73, 73, 73);
    margin: 100px 10px;
`

const AddToCart = styled.button`
    width: 80px;
    margin: 2px 10px;
`

const Sumary = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

function Itens() {
    return (
        <Container>
            <AddToCart>add to cart</AddToCart>
            <Sumary>
                <h3>Produto</h3>
                <h3>Preço</h3>
                <h3>Quantidade</h3>
                <h3>Total</h3>
            </Sumary>
                <Product geladeiras = {geladeiras[0]}/>
        </Container>
    )
}

export default Itens