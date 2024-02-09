import React from 'react'
import styles from './styles.module.css'
import StatisticItem from './statisticItem/StatisticItem'

const Statistics = ({ title, stats }) => {

  return (
    <section className={styles.statistics} >
      <h2 className={styles.title}>{title ? title : 'Statistics Component'}</h2>
      {stats ?
        <ul className={styles.statList}>
          {stats?.map((item) => (
            <StatisticItem item={item} key={item.id} />
          ))
          }
        </ul>
        : <h2 className={styles.title}>Sorry, something went wrong! No data</h2>
      }

    </section >
  )
}

export default Statistics 
