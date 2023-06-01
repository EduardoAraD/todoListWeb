import styles from './ListTaskEmpty.module.css';

import clipboard from '../assets/clipboard.svg';

export function ListTaskEmpty () {
  return (
    <div className={styles.listTaskEmpty}>
      <img src={clipboard} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}