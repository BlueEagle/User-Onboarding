import React from 'react'

const UserDisplay = (props) => {
  const { name, email } = props.user

  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default UserDisplay