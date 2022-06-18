import logoRef from '../assets/logo.svg'

import styles from '../styles/header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <img src={logoRef} alt="Todo" />
      </div>
    </header>
  )
}