import { useState } from 'react'
import { Header } from './components/Header'
import { TaskBar } from './components/TaskBar'
import { TasksContainer } from './components/TasksContainer'

import styles from './styles/app.module.css'
import './styles/global.css'

type Task = {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function handleCreateTask(task: string) {
    const newTask = { id: tasks.length + 1, content: task, isCompleted: false }
    setTasks([...tasks, newTask])
  }

  function handleToggleTask(id: number) {
    setTasks(tasks.map(task => {
      return task.id === id
        ? { ...task, isCompleted: !task.isCompleted } : task
    }))
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <section className={styles.taskBar}>
          <TaskBar onCreateTask={handleCreateTask}  />
        </section>
        <section className={styles.tasksContainer}>
          <TasksContainer
            tasks={tasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        </section>
      </main>
    </>
  )
}