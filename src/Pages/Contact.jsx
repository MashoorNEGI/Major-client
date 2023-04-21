import React, { useEffect, useState } from 'react'
import Style from './css/Contact.module.css'
import FormInput from 'src/components/Form/Fieldset'
import { getLocalStorageItem } from 'src/utils/Localstorage';
const Contact = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');

  useEffect(() => {
    const storedName = getLocalStorageItem('Data')
    const storedEmail = getLocalStorageItem('Data')

    if (storedName) {
      setName(storedName.name);
    }

    if (storedEmail) {
      setEmail(storedEmail.email);
    }
  }, []);
  return (
    <>
      <div className={Style.container}>
        <form id={Style.contact} action="https://formspree.io/f/xknapngy" method="POST">
          <h3>Contact Form</h3>
          <h4>you can also contact on 91+7292098071</h4>
          <FormInput type="text" name="name" placeholder="Your name" value={name ? name : null} disabled={name !== ''} />
          <FormInput type="email" name="email" placeholder="Your Email Address" value={email ? email : null} disabled={email !== ''} required />
          <FormInput type="textarea" name="message" placeholder="Type your message here...." required />
          <button className='btn'>submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact
