import React from 'react'
import styles from './styles.module.css'
import createRandomColor from 'utiles/randomColor'

const StatisticItem = ({ item }) => {
  return (
    <li className={styles.item} style={{
      backgroundColor: `rgb(${createRandomColor()})`
    }}>
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}</span>
    </li>
  );
}

export default StatisticItem;