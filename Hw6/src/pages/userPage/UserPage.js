import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/User'
import { addUser, changeInput, clearUsers, deleteUsers } from '../../store/usersSlice'

function UsersPage() {

    const dispatch = useDispatch()

    const { inputValue, users } = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    const clearUsersFunc = () => {
        dispatch(clearUsers())
    }
    
    const deleteAllUsersFunc = () => {
        dispatch(deleteUsers())
    }

  return (
    <>
        <input type="text" placeholder="name" onChange={changeInputFunc} value={inputValue}/>
        <button onClick={addUserFunc}>add user</button>

        {users.map(user => <User name={user} />)}
        <button onClick={clearUsersFunc}>clear</button>
        <button onClick={deleteAllUsersFunc}>delete all</button>
    </>
  )
}

export default UsersPage