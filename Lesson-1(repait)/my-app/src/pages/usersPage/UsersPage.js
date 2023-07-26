import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserList from '../../components/menu/userList/UserList'

function UsersPage() {
    const value = useSelector ( state => state.value)
    const dispatch = useDispatch()
    const changInput = (event) => {
        dispatch ({
            type: 'VALUE',
            payload: event.target.value
        })
    }
    const addUser = () => {
      dispatch({
        type:"ADD_USER",
        payload: value
      })
    }

    const deleteAll = () => {
      type:"DELETE_ALL"
    }
  return (
    <div>
        <h1>{value}</h1>
       <input onChange={changInput} placeholder='name' />
       <button onClick={addUser}>add</button> 
       <UserList />
       <button onClick={deleteAll}></button>
    </div>
  )
}

export default UsersPage