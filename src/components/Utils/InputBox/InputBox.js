import React from 'react'
import styles from './InputBox.module.scss'

function InputBox({
    label,
    type,
    placeholder,
    ...props
}) {
  return (
    <div>
        <label for="input">{label}</label>
        <br />
        <input type={type} id="input" className={styles.signin_inputbox} placeholder={placeholder} {...props} />
    </div>
  )
}

export default InputBox