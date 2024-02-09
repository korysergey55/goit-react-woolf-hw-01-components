import React from 'react'
import styles from './styles.module.css'

const FriendListItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <span className={item.isOnline ? styles.statusOnline : styles.statusOfline}></span>
      <img className={styles.avatar} src={item.avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{item.name}</p>
    </li>
  );
}
export default FriendListItem;