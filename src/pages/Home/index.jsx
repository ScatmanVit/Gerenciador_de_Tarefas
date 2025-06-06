import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.css"

const Home = () => {
   const navigate = useNavigate()
   
   const handleCLick = () => {navigate('/Contato')}
   return (
   <div className='container'>
      <h1>Vá para a página de contato!</h1>
         <button className="link-contato" onClick={handleCLick}>
            Aperte aqui
         </button>
   </div>
   )
}

export default Home
