
import './App.css'
import { Banner } from './components/Banner'
import { Depoimentos } from './components/Depoimentos'
import { Formulario } from './components/Formulario'
import { MenuPadrao } from './components/templates/MenuPadrao'
import { Servicos } from './components/Servicos'
import { Sobre } from './components/Sobre'
import { FooterPadrao } from './components/templates/FooterPadrao'

function App() {
  return (
    <>
      <MenuPadrao />
      <Banner />
      <Servicos />
      <Sobre />
      <Depoimentos />
      <Formulario />
      <FooterPadrao />
    </>
  )
}

export default App
