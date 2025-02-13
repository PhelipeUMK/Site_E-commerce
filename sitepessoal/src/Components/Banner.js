import styled from "styled-components"
import Imagem from "../img/Banner.png"

const BannerSite = styled.div`
    background-image: url(${Imagem}); // Define a imagem de fundo.
    height: 500px; // Altura fixa do banner.
    background-size: cover; // Faz a imagem cobrir todo o espaço do container.
    display: flex; // Define um layout flexbox.
    align-items: center; // Alinha o conteúdo verticalmente ao centro.
    justify-content: center; // Centraliza o conteúdo horizontalmente.
`


function Banner() {
    return(
        <BannerSite/>
    )
}

export default Banner