import boardTasks from '../assets/clipboard.png'

import { Task } from './Task'

import styles from '../styles/tasksContainer.module.css'

type Task = {
  id: number;
  content: string;
  isCompleted: boolean;
}

interface TasksContainerProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function TasksContainer({ tasks, onToggleTask, onDeleteTask }: TasksContainerProps) {

  const isTasksEmpty = !tasks.length
  const totalOfTasks = tasks.length
  
  const hasTasksCompleted = tasks.some(task => task.isCompleted)
  const totalOfTasksCompleted = tasks.filter(task => task.isCompleted).length

  return (
    <section className={styles.tasksContainer}>
      <header>
        <div className={styles.tasksCreated}>
          <span>Tarefas criadas</span>
          <div className={styles.bagde}>{totalOfTasks}</div>
        </div>

        <div className={styles.tasksCompleted}>
          <span>Concluídas</span>
          <div className={styles.bagde}>
            { hasTasksCompleted ? (
              `${totalOfTasksCompleted} de ${totalOfTasks}`
            ) : 0}
          </div>
        </div>
      </header>

      <div className={styles.tasks}>
        { isTasksEmpty ? (
          <div className={styles.tasksEmpty}>
            <img src={boardTasks} alt="Prancheta de Tarefas" />
            <p>
              <span>Você ainda não tem tarefas cadastradas</span> <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          <>
            {tasks.map(task => (
                <Task
                  key={task.id}
                  task={task}
                  onToggleTask={onToggleTask}
                  onDeleteTask={onDeleteTask}
                />
              )
            )}
          </>
        )}
      </div>
    </section>
  )
}