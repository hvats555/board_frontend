import React from 'react'
import styles from './UpdateCard.module.scss'

function UpdateCard({
    color,
    title,
    time,
    location
}) {
  return (
    <div className={styles.update} style={{borderColor: color}}>
        <div className={styles.update_title}>{title}</div>
        <div className={styles.update_meta}>{time}</div>
        <div className={styles.update_meta}>{location}</div>
    </div>
  )
}

export default UpdateCard