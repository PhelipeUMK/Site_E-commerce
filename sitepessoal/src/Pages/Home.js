import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Display from '../Components/Display.js'
import Banner from '../Components/Banner'
import styled from 'styled-components'

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`

function App() {
  return (
    <div className="App">
      <Conteiner>
        <Header/>
        <Banner/>
        <Display/>
        <Footer/>
      </Conteiner>
    </div>
  );
}

export default App;
