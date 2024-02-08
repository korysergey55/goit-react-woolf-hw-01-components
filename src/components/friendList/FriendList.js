import { Component } from 'react'
import styles from './styles.module.css'

class FriendList extends Component {
  render() {
    return (
      <ul className={styles.friendList}>
        {this.props.data ?
          this.props.data.map((item) => (
            <li className={styles.item} key={item.id}>
              <span className={item.isOnline ? styles.statusOnline : styles.statusOfline}></span>
              <img className={styles.avatar} src={item.avatar} alt="User avatar" width="48" />
              <p className={styles.name}>{item.name}</p>
            </li>
          ))
          : <h2 className={styles.title}>Sorry, something went wrong! No data</h2>}
      </ul>
    )
  }
}

export default FriendList