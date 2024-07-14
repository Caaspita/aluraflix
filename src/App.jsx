import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NuevoVideo from './Pages/NuevoVideo'
import Page404 from './Pages/Page404'
import Header from './Components/Header'
import GlobalStyles from './Components/GlobalStyles'
import styled from 'styled-components'
import Footer from './Components/Footer'

const FondoEstilizado = styled.div`
  height: 100vh;
 `


function App() {

  return (
    <Router>
      <GlobalStyles />
      <FondoEstilizado>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Upload' element={<NuevoVideo />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
        <Footer />
      </FondoEstilizado>
    </Router>

  )

}

export default App
