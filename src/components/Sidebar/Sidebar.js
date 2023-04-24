import React from 'react';
import styles from './Sidebar.module.scss';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

function Sidebar() {
  const { logout } = useAuth();
  const { push } = useRouter();

  const handleLogout = async () => {
    await logout();
    toast.success("Logging you out...");
    push("/login");
  }

  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebar__banner}>
            Board.
        </div>

        <ul className={styles.sidebar__menuitems}>
            <li>
                <Image src="dashboard_icon.svg" height={17.5} width={17.5} /> 
                <span>Dashboard</span>
            </li>

            <li>
                <Image src="transaction_icon.svg" height={17.5} width={17.5} />
                <span>Transactions</span>
            </li>

            <li>
                <Image src="schedule_icon.svg" height={17.5} width={17.5}/>
                <span>Schedules</span>
            </li>

            <li>
                <Image src="user_icon.svg" height={17.5} width={17.5}/>
                <span>Users</span>
            </li>

            <li>
                <Image src="setting_icon.svg" height={17.5} width={17.5} />
                <span>Settings</span>
            </li>
        </ul>

        <ul className={styles.sidebar__menuitems__meta}>
            <li onClick={() => {handleLogout()}}>Logout</li>
            <li>Help</li>
            <li>Contact Us</li>
        </ul> 
    </div>
  )
}

export default Sidebar