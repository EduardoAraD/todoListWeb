import logo from '../assets/logo.svg';
import styles from './LogoBackground.module.css';

export function LogoBackground () {
  return (
    <div className={styles.container}>
      <img src={logo} />
    </div>
  )
}