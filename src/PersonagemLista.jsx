import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function Personagem() {
  const [personagem, setPersonagem] = useState('')

  const bonecas = [
      'Alice','Aya','Cirno','Iku','Komachi',
      'Marisa','Meiling','Patcholi','Reimu','Reisen',
      'Remilia','Sakuya','Sanae','Suika','Suwako',
      'Tenshi','Utsuho','Youmu','Yukari','Yuyuko'
    ]
  
  return (
    <>
              {/*MENU DE ESCOLHA DE PERSONAGEM*/}
              <img src={"/PNG/"+personagem+".png"} alt={personagem} />
              <label htmlFor='personagem'>Selecione a personagem: </label>
              <select id="personagem" name="char" value={personagem} onChange={(e) => setPersonagem(e.target.value)}>
                <option value=""> -- Escolha uma personagem -- </option>
                {bonecas.map((pers,index) => <option key={index} value={pers.toLowerCase()}>{pers}</option> )}
              </select>
    </>
  )
}

export default Personagem
