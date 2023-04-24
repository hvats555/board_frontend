import React from 'react';
import styles from './AppContainer.module.scss';
import Sidebar from '@/components/Sidebar/Sidebar';
import Navbar from '@/components/dashboard/Navbar/Navbar';

function AppContainer({ navbarTitle, children }) {
  return (
    <div className={styles.parent}>
    <Sidebar />

     <div className={styles.main}>
        <Navbar navbarTitle={navbarTitle}/>
        { children }
     </div>
 </div>
  )
}

export default AppContainer