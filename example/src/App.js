import React from 'react'

import { MpesaButton } from 'mpesa-react-button'
import 'mpesa-react-button/dist/index.css'

const credentials = {
  title: '',
  number: '254798871229',
  shortcode: '174379',
  passkey: 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919',
  transactionType: 'CustomerPayBillOnline',
  businessShortcode: '174379',
  amount: '3000',
  phone: '25498871229',
  callbackUrl: 'https://callbackurl',
  accountReference: 'patakenya',
  transactionDesc: 'activation fee',
  mpesaAuth: 'gveFzMszYVOVQGSyTHJzW7FrwFRWfrAI:QCSiYyQ0XTMLLGMd',
  environment: 'sandbox'
}

const App = () => {
  const onSendSuccess = (data) => {
    console.log(data)
  }

  const handleError = (error) => {
    console.log(error)
  }
  return (
    <MpesaButton
      credentials={credentials}
      onPaySuccess={onSendSuccess}
      onPayError={handleError}
    />
  )
}

export default App
