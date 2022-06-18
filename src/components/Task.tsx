import { HiOutlineTrash } from 'react-icons/hi'

import { Checkbox } from "./Checkbox";

import styles from '../styles/task.module.css'

type Task = {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ task, onToggleTask, onDeleteTask }: TaskProps) {

  const containerClass = task.isCompleted ? `${styles.task} ${styles.completed}` : styles.task 

  function handleToggleTask() {
    onToggleTask(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <div className={containerClass}>
      <Checkbox isChecked={task.isCompleted} onClick={handleToggleTask}  />

      <p>{task.content}</p>
      
      <button className={styles.button} onClick={handleDeleteTask}>
        <HiOutlineTrash size={18} />
      </button>
    </div>
  )
}