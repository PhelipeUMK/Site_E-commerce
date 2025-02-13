import React, { useState } from "react"
import styled from "styled-components"

const ProductContainer = styled.div`
    width: 480px;
    height: 200px;
    border-radius: 10px;
    border: solid;
    border-color: black;
    margin: 5px;
    display: flex;
    justify-content: space-between;
`

const ImageProduct = styled.figure`
    margin: 2px;

    img {
        max-width: 100%; /* Para garantir que a imagem não ultrapasse o tamanho do contêiner */
        height: auto;    /* Mantém a proporção da imagem */
        width: 200px;    /* Tamanho fixo, você pode alterar para o que precisar */
    }
`

const Price = styled.h4`
    margin: 20px;
`

const PriceTotal = styled.h4`
    margin: 20px;
`

const QuantityInput = styled.input`
    width: 35px;
    height: 20px;
    margin: 20px 50px;
`

function Product({geladeiras}) {
    const [quantity, setQuantity] = useState(1)
    const price = 1200

    // Função para atualizar a quantidade
    const handleQuantityChange = (e) => {
        setQuantity(Number(e.target.value))
    }

    // Calculando o preço total
    const priceTotal = price * quantity

    return (
        <ProductContainer>
            <ImageProduct>
                <img src={geladeiras.imagem}/>
                <figcaption>Produto</figcaption>
            </ImageProduct>
            <Price>R$ {price.toFixed(2)}</Price>
            <QuantityInput type="number" value={quantity} onChange={handleQuantityChange} min="1"/>
            <PriceTotal>R$ {priceTotal.toFixed(2)}</PriceTotal>
        </ProductContainer>
    )
}

export default Product