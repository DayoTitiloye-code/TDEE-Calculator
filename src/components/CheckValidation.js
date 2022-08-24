import React, { useState } from 'react'
import TDEEPage from './TDEEPage'
import TDEESuccess from './TDEESuccess'

function CheckValidation() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = () => {
    setIsSubmitted(true)
  }
  return (
    <div>
      {/*ternary operator to change state once form is submitted */}
      {!isSubmitted ? <TDEEPage submitForm={submitForm} /> : <TDEESuccess />}
    </div>
  )
}

export default CheckValidation
