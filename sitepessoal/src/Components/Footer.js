import styled from "styled-components"

const FooterCustom = styled.footer`
    height: 20vh;
    background-color: #aaaaaa;
    margin-top: auto;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
`

const BlocoTexto = styled.div`
    margin: 10px;
    height: 15vh;
    width: 140px;
`

function Footer() {
    return(
        <FooterCustom>
            <BlocoTexto>
                Conheça-nos<br/>Sobre Nós<br/>Comuniade<br/>Acessibilidade
            </BlocoTexto>
            <BlocoTexto>
                Vendas<br/>Proteja Sua Marca<br/>Seja Um Parceiro<br/>Anuncie Conosco
            </BlocoTexto>
            <BlocoTexto>
                Sua Conta<br/>Frete<br/>Devoluções<br/>Dispositivos
            </BlocoTexto>
        </FooterCustom>
    )
}

export default Footer