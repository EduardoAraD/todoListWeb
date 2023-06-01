import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import { LogoBackground } from "./components/LogoBackground"
import { ListTaskEmpty } from "./components/ListTaskEmpty";
import { CardTask } from "./components/CardTask";

import styles from './App.module.css';

export interface Task {
  id: number;
  name: string;
  isChecked: boolean;
}

function App() {
  const [newNameTask, setNewNameTask] = useState('');
  const [countId, setContId] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleChangeTextTask (event: ChangeEvent<HTMLInputElement>){
    setNewNameTask(event.target.value)
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();

    const namesOfTask = tasks.map(task => task.name);

    if(!namesOfTask.includes(newNameTask)) {
      const newTask: Task = {
        id: countId,
        isChecked: false,
        name: newNameTask,
      }

      setTasks(prevState => [...prevState, newTask]);
      setContId(prevState => prevState + 1);
      setNewNameTask('');
    }
  }

  function changeCheckedTask(id: number, isChecked: boolean) {
    setTasks(prevState => prevState.map(task => {
      if(task.id === id) {
        return { ...task, isChecked };
      } else {
        return task;
      }
    }))
  }

  function removeTask(id: number) {
    setTasks(prevState => prevState.filter(task => task.id !== id ))
  }

  const numberTaskCreated = tasks.length;
  const numberTaskConcluided = tasks.filter(task => task.isChecked).length;
  const textNumberConcluidedToCreated =
    numberTaskConcluided === 0 ?
      '0' : `${numberTaskConcluided} de ${numberTaskCreated}`

  return (
    <div className={styles.app}>
      <LogoBackground />
      <div className={styles.container}>
        <form action="" onSubmit={handleNewTask} className={styles.form}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
            value={newNameTask}
            onChange={handleChangeTextTask}
          />
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.info}>
            <div>
              <p className={styles.textBlue}>Tarefas criadas</p>
              <span>{numberTaskCreated}</span>
            </div>
            <div>
              <p className={styles.textPurple}>Concluídas</p>
              <span>{textNumberConcluidedToCreated}</span>
            </div>
          </div>

          <div className={styles.list}>
            {tasks.length === 0 && <ListTaskEmpty />}
            {tasks.map(task => (
              <CardTask
                key={task.id}
                onCheckedTask={changeCheckedTask}
                onRemoveTask={removeTask}
                task={task}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
