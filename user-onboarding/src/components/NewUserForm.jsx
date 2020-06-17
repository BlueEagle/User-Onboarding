import React from 'react'

function NewUserForm(props) {
  const { name, email, password, termsOfService } = props.values
  const [ textChangeHandler, checkboxHandler, submitHandler ] = props.handlers


  return (
    <form onSubmit={submitHandler}>
      <label>Name:
        <input
          name='name'
          type='text'
          value={name}
          onChange={textChangeHandler}
        />
      </label>   

      <label>Email:
      <input
          name='email'
          type='email'
          value={email}
          onChange={textChangeHandler}
        />
      </label>

      <label>Password:
      <input
          name='password'
          type='password'
          value={password}
          onChange={textChangeHandler}
        />
      </label>

      <label>Terms of Service:
      <input
          name='termsOfService'
          type='checkbox'
          value={termsOfService}
          onChange={checkboxHandler}
        />
      </label>

      <input type='submit' />
    </form>
  )
}

export default NewUserForm