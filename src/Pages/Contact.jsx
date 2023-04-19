import React from 'react'
import Style from './css/Contact.module.css'
import FormInput from 'src/components/Form/Fieldset'
const Contact = () => {
  return (
    <>
      <div className={Style.container}>
        <form id={Style.contact} action="https://formspree.io/f/xknapngy" method="POST">
          <h3>Contact Form</h3>
          <h4>you can also contact on 91+7292098071</h4>
          <FormInput type="text" name="name" placeholder="Your name" />
          <FormInput type="email" name="email" placeholder="Your Email Address" required />
          <FormInput type="textarea" name="message" placeholder="Type your message here...." required />
          <button className='btn'>submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact
