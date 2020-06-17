import React from 'react'
import styled from 'styled-components';

function NewUserForm(props) {
  const { name, email, password, termsOfService } = props.values
  const [ textChangeHandler, checkboxHandler, submitHandler ] = props.handlers
  const { disabled, errors } = props


  return (
    <StyledForm onSubmit={submitHandler}>

      <FormHeader>New User?</FormHeader>
      <RoomyLabel>Name:
        <RoomyInput
          name='name'
          type='text'
          value={name}
          onChange={textChangeHandler}
        />
      </RoomyLabel>   

      <RoomyLabel>Email:
      <RoomyInput
          name='email'
          type='email'
          value={email}
          onChange={textChangeHandler}
        />
      </RoomyLabel>

      <RoomyLabel>Password:
      <RoomyInput
          name='password'
          type='password'
          value={password}
          onChange={textChangeHandler}
        />
      </RoomyLabel>

      <RoomyLabel>Terms of Service:
      <RoomyInput
          name='termsOfService'
          type='checkbox'
          checked={termsOfService}
          onChange={checkboxHandler}
        />
      </RoomyLabel>

      <RoomyInput type='submit' disabled={disabled} />

      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.termsOfService}</div>
      </div>
    </StyledForm>
  )
}

export default NewUserForm

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background: lightblue;
  padding: 5%;
  border-radius: 20px;
  margin-top: 3%;
  box-shadow: 0 0 3px black;
`
const FormHeader = styled.h2`
  margin-top: 0;
  text-align: center;
`
const RoomyLabel = styled.label`
  margin-top: 3%;
  margin-bottom: 3%;
`
const RoomyInput = styled.input`
  margin-left: 3%;
`