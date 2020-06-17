import React, { useState, useEffect } from 'react';
import NewUserForm from './NewUserForm';
import userFormSchema from '../resources/userFormSchema';
import UserDisplay from './UserDisplay'
import * as Yup from 'yup';
import Axios from 'axios';
import styled from 'styled-components';

const API_URL = 'https://reqres.in/api/users'
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [userList, setUserList] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  // Component functions
  const postUser = user => {
    Axios.post(API_URL, user)
      .then(res => {
        setUserList([...userList, res.data])
        console.log('post success!')
      })
      .catch(err => {
        console.error(err)
      })
  }

  // Handle the changes!
  const textChangeHandler = evt => {
    const { name, value } = evt.target

    // COME BACK AND DO VALIDATION HERE WITH YUP
    Yup
      .reach(userFormSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

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

      const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        termsOfService: formValues.termsOfService
      }

      postUser(newUser)
      setFormValues(initialFormValues)
      console.log('Form submitted')
    }


    // useEffects
    useEffect(() => {
      userFormSchema.isValid(formValues).then(valid => {
        setDisabled(!valid)
      })
    }, [formValues])


  return (
    <ComponentDisplay className="App">
      <NewUserForm 
      values={formValues} 
      handlers={[textChangeHandler, checkboxHandler, submitHandler]} 
      disabled={disabled}
      errors={formErrors} />

      {
        userList.map(user => {
          return <UserDisplay key={user.id} user={user} />
        })
      }
    </ComponentDisplay>
  );
}

export default App;

// Styles
const ComponentDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`