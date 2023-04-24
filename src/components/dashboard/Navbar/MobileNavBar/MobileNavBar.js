import React from 'react';
import styles from './MobileNavBar.module.scss';
import Image from 'next/image';

import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

function MobileNavBar() {
    const { logout } = useAuth();
    const { push } = useRouter();

    const handleLogout = async () => {
        await logout();
        toast.success("Logging you out...");
        push("/login");
      }

  return (
    <div className={styles.menuToggle}>
    <input type="checkbox" />

    <span></span>
    <span></span>
    <span></span>

    <ul className={styles.menu}>
        <li>
            <Image src="dashboard_icon.svg" height={20} width={20} />
            <span>Dashboard</span>
        </li>
        <li>
            <Image src="transaction_icon.svg" height={20} width={20} />
            <span>Transactions</span>
        </li>
        <li>
            <Image src="schedule_icon.svg" height={20} width={20}/>
            <span>Schedules</span>
        </li>
        <li>
            <Image src="user_icon.svg" height={20} width={20}/>
            <span>Users</span>
        </li>
        <li>
            <Image src="setting_icon.svg" height={20} width={20} />
            <span>Settings</span>
        </li>

        <ul className={styles.sidebar__menuitems__meta}>
            <li onClick={() => {handleLogout()}}>Logout</li>
            <li>Help</li>
            <li>Contact Us</li>
        </ul> 
    </ul>
</div>
  )
}

export default MobileNavBar