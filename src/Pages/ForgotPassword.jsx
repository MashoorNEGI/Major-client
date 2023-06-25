import React, { useEffect, useState } from 'react'
import ApiRequest from 'src/API/apirequest'
import Style from './css/About.module.css'
import { toast } from 'react-toastify'
import FormGroup from 'src/components/Form/FormGroup'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const ForgotPassword = () => {
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const [ Password, setPassword ] = useState('')
  const handleChange = (e) => {
    setPassword(e.target.value)
  }
  const uservalid = async () => {
    const res = ApiRequest(`forgotpassword/${token}`, 'GET', { Password }, { authorization: false })  
    if (!res) {
      const Navigate = useNavigate()
      Navigate('*')
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = ApiRequest(`${token}`, 'POST', { Password }, { authorization: false })
    if (res) {
      setPassword('')
      toast.success("Password reset succesfully")
    } else {
      toast.error('! Token expired Generate new link')
    }
  }
  useEffect(() => {
    uservalid()
  },[])
  return (
    <section style={{ width: '50%' }} className={Style.about}>
      <div className={Style.card}>
        <div className={Style.cardcontent} style={{ padding: '40px' }}>
          <h2 style={{ textAlign: 'center' }}>Enter Your New Password</h2>
          <form onSubmit={handleSubmit}>
            <FormGroup label="Password" id="Password" value={Password} name="Password" type="password" required={true} handleChange={handleChange} autoComplete='off' />
            <button className='btn' style={{ width: '100%' }} type="submit">SEND</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
