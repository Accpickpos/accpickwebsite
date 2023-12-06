import React from 'react'

function ContactForm() {
  return (
    <div className='contact-form'>
        <h2>Contact Us</h2>

        <form>
            <label>Name</label>
            <input type="text" name='name' />
            <label>Email</label>
            <input type="email" name='user_email' />
            <label>Message</label>
            <textarea name='message' rows={4} />
            <input type="submit" value='Send' />

        </form>
    </div>
  )
}

export default ContactForm