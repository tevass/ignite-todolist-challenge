import { ChangeEvent, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi'

import styles from '../styles/taskBar.module.css'

interface TaskBarProps {
  onCreateTask: (task: string) => void;
}

export function TaskBar({ onCreateTask }: TaskBarProps) {

  const [task, setTask] = useState('')

  function handleChangeTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function handleCreateTask() {
    if(!task.trim()) return
    onCreateTask(task)
    setTask('')
  }

  return (
    <div className={styles.taskBar}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={handleChangeTask}
        className={styles.taskInput}
      />

      <button className={styles.taskButton} onClick={handleCreateTask}>
        <span>
          Criar
        </span>
        <FiPlusCircle size={20} />
      </button>
    </div>
  )
}