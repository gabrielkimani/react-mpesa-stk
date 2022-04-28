import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.mpesa_wrapper}>
      <div className={styles.inner_wrapper}>
        <span className='title'>Payment details :Gcash Activation fee</span>
        <span className={styles.amount}>Amount: KES 1,000</span>
        <span className={styles.number}>Mpesa number:254722222222</span>
        <span className={styles.button}>
          <button className={styles.button_wrapper}>
            <span className={styles.button_text}>Pay</span>
          </button>
        </span>
      </div>
    </div>
  )
}
