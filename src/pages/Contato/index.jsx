import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contato = () => {
   const navigate = useNavigate()
   const handleTarefas = () => {
      navigate('/Tarefas')
   }
   return (
      <div>
         <p>Olá!!</p>
         <button onClick={handleTarefas}>
            Verifique suas tarefas do dia
         </button>
      </div>
   )
}

export default Contato
