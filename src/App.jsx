import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <style type="text/css">@import url('CSS/main.css');</style>

          <div class="outer_Builder">
              {/*MENU DE ESCOLHA DE PERSONAGEM*/}
              <label for="personagem">Selecione a personagem:</label>
              <select id="personagem" name="char">
                  <option value="alice">Alice</option>
                  <option value="aya">Aya</option>
                  <option value="cirno">Cirno</option>
              </select>
          </div>
    </>
  )
}

export default App
