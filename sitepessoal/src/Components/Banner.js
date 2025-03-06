import styled from "styled-components"
import Imagem from "../img/Banner.png"

const BannerSite = styled.div`
    background-image: url(${Imagem});
    height: 500px;
    background-size: cover; // Faz a imagem cobrir todo o espaço do container.
    display: flex;
    align-items: center; // Alinha o conteúdo verticalmente ao centro.
    justify-content: center; // Centraliza o conteúdo horizontalmente.
    @media (min-width: 1366px) {

    }
    @media (min-width: 1440px) {

    }
    @media (min-width: 1920px) {

    }
    @media (min-width: 2560px) {

    }
`


function Banner() {
    return(
        <BannerSite/>
    )
}

export default Banner