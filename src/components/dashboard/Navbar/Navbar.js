import React, { useEffect } from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import MobileNavBar from './MobileNavBar/MobileNavBar';
import SearchBox from '../SearchBox/SearchBox';
import { useAuth } from '@/contexts/AuthContext';


function Navbar({ navbarTitle }) {
  const {currentUser} = useAuth();

  return (
    <div className={styles.header}>
        <div className={styles.header__title}>
            <MobileNavBar />
            <div>{navbarTitle}</div>
        </div>

        <div className={styles.header__tools}>
            <SearchBox />
            
            <Image className={styles.notification__icon} src="/notification.svg" height={20} width={20} />

            <Image className={styles.user__icon} src={currentUser?.photoURL ? currentUser?.photoURL : '/user_image.png'} height={30} width={30} />
        </div>
    </div>
  )
}

export default Navbar