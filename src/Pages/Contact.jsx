import React from 'react'
import Style from './css/Contact.module.css'
const Contact = () => {
  return (
    <>
      <div className="App">
        <div class="container">
          <form id={Style.contact} action="https://formspree.io/f/xknapngy" method="POST">
            <h3>Contact Form</h3>
            <h4>you can also contact on 91+7292098071</h4>
            <fieldset>
              <input
                placeholder="Your name"
                type="text"
                tabindex="1"
                required
                name='name'
                autofocus
              />
            </fieldset>
            <fieldset>
              <input
                placeholder="Your Email Address"
                type="email"
                name='email'
                tabindex="2"
                required
              />
            </fieldset>
            <fieldset>
              <textarea
                placeholder="Type your message here...."
                name='message'
                tabindex="5"
                required
              />
            </fieldset>
            <button className='btn'>submit</button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Contact
