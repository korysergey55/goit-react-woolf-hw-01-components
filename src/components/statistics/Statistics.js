import { Component } from 'react'
import styles from './styles.module.css'
import createRandomColor from 'components/utiles/randomColor'

class Statistics extends Component {


  render() {
    return (
      <section className={styles.statistics} >
        <h2 className={styles.title}>{this.props.title}</h2>

        <ul className={styles.statList}>
          {this.props.stats.map((item) => (
            <li className={styles.item} key={item.id} style={{
              backgroundColor: `rgb(${createRandomColor()})`
            }}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}</span>
            </li>
          ))}
        </ul>
      </section >
    )
  }
}

export default Statistics 
