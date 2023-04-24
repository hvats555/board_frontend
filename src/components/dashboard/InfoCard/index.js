import React from 'react';
import styles from './infoCard.module.scss';
import Image from 'next/image';

function InfoCard({
    color,
    image,
    title,
    value
}) {
  return (
    <div className={styles.infobar__card} style={{
        backgroundColor: color
    }}>
        <div className={styles.infobar__icon}>
            <Image src={image} height={24} width={24} />
        </div>

        <div className={styles.infobar__title}>
            {title}
        </div>
        <div className={styles.infobar__value}>
            {value}
        </div>
    </div>
  )
}

export default InfoCard