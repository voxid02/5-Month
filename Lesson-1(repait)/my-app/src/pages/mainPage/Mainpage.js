import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
function Mainpage() {
  const dispatch = useDispatch ()
  const title = useSelector (state => state.title)

  const changeTitle = () => {
    dispatch({
      type: 'CHANG_TITLE'
    })
  }
  return (

    <div>
      <h1> {title}</h1>
      <button onClick={changeTitle}>changeTitle</button>
    </div>
  )
}

export default Mainpage