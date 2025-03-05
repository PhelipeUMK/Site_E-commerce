import styled from "styled-components"
import { Link } from "react-router-dom"
import Imagem from "../img/carrinho_icon.png"

const NavBarCustom = styled.div`
    height: 7vh;
    background-color: #aaaaaa;
    display: flex;
    justify-content: left;
    margin-top: auto;
`

const Lista = styled.ul`
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;
`

const ItemLista = styled(Link)`
    color: rgb(0, 0, 0);
    width: 200px;
    line-height: 7vh;
    font-family: fantasy;
    text-transform: uppercase;
    text-align: center;
    text-decoration: none;
    float: left;
    &:hover {
        text-decoration: underline;
        }
`

const Icone = styled(Link)`
    background-image: url(${Imagem});
    width: 40px;
    height: 40px; // Altura fixa do banner.
    background-size: cover;
    margin-left: auto;
    margin-right: 20px;
    &:hover {
        background-color: white;
        color: red;
    }
`

function NavBar() {
    return(
        <NavBarCustom>
            <Lista>
                <ItemLista>Fogões</ItemLista>
                <ItemLista>Geladeiras</ItemLista>
                <ItemLista>Lavadouras</ItemLista>
            </Lista>
            <Icone to="/carrinho"/>
        </NavBarCustom>
    )
}

export default NavBar

