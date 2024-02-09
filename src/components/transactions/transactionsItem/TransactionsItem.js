import React from 'react'
import styles from './styles.module.css'

const TransactionsItem = ({ item }) => {
  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{item.type}</td>
      <td className={styles.td}>{item.amount}</td>
      <td className={styles.td}>{item.currency}</td>
    </tr>
  );
}

export default TransactionsItem;