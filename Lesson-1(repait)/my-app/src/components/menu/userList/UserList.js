import React from 'react'
import { useSelector } from 'react-redux'

function UserList() {
const users = useSelector(state => state.users)

  return (
    <ul>
         {users.map( user => <li>{user}</li>)}

    </ul>
  )
}

export default UserList