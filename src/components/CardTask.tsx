import { Trash } from 'phosphor-react';
import styles from './Cardtask.module.css';
import { Task } from '../App';
import { ChangeEvent } from 'react';

interface CardTaskProps {
  task: Task;
  onRemoveTask: (id: number) => void;
  onCheckedTask: (id: number, isChecked: boolean) => void;
}

export function CardTask ({ onCheckedTask, onRemoveTask, task}: CardTaskProps) {
  const { id, isChecked, name } = task;

  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.checked);
    onCheckedTask(id, event.target.checked);
  }

  function handleRemoveTask() {
    onRemoveTask(id);
  }

  return (
    <div className={styles.cardTask}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChangeCheckbox}
      />
      <p className={isChecked ? styles.nameWithoutline : styles.name} >{name}</p>
      <button onClick={handleRemoveTask}>
        <Trash size={18} />
      </button>
    </div>
  )
}