import React from 'react'
import styles from  "./spinner.module.scss"

type Props = {}

const Spinner = (props: Props) => {
  return (
    <div className={styles.spinner_wrap}>
    <div className={styles.spinner_item}></div>
    <div className={`${styles.spinner_item} ${styles.spinner_item__2}`}></div>
    <div className={`${styles.spinner_item} ${styles.spinner_item__3}`}></div>
  </div>


  
  )
}

export default Spinner