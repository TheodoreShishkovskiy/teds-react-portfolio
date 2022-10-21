import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';


// function to have contact be properly filled out
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Must use a valid Email address');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is Required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value})
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

// contact textbox to contact me
return (
  <section class="justify-content-center" id="contact-me">
    <h1 className='contact'>Contact Me Below!</h1>
    <hr></hr>
    <form class="justify-content-center" id="contact-info">

      <div>
        <label htmlFor='name'>Enter Your Name:</label>
        <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
      </div>

      <div>
        <label htmlFor='email'>Enter Your Email:</label>
        <input class="form-control" type="text" name="email" defaultValue={email} onBlur={handleChange}/>
      </div>

      <div>
        <label htmlFor='name'>Reason for Contact:</label>
        <textarea class="form-control" type="text" name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
      </div>

      {errorMessage && (
        <div>
          <p className='error-text'>{errorMessage}</p>
        </div>
      )}

      <div>
        <button data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Deliver Message</button>
      </div>
    </form>
  </section>
);
}

export default ContactForm;