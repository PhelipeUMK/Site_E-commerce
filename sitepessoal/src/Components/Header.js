import styled from "styled-components"
import NavBar from "./NavBar"
import BarraPesquisa from "./BarraPesquisa"

const HeaderCustom = styled.header`
height: 20vh;
background-color: blue;
display: flex;
flex-direction: column;
`



function Header() {
    return(
        <HeaderCustom>
            <BarraPesquisa/>
            <NavBar/>
        </HeaderCustom>
    )
}

export default Header
