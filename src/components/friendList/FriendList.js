import React from 'react'
import FriendListItem from './FriendListItem/FriendListItem'
import styles from './styles.module.css'

const FriendList = ({ data }) => {

  return (
    <section className={styles.friendList}>
      {data ?
        <ul className={styles.friendList}>
          {data?.map((item) => (
            <FriendListItem item={item} key={item.id} />
          ))}
        </ul>
        : <h2 className={styles.title}>Sorry, something went wrong! No data</h2>
      }
    </section>
  )
}
export default FriendList