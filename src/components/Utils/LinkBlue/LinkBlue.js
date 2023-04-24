import React from 'react';
import Link from 'next/link';
import styles from './LinkBlue.module.scss'

function LinkBlue({children, ...props}) {
  return (
    <a className={styles.link} {...props}>{ children }</a>
  )
}

export default LinkBlue