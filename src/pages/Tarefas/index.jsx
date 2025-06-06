import { useState } from 'react'
import BlocoTarefa from './../../components/BlocoTarefa.jsx'
import '../Tarefas/style.css'

const Tarefas = () => {
  // 🔸 Lista de tarefas (cada uma tem: id, título, texto e se está feita)
  const [tarefas, setTarefas] = useState([
    { id: 1, title: 'banana', text: 'oi', feita: false },
    { id: 2, title: 'palavra', text: 'estou aprendendo react', feita: false },
  ])

  // 🔸 Guarda o ID da tarefa que está sendo arrastada
  const [draggingId, setDraggingId] = useState(null)

  // 🔸 Campos do formulário de criação
  const [novaTarefa, setNovaTarefa] = useState('')
  const [novoConteudo, setNovoConteudo] = useState('')

  // 🔹 Adiciona uma nova tarefa ao enviar o formulário
  const handleSubmit = (event) => {
    event.preventDefault()       // impede recarregamento da página
    event.stopPropagation()      // impede propagação desnecessária do evento

    if (novaTarefa.trim() === '') return // evita adicionar tarefa sem título

    const novaTarefaObj = {
      id: Date.now(),           // id único baseado na hora
      title: novaTarefa,
      text: novoConteudo,
      feita: false,             // começa como não concluída
    }

    // Adiciona a nova tarefa na lista
    setTarefas(prev => [...prev, novaTarefaObj])

    // Limpa os campos do formulário
    setNovaTarefa('')
    setNovoConteudo('')
  }

  // 🔹 Começou a arrastar: salva o ID da tarefa atual
  const handleDragStart = (id) => {
    setDraggingId(id)
  }

  // 🔹 Soltou a tarefa em uma das áreas: atualiza o estado "feita"
  const handleDrop = (e, novaFeita) => {
    e.preventDefault()

    // Atualiza a tarefa com base no draggingId
    setTarefas(prev =>
      prev.map(t =>
        t.id === draggingId ? { ...t, feita: novaFeita } : t
      )
    )

    setDraggingId(null) // limpa o estado após soltar
  }

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>

      {/* FORMULÁRIO */}
      <form onSubmit={handleSubmit} className="tarefas-form">
        <input
          type="text"
          placeholder="Título"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <input
          type="text"
          placeholder="Conteúdo"
          value={novoConteudo}
          onChange={(e) => setNovoConteudo(e.target.value)}
        />
        <button type="submit">Adicionar Tarefa!</button>
      </form>

      {/* ÁREAS DE TAREFAS */}
      <div className="tarefas-container">

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, false)}
          className="tarefas-bloco pendentes"
        >
          <h3>Pendentes</h3>
          {tarefas.filter(t => !t.feita).map(tarefa => (
            <BlocoTarefa
              key={tarefa.id}
              title={tarefa.title}
              text={tarefa.text}
              onDragStart={() => handleDragStart(tarefa.id)}
            />
          ))}
        </div>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, true)}
          className="tarefas-bloco concluidas"
        >
          <h3>Concluídas</h3>
          {tarefas.filter(t => t.feita).map(tarefa => (
            <BlocoTarefa
              key={tarefa.id}
              title={tarefa.title}
              text={tarefa.text}
              onDragStart={() => handleDragStart(tarefa.id)}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Tarefas
