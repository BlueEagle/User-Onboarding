import React from 'react'
import styled from 'styled-components'

const UserDisplay = (props) => {
  const { name, email } = props.user

  return (
    <UserInformationComponent>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </UserInformationComponent>
  )
}

export default UserDisplay

const UserInformationComponent = styled.div`
  margin: 3% 0;
  background: lightgray;
  border-radius: 20px;
  padding: 5%;
`