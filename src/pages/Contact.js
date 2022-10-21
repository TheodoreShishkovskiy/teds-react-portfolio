import React from 'react'
import { validateEmail } from '../utils/helper';

function ContactForm() {
  const [formState, setFormState] = useState({name: '', email: '', message: ''});
  const [errorMessage, setErrorMessage] = useState('');
  const {name, email, message} = formState;

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
}

const Contact = () => {
 
}

export default ContactForm;