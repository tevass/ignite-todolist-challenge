import { BsCheck } from 'react-icons/bs'

import styles from '../styles/checkbox.module.css'

interface CheckboxProps {
  isChecked : boolean;
  onClick: () => void;
}

export function Checkbox({ isChecked, onClick }: CheckboxProps) {
  const checkboxClass = isChecked
    ? `${styles.checkbox} ${styles.checked}`
    : `${styles.checkbox} ${styles.default}`

  return (
    <div className={styles.container}>
      <button className={checkboxClass} onClick={onClick}>
        <span>
          { isChecked && (<BsCheck size={18} />) }
        </span>
      </button>
    </div>
  )
}