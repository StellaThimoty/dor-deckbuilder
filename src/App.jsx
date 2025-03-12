import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Personagem from './PersonagemLista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div className="outer_Builder">
              {/*MENU DE ESCOLHA DE PERSONAGEM*/}
              <Personagem/>
          </div>
    </>
  )
}

export default App
