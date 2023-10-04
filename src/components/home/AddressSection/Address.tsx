import React from 'react'
import address from '../../../data/address.json';
import styles from './address.module.scss';
type Props = {}

const Address = (props: Props) => {
  return (
    <div className={styles.container}>
    <div className={styles.about}>
      <div className={styles.left_side}>
        
      </div>

      <div className={styles.right_side}>
        <div className={styles.main_head}>
          <p>{address.title}</p>
        </div>
        <div className={styles.main_text}>{address.desc}</div>
        <div className={styles.buttons}>
          <button className={styles.dark_button}>{address.button}</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Address