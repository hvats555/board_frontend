import React from 'react';
import styles from './Button.module.scss';

function Button({value, ...props}) {
  return (
    <input type="button" value={value} className={styles.btn} {...props} />
  )
}

export default Button