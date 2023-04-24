import React from 'react';
import styles from './SocialAuth.module.scss';
import Image from 'next/image';

function SocialAuth({
    icon,
    title,
    handleAuth
}) {
  return (
    <div className={styles.social__btn} onClick={handleAuth}>
    <Image src={icon} height={14} width={14} />
    <span>{title}</span>
    </div>
  )
}

export default SocialAuth