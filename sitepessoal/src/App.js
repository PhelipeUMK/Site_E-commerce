import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Home from './Pages/Home.js'
import Carrinho from './Pages/Carrinho.js'

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
{}


function App() {
  return (
    <Router>
      <Conteiner>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/carrinho" element={<Carrinho/>} />
        </Routes>
      </Conteiner>
    </Router>
  );
}

export default App;
