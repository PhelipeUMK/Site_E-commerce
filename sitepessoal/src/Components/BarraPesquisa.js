import styled from "styled-components"

const BarraPesquisaContainer = styled.div`
    display: flex;
    align-self: center;
    margin: 20px;
    @media (min-width: 1366px) {

    }
    @media (min-width: 1440px) {

    }
    @media (min-width: 1920px) {

    }
    @media (min-width: 2560px) {

    }
`

const Barra = styled.input`
    border-radius: 8px;
    width: 50vw;
    height: 25px;
    align-self: center;
    @media (min-width: 1366px) {

    }
    @media (min-width: 1440px) {

    }
    @media (min-width: 1920px) {

    }
    @media (min-width: 2560px) {

    }
`

const LoginButton = styled.button`
    border: solid 3px gray;
    background-color: #fff;
    color: #000000;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.2s ease 0s;
    height: 40px;
    border-radius: 8px;
    margin: 5px;
    @media (min-width: 1366px) {

    }
    @media (min-width: 1440px) {

    }
    @media (min-width: 1920px) {

    }
    @media (min-width: 2560px) {

    }
    &:hover{
        cursor: pointer;
        background-color: black;
        color: #fff;
    }
`

const BotaoPesquisar = styled.button`
    border: solid 3px gray;
    background-color: #fff;
    color: #000000;
    font-weight: bold;
    text-transform: uppercase;
    transition: all 0.2s ease 0s;
    height: 40px;
    border-radius: 8px;
    margin: 5px;
    @media (min-width: 1366px) {

    }
    @media (min-width: 1440px) {

    }
    @media (min-width: 1920px) {

    }
    @media (min-width: 2560px) {

    }
  &:hover {
    cursor: pointer;
    background-color: black;
    color: #fff;
  }
`;

function BarraPesquisa() {
    return(
        <BarraPesquisaContainer>
            <Barra/>
            <BotaoPesquisar>Pesquisar</BotaoPesquisar>
            <LoginButton>Login</LoginButton>
        </BarraPesquisaContainer>
    )
}

export default BarraPesquisa