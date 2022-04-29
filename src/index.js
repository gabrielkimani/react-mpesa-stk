import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import icon from 'images/mpesa-logo.png'
import PropTypes from 'prop-types'

export const MpesaButton = (props) => {
  const {
    title,
    number,
    shortcode,
    passkey,
    transactionType,
    businessShortcode,
    amount,
    callbackUrl,
    accountReference,
    transactionDesc,
    mpesaAuth,
    environment,
  } = props.credentials;

  console.log(props);

  const [phoneNumber, setPhoneNumber] = useState(number)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  //submit the info
  const submitHandler = async () => {
    const data = {
      shortcode,
      passkey,
      transactionType,
      businessShortcode,
      amount,
      phoneNumber,
      callbackUrl,
      accountReference,
      transactionDesc,
      mpesaAuth,
      environment
    }
if(shortcode === undefined || passkey === undefined || transactionType === undefined || businessShortcode === undefined || amount === undefined || phoneNumber === undefined || callbackUrl === undefined || accountReference === undefined || transactionDesc === undefined || mpesaAuth === undefined || environment === undefined){
  setError(true)
  setErrorMessage('Please provide all the required credentials!');
}

    setLoading(true);
    fetch('https://mpesa-server.herokuapp.com/sendmoney', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        if (data.errorMessage) {
          console.log(data.errorMessage)
          setError(true)
          setErrorMessage(data.errorMessage)
        } else {
          console.log({ message: 'success', data })
          setData(data)
        }
      })
      .catch((error) => {
        console.error('Error:', error)
        setError(true)
        setErrorMessage(error.message)
      })
  }


  MpesaButton.propTypes = {
    credentials: PropTypes.object,
    onPaySuccess: PropTypes.func,
    onPayError: PropTypes.func
  }
  
  MpesaButton.defaultProps = {
    credentials: {},
    onPaySuccess: () => {},
    onPayError: () => {},
    amount:0,
    title:'Order payment',
  }

  useEffect(() => {
    if (data.CustomerMessage) {
      props.onPaySuccess(data)
    }
    if (errorMessage) {
      props.onPayError({message:errorMessage})
    }
    return () => {
      
    }
  }, [data, error])

  return (
    <div>
      {data.CustomerMessage ? (
        <div className={styles.success_wrapper}>
          <div className={styles.success_header}>
            Success!
          </div>
          <p>Successful!{data.CustomerMessage}</p>
        </div>
      ) : (
        <div
          className={
            !loading
              ? `${styles.mpesa_wrapper}`
              : `${styles.wrap} ${styles.mpesa_wrapper}`
          }
        >
          <div className={styles.inner_wrapper}>
            {loading && <div className={styles.loader}></div>}
            <span className={styles.pay_title}>Pay with Mpesa</span>
            <span className='title'>Payment details :{title}</span>
            <span className={styles.amount}>Amount: KES {amount}</span>
            <span className={styles.number}>Mpesa number: {phoneNumber}</span>
            <span className={styles.number_input}>
              <input
                type='text'
                placeholder='254xxxxxxxx'
                className={styles.input}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </span>
            <span className={styles.button}>
              <button className={styles.button_wrapper} onClick={submitHandler} disabled={loading}>
                <span className={styles.button_text}>
                  <img src={icon} alt='pay' className={styles.image} />
                </span>
                <span>Pay Now</span>
              </button>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}


