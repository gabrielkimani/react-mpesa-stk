# mpesa-react-button

> mpesa stk push button for c2b payments

[![NPM](https://img.shields.io/npm/v/mpesa-react-button.svg)](https://www.npmjs.com/package/mpesa-react-button) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mpesa-react-button
```

## Usage

```jsx
import React from 'react'

import { MpesaButton } from 'mpesa-react-button'

//load the styles
import 'mpesa-react-button/dist/index.css'

const credentials = {
  title: '', //eg. 'Pay for your order'
  number: '',
  shortcode: '', //eg 174379---obtained from M-Pesa daraja portal
  passkey: '', //obtained from mpesa daraja portal
  transactionType: '', //eg. CustomerPayBillOnline
  businessShortcode: '', //eg 174379
  amount: '', //Amount to be paid by the customer eg. 100
  phone: '', //Phone number of the customer eg. 254712345000
  callbackUrl: '', //Callback url to be called after payment
  accountReference: '', //Account reference eg. order number
  transactionDesc: '', //Transaction description eg. Order for pizza
  mpesaAuth: '', //Mpesa auth token obtained from mpesa daraja portal
  environment: '' //environment to be used eg. sandbox or production--you can use sandbox for testing
}

const App = () => {
  const onSendSuccess = (data) => {
    //handle success
    console.log(data)
  }

  const handleError = (error) => {
    //handle error
    console.log(error)
  }
  return (
    <MpesaButton
      credentials={credentials} //credentials object
      onPaySuccess={onSendSuccess} //returned afer a successful payment
      onPayError={handleError} //returned after a failed payment
    />
  )
}

export default App
```

> Example response on success

```js
{
  MerchantRequestID: '57080-13998606-1', 
  CheckoutRequestID: 'ws_CO_29042022205605195798871229', 
  ResponseCode: '0', 
  ResponseDescription: 'Success. Request accepted for processing', 
  CustomerMessage: 'Success. Request accepted for processing'
  }
```
> Example response on error

```js
{
  message: 'Error. Invalid credentials',
  }
```

## License

MIT © [gabrielkimani](https://github.com/gabrielkimani)
