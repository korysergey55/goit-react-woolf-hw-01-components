import { Component } from 'react'
import styles from './styles.module.css'

class TransactionHistory extends Component {

  render() {

    return (
      <table className={styles.transactionHistory}>
        <thead className={styles.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {this.props.items ? this.props.items.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <td className={styles.td}>{item.type}</td>
              <td className={styles.td}>{item.amount}</td>
              <td className={styles.td}>{item.currency}</td>
            </tr>
          )) : <h2 className={styles.title}>Sorry, something went wrong! No data</h2>}
        </tbody>
      </table>
    )
  }
}

export default TransactionHistory