import React from 'react'

function NewUserForm(props) {
  const { name, email, password, termsOfService } = props.values
  const [ textChangeHandler, checkboxHandler, submitHandler ] = props.handlers
  const { disabled, errors } = props


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
          checked={termsOfService}
          onChange={checkboxHandler}
        />
      </label>

      <input type='submit' disabled={disabled} />

      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.termsOfService}</div>
      </div>
    </form>
  )
}

export default NewUserForm