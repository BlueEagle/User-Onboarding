import React, { useState } from 'react';
import NewUserForm from './NewUserForm';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [userList, setUserList] = useState([])


  // Handle the changes!
  const textChangeHandler = evt => {
    const { name, value } = evt.target

    console.log(`Ready to handle ${name}, with a value of ${value}`)
  }
  const checkboxHandler = evt => {
    const { name, checked} = evt.target

    console.log(`I think it is the checkbox ${name} with the value ${checked}`)
  }
  const submitHandler = evt => {
    evt.preventDefault()

    console.log('Form submitted')
  }

  return (
    <div className="App">
      <NewUserForm values={formValues} handlers={[textChangeHandler, checkboxHandler, submitHandler]} />
    </div>
  );
}

export default App;
