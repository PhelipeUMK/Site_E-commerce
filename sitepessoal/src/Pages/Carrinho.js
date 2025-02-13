import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"
import styled from "styled-components"
import Resume from "../Components/Resume"
import Itens from "../Components/Itens"

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px; 
`

function Carrinho() {
  return (
    <Conteiner>
      <Header />
      <Banner />
      <ContentArea>
        <Itens />
        <Resume />
      </ContentArea>
      <Footer />
    </Conteiner>
  );
}

export default Carrinho;
