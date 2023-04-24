import React from 'react';
import styles from './Card.module.scss';

function Card({
    title,
    meta,
    children
}) {
  return (
    <div className={styles.card}>
        <div className={styles.card__header}>
            <div className={styles.card__title}>{title}</div>
            <div className={styles.card__meta}>{meta}</div>
        </div>

        <div className={styles.card__content}>
            {children}
        </div>
    </div>
  )
}

export default Card