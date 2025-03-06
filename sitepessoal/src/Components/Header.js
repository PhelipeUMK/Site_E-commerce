import styled from "styled-components"
import NavBar from "./NavBar"
import BarraPesquisa from "./BarraPesquisa"

const HeaderCustom = styled.header`
height: 20vh;
background-color: #0099ff;
display: flex;
flex-direction: column;
@media (min-width: 1366px) {

}
@media (min-width: 1440px) {

}
@media (min-width: 1920px) {

}
@media (min-width: 2560px) {

}
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
