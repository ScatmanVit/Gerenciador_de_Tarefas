import { useState } from 'react'
import BlocoTarefa from './../../components/BlocoTarefa'

const Tarefas = () => {
   // Estado da lista de tarefas
   const [tarefas, setTarefas] = useState([
      { title: 'banana', text: 'oi' },
      { title: 'palavra', text: 'estou aprendendo react' },
   ])

   // Estado dos inputs
   const [novaTarefa, setNovaTarefa] = useState('')
   const [novoConteudo, setNovoConteudo] = useState('')

   // Função chamada ao enviar o formulário
   const handleSubmit = (e) => {
      e.preventDefault()

      if (novaTarefa.trim() === '') return

      const novaTarefaObj = {
         title: novaTarefa,
         text: novoConteudo,
      }

      // Atualiza a lista
      setTarefas((prevTarefas) => [...prevTarefas, novaTarefaObj])

      // Limpa os campos
      setNovaTarefa('')
      setNovoConteudo('')
   }

   return (
      <div>
         <h3>Suas tarefas:</h3>

         <form onSubmit={handleSubmit}>
            <label htmlFor="novaTarefa">Título da tarefa:</label>
            <input
               id="novaTarefa"
               type="text"
               value={novaTarefa}
               onChange={(e) => setNovaTarefa(e.target.value)}
            />

            <label htmlFor="novoConteudo">Conteúdo da tarefa:</label>
            <input
               id="novoConteudo"
               type="text"
               value={novoConteudo}
               onChange={(e) => setNovoConteudo(e.target.value)}
            />

            <button type="submit">Postar nova tarefa</button>
         </form>

         {/* Renderiza as tarefas */}
         {tarefas.map((tarefa, index) => (
            <BlocoTarefa key={index} title={tarefa.title} text={tarefa.text} />
         ))}
      </div>
   )
}

export default Tarefas
