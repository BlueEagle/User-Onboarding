import React, { useState } from 'react';

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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
