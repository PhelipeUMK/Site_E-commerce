import styled from "styled-components"
import { Link } from "react-router-dom"

const NavBarCustom = styled.div`
    height: 7vh;
    background-color: gray;
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
    font-weight: bold;
    text-align: center;
    float: left;
    &:hover {
        background-color: white;
        color: red;
    }
`

function NavBar() {
    return(
        <NavBarCustom>
            <Lista>
                <ItemLista to="/carrinho">Carrinho</ItemLista>
                <ItemLista>Fogões</ItemLista>
                <ItemLista>Geladeiras</ItemLista>
                <ItemLista>Lavadouras</ItemLista>
            </Lista>
        </NavBarCustom>
    )
}

export default NavBar

