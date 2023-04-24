import React from 'react';
import InfoCard from '../InfoCard';
import styles from './InfoBar.module.scss';

function InfoBar() {
  return (
    <div className={styles.infobar__parent}>
        <InfoCard color={"#DDEFE0"} image={"infobar_revenue.svg"} title={"Total Revenues"} value={"$2,129,430"}/>
        <InfoCard color={"#F4ECDD"} image={"total_transactions_icon.svg"} title={"Total Transactions"} value={"1,520"}/>
        <InfoCard color={"#EFDADA"} image={"total_likes.svg"} title={"Total Likes"} value={"9,721"}/>
        <InfoCard color={"#DEE0EF"} image={"total_users.svg"} title={"Total Users"} value={"892"}/>
    </div>
  )
}

export default InfoBar