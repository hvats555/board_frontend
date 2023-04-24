import React from 'react';
import styles from './CardContainer.module.scss'

function CardContainer({ children }) {
  return (
    <div className={styles.card__container}>
      {children}
    </div>
  )
}

export default CardContainer