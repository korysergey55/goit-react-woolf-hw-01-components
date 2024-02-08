import { Component } from 'react'
import styles from './styles.module.css'
import userJSON from '../../sourses/profile/user.json'

class Profile extends Component {
  render() {
    const {
      username,
      tag,
      location,
      avatar,
      stats: { followers, views, likes }
    } = userJSON

    return (
      <div className={styles.profile} >
        <div className={styles.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={styles.avatar}
          />
          <p className={styles.name}>{username}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.item}>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li className={styles.item}>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
          </li >
          <li className={styles.item}>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    )
  }

}
export default Profile