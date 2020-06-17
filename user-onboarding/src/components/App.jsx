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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
