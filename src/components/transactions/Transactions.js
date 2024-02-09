import React from 'react'
import styles from './styles.module.css'
import TransactionsItem from './transactionsItem/TransactionsItem'

const TransactionHistory = ({ data }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {data ?
        <tbody className={styles.tbody}>
          {data?.map((item) => (
            <TransactionsItem item={item} key={item.id} />
          ))}
        </tbody>
        : <h2 className={styles.title}>Sorry, something went wrong! No data</h2>}
    </table>
  )
}

export default TransactionHistory