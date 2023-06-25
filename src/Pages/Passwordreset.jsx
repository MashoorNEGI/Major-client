import React, { useState } from 'react'
import Style from './css/About.module.css'
import FormGroup from 'src/components/Form/FormGroup'
import ApiRequest from 'src/API/apirequest'
import { toast } from 'react-toastify'
const Passwordreset = () => {
  const [ Email, setEmail ] = useState('')
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = ApiRequest('sendpasswordlink', 'POST', { Email }, { authorization: false })
    if (res) {
      setEmail('')
      toast.success("Password reset link send succesfully to your Email")
    } else {
      toast.error('Invalid user')
    }
  }
  return (
    <section style={{ width: '50%' }} className={Style.about}>
      <div className={Style.card}>
        <div className={Style.cardcontent} style={{ padding: '40px' }}>
          <h2 style={{ textAlign: 'center' }}>Enter Your Email</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup label="Email" id="email" value={Email} name="email" type="text" required={true} handleChange={handleChange} autoComplete='off' />
            <button className='btn' style={{ width: '100%' }} type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Passwordreset
