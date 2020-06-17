import React, { useState } from 'react';
import NewUserForm from './NewUserForm';
import newUserSchema from '../resources/userFormSchema';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [userList, setUserList] = useState([])
  const [disabled, setDisabled] = useState(true)


  // Handle the changes!
  const textChangeHandler = evt => {
    const { name, value } = evt.target

    // COME BACK AND DO VALIDATION HERE WITH YUP


    // console.log(`Ready to handle ${name}, with a value of ${value}`)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  const checkboxHandler = evt => {
    const { name, checked} = evt.target

    // console.log(`I think it is the checkbox ${name} with the value ${checked}`)
    setFormValues({ ...formValues, [name]: checked })
  }
  const submitHandler = evt => {
    evt.preventDefault()

    console.log('Form submitted')
  }

  return (
    <div className="App">
      <NewUserForm 
      values={formValues} 
      handlers={[textChangeHandler, checkboxHandler, submitHandler]} 
      disabled={disabled} />
    </div>
  );
}

export default App;
